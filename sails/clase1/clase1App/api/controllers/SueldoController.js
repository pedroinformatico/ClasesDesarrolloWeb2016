/**
 * SueldoController
 *
 * @description :: Server-side logic for managing sueldoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    /**
     * `SueldoController.monto()`
     */
    monto: function (req, res) {
        return res.json({
            valor: 10000
        });
//        return res.view('monto');
    },
    /**
     * `SueldoController.descripcion()`
     */
    descripcion: function (req, res) {
        sails.log("ip", req.path);
//        return res.json({
//            descripcion: 'esto es una descripcion'
//        });
        return res.view("homepage");
    },
    /**
     * `SueldoController.usuario()`
     */
    usuario: function (req, res) {
        return res.json({
            todo: 'usuario() is not implemented yet!'
        });
    }
};

