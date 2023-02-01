const { response } = require('express')
const express = require('express')
const { request } = require('http')
const ObjectId = require('mongodb').ObjectId

const createRouter = function(collection) {
    
    const router = express.Router()

    router.get('/', (request, response) => {
        collection.find().toArray()
            .then((documents) => response.json(documents))
            .catch(error => {
                console.error(error)
                response.status(500)
                response.json({status:500, error:error})
            })
    })


    router.post('/', (request, response) => {
        const newData = request.body
        collection.insertOne(newData)
            .then(result => response.json(result.insertedId))
    })


    router.delete('/:id', (request, response) => {
        const id = request.params.id
        collection.deleteOne({ _id: new ObjectId(id)})
            .then(result => {
                response.json(result)
            })
        .catch((err) => {
            console.error(err)
            response.status(500)
            response.json({status: 500, error: err})
        })
    })

    return router
}

module.exports = createRouter