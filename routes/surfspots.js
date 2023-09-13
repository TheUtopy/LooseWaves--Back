const express = require('express');
const router = express.Router();
const surfspotModel = require('../models/surfspotModel');

router.get('/', (req, res) => {
    surfspotModel.find().then(surfspots => res.json(surfspots)).catch(err => {
        console.error('erreur lors de la récupération des spots de surf :', err);
        res.status(500).send('erreur serveur');
    })
})

router.post('/', (req, res) => {
    const { name, destination, difficulty, surfBreak, photo, seasonBegin, seasonEnd } = req.body
    const newSurfSpot = new surfspotModel({
        name, destination, difficulty, surfBreak, photo, seasonBegin, seasonEnd
    });
    newSurfSpot.save().then(() => {
        res.status(201).json({ message: 'Spot de surf créé avec succès !' })
    })
        .catch(err => {
            console.error('erreur lors de la création du spot de surf :', err);
            res.status(500).send('erreur serveur');
        });
})
module.exports = router;