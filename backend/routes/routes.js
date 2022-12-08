const express = require('express')
const router = express.Router()
const dataService = require('../services/dataService')

// Create
router.post('/post', dataService.createJsonObj)
// Read All
router.get('/get_all', dataService.getJsonList)
// Read One
router.get('/get_one/:id', dataService.getJsonObjById)
// Update
router.put('/update/:id', dataService.updateJsonObjById)
// Delete
router.delete('/delete/:id', dataService.deleteJsonObjById)

router.get('/teacher', dataService.getTeacherById)

router.get('/student', dataService.getAllStudent)

module.exports = router;