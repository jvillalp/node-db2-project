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
});

router.put('/:id', (req, res)=> {
    const changes =req.body
    db('cars')
    .where({id: req.params.id})
    .update(changes)
    .then(count => {
        if(count > 0){
            res.status(200).json({message: 'car was updated successfully'})
        }else {
            res.status(404).json({message: 'car not found'})
        }
    })
    .catch(err => {
        res.status(500).json({ message: 'this is an error, could not update'})
    })
});

router.delete('/:id', (req, res) => {
    db('cars')
    .where({id: req.params.id})
    .del()
    .then(count => {
        if(count > 0){
            res.status(200).json({message: 'car was successfully deleted'})
        }else{
            res.status(404).json({message: 'car was not found'})
        }
    })
    .catch(err => {
        res.status(500).json({message: 'this is an error'})
    })
})

module.exports = router;