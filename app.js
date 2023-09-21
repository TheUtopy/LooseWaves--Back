const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());
//import des routes
const routeSurfSpots = require('./routes/surfspots');
const routeUsers = require('./routes/users')

mongoose.connect('mongodb+srv://admin:loosewaves@loosewaves.2hmpcb5.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp',

   {
      useNewUrlParser: true,
      useUnifiedTopology: true
   })
   .then(() => console.log('Connexion à MongoDB réussie !'))
   .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res, next) => {
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
   next();
});
app.use('/surfspots', routeSurfSpots);
app.use('/users', routeUsers);


app.post('/api/stuff', (req, res, next) => {
   console.log(req.body);
   res.status(201).json({
      message: 'Objet créé !'
   });
});

module.exports = app;