const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  if(req.metod === 'OPTIONS') {
    next();
  } 
  try {
    const token = req.headers.autorization.split(' ')[1];
    if(!token) return res.status(401).json({message: 'Not auth!'})
    const decoded = jwt.verify(token, process.env.SEKRET_KEY);
    next()
  } catch (e) {
    res.status(401).json({message: 'Not auth!'})
  }
};