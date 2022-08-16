const uuId = require('uuid');
const path = require('path');
const ApiError = require('../error/ApiError');
const { Device } = require('../models/models');

class DeviceController {
  async create (req, res) {
    try {
      const {name, price, brandId, typeId, info} = req.body;
      const {img} = req.files;
      let fileName = uuId.v4() + '.jpg';
      img.mv(path.resolve(__dirname, '..', 'static', fileName));

      const device = await Device.create({name, price, brandId, typeId, img: fileName});
      return res.json(device);
    } catch (e) {
      res.json(ApiError.badRequest(e.message));
    }
  }

  async getAll (req, res) {
    const {brandId, typeId} = req.query;
    let devices;
    if(!brandId && !typeId) {
      devices = await Device.findAll();
    }
    if(brandId && !typeId) {
      devices = await Device.findAll({where:{brandId}});
    }
    if(!brandId && typeId) {
      devices = await Device.findAll({where:{typeId}});
    }
    if(brandId && typeId) {
      devices = await Device.findAll({where:{typeId, brandId}});
    }
    return res.json(devices);
  }

  async getOne (req, res) {

  }
}

module.exports = new DeviceController();