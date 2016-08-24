/**
 * DescargasController
 *
 * @description :: Server-side logic for managing descargases
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    /**
     * `DescargasController.descargar()`
     */
    descargar: function (req, res) {
        sails.log(req.param('archivo'));
        return res.json({
            todo: 'descargar() is not implemented yet!'
        });
    }
};

