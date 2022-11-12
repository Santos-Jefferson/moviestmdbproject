var express = require('express');
var app = express();
const {request} = require("express");

app.get('/movies', function (req, res) {
    let search = req.query.search
    let api_key = "YOUR_TMDB_TOKEN_HERE"

    const axios = require('axios')

    // Make request
    axios.get("http://api.themoviedb.org/3/search/movie?api_key="+api_key+"&language=en-US&query="+search+"&page=1&include_adult=false")

      // Show response data
      .then(res => console.log(res.data.results))
      .catch(err => console.log(err))

})

var server = app.listen(3001, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})