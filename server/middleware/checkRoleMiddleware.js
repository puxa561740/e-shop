const jwt = require('jsonwebtoken');

module.exports = function(role) {
  return function (req, res, next) {
    if(req.metod === 'OPTIONS') {
      next();
    } 
    try {
      const token = req.headers.autorization.split(' ')[1];
      if(!token) return res.status(401).json({message: 'Not auth!'})
      const decoded = jwt.verify(token, process.env.SEKRET_KEY);
      if(decoded.role !== role) {
        return res.status(403).json({message: 'No access!'});
      }
      next();
    } catch (e) {
      res.status(401).json({message: 'Not auth!'});
    }
  };
};