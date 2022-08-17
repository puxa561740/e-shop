const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {User, Basket} = require('../models/models');

const generateJwt = (id, email, role)=> {
  return jwt.sign(
    {id, email, role}, 
    process.env.SECRET_KEY,
    {expiresIn: '24h'}
    )
};


class UserController {
  async registration (req, res, next) {
    const {email, password, role} = req.body;
    if(!email || !password) {
      return next(ApiError.badRequest('Wrong email or password!'));
    }
    const candidate = await User.findOne({where: {email}});
    if(candidate) {
      return next(ApiError.badRequest('User with this email already exists!'));
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const user = await User.create({email, role, password: hashPassword});
    const basket = await Basket.create({userId: user.id});
    const jsonWebToken = generateJwt(user.id, user.email, user.role);
    return res.json({jsonWebToken});
  }

  async login (req, res, next) {
    const {email, password} = req.body;
    const user = await User.findOne({where: {email}})
    if(!user) {
      return next(ApiError.internal('User not found!'));
    }
    let comparePassword = bcrypt.compareSync(password, user.password);
    if(!comparePassword) {
      return next(ApiError.internal('Invalid password!'))
    }
    const jsonWebToken = generateJwt(user.id, user.email, user.role);
    return res.json({jsonWebToken});
  }

  async check (req, res, next) {
    const token = generateJwt(reg.user.id, req.user.email, req.user.role);
    return res.json({token});
  }
}

module.exports = new UserController()