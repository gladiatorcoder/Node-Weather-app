const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const hbs = require('hbs');
const geoCode = require('./utils/geoCode.js');
const forecast = require('./utils/forecast.js');

//PATHS FOR EXPRESS CONFIG
const publicDir = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

//SETUP HANDLEBARS ENGINE AND VIEWS LOCATION
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);


app.use(express.static(publicDir)); 

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather app',
        name: 'Shakir Ahmed'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About app',
        name: 'Shakir Ahmed'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        msg: 'This is the help page. All content relating to your queries will be displayed here shortly.',
        name: 'Shakir Ahmed'
    })
})

app.get('/products', (req, res) => {
    if(!req.query.search){
        return res.send({
            message: "You must provide a search term"
        })
    }
    res.send({
        products: []
    });
});

// app.get('/weather',(req, res) => {
//     if(!req.query.address){
//         res.send({
//             error: 'Address required!'
//         })
//     }
//     geoCode(req.query.address, (err, geoData) => {
//         if(err){
//             return res.send({
//                 error: err
//             })
//         }
//         forecast(geoData.latitude, geoData.longitude, (err, data) => {
//             if(err){
//                 return res.send({
//                     error: err
//                 })
//             }
//             res.send({
//                 forecast: data,
//                 location: geoData.location,
//                 address: req.query.address  
//             })
//         })
//     })
// })

app.get('/weather', (req, res) => {
    if(!req.query.address){
        return res.send({
            error: 'Address required!'
        })
    }
    geoCode(req.query.address, (err, cords) => {
        if(err){
            return res.send({
                error: err
            })
        }
        forecast(cords.latitude, cords.longitude, (err, result) => {
            if(err){
                return res.send({
                    error: err
                })
            }
            res.send({
                location: cords.location,
                forecast: result
            })
        })
    })
})

app.get('/help/*', (req, res) => {
    res.render('error',{
        title: 404,
        name: 'Shakir Ahmed',
        errorMessage: 'Help article not found'
    });
});

app.get('*', (req, res) => {
    res.render('error',{
        title: 404,
        name: 'Shakir Ahmed',
        errorMessage: 'Page not found'
    });
});

app.listen(port, () => {
    console.log('Server running on port ' +port);
})