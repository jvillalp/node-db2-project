const express = require('express');

const db = require('../data/connection')

const router = express.Router();

router.get('/', (req, res) => {
    db('cars')
    .then(cars => {
        res.status(200).json(cars)
    })
    .catch( err => {
        res.status(500).json({message: 'failed to retrieve cars'})
    })
});

router.post('/', (req, res) => {
    const carData = req.body;
    db('cars').insert(carData)
    .then(ids => {
        db('cars').where({ id: ids[0]})
        .then(newCarEntry => {
            res.status(201).json(newCarEntry)
        })
    })
    .catch(err => {
        res.status(500).json({message: "failed to store data"})
    })
})

module.exports = router;