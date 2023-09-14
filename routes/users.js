const express = require('express');
const router = express.Router();
const userModel = require('../models/userModel');

router.get('/', (req, res) => {
    userModel.find().then(users => res.json(users)).catch(err => {
        console.error('erreur lors de la récupération des utilisateurices :', err);
        res.status(500).send('erreur serveur');
    })
})

router.post('/', (req, res) => {
    const { userName, password, email, bio, surfLevel } = req.body
    const newUser = new userModel({
        userName, password, email, bio, surfLevel
    });
    newUser.save().then(() => {
        res.status(201).json({ message: 'Profil créé avec succès !' })
    })
        .catch(err => {
            console.error('erreur lors de la création du profil :', err);
            res.status(500).send('erreur serveur');
        });
})
module.exports = router;