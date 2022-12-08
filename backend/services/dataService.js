const jsonData = require('../../db.json')

module.exports = {
    getJsonList: function(req, res) {
        console.log('call getJsonList()')
        res.send(jsonData)
    },
    getJsonObjById: (req, res) => {
        console.log('call getJsonObjById()')
        const id = req.params.id
        const jsonObjById = jsonData['posts'].find( jsonObj => jsonObj.id == id)
        res.send(jsonObjById)
    },
    createJsonObj: (req, res) => {
        console.log('call createJsonObj()')
        const id = req.body.id
        jsonData['posts'].push(req.body)
        res.send(jsonData)
    },
    updateJsonObjById: (req, res) => {
        console.log('call updateJsonObjById()')
        const id = req.params.id
        const jsonObjIndex = jsonData['posts'].findIndex( jsonObj => jsonObj.id == id)
        jsonData['posts'][jsonObjIndex] = req.body
        res.send(jsonData)
    },
    deleteJsonObjById: (req, res) => {
        console.log('call deleteJsonObjById()')
        const id = req.params.id
        const jsonObjIndex = jsonData['posts'].findIndex( jsonObj => jsonObj.id == id)
        jsonData['posts'].splice(jsonObjIndex, 1)
        res.send(jsonData)
    },
    getTeacherById: (req,res)=>{
        const jsonTeacher=jsonData['login-Teacher']
        res.send(jsonTeacher)
    },
    getAllStudent: (req,res)=>{
        const jsonStudent=jsonData['posts']
        res.send(jsonStudent)
    }
}