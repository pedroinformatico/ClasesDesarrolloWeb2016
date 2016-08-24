/**
 * sessionAuth
 *
 * @module      :: Policy
 * @description :: Simple policy to allow any authenticated user
 *                 Assumes that your login action in one of your controllers sets `req.session.authenticated = true;`
 * @docs        :: http://sailsjs.org/#!/documentation/concepts/Policies
 *
 */
module.exports = function (req, res, next) {

    // User is allowed, proceed to the next policy, 
    // or if this is the last policy, the controller
    sails.log("verificaPath");
    if ("/sueldo/descripcion" === req.path) {
        sails.log("paso");
        return next();
    }
    sails.log("no paso");
    // User is not allowed
    // (default res.forbidden() behavior can be overridden in `config/403.js`)
    return res.json({
        error: 'path invalida'
    });
};
