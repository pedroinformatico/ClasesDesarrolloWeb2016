/**
 * UsuarioController
 *
 * @description :: Server-side logic for managing usuarios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    login: function (req, res) {
//TODO: poner toda la logica para registrarnos
        req.session.authenticated = true;
        return res.view('homepage');
    },
    logout: function (req, res) {
//TODO: poner toda la logica para registrarnos
        req.session.authenticated = false;
        return res.view('homepage');
    },
    mostrarTodo: function (req, res) {
//TODO: poner toda la logica para registrarnos
        req.session.authenticated = false;
        return res.view('homepage');
    },
};

