var express = require('express')

var app = express()

app.get('/hello', (req, res) =>{
    res.send("<h1>Hello Express JS")
})

app.get('/user', (req, res) =>{
    var first_name = req.query.fnm
    var last_name = req.query.lnm
    console.log(req.query)

    let response = {
        first_name,
        last_name
    }

    res.send(response)
})

app.get("/user/:first_name/:last_name", (req, res) =>{
    console.log(req.params)

    var fnm = req.params.first_name
    var lnm = req.params.last_name

    let response = {
        first_name: fnm,
        last_name: lnm
    }

    res.send(response)
})

app.post("/user/:first_name/:last_name", (req, res) =>{
    console.log(req.params)

    var fnm = req.params.first_name
    var lnm = req.params.last_name

    let response = {
        first_name: fnm,
        last_name: lnm
    }

    res.send(response)
})

let server = app.listen(8089, () => {
    var host = server.address().address
    var port = server.address().port

    console.log('Server is running at http://%s:%s', host, port)
})