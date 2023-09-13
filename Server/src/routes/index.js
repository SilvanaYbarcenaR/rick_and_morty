const express = require('express')
const usersRoutes = express.Router();
const { getCharById } = require('../Controllers/getCharById');
const { login } = require('../Controllers/login');
const { postFav, deleteFav } = require('../Controllers/handleFavorites');

usersRoutes.get('/character/:id', getCharById);
usersRoutes.get('/login', login);
usersRoutes.post('/fav', postFav);
usersRoutes.delete('/fav/:id', deleteFav);

module.exports = usersRoutes;