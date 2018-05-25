const express = require('express'),
    engines = require('consolidate');;
const app = express();


var fs = require('fs');
app.use('/css', express.static('public/css'));

app.engine('hbs', engines.handlebars);

app.set('views', './views');
app.set('view engine', 'hbs');

app.use(express.static('public'));

var visitas=0;



app.listen(5100, () => console.log('Example app listening on port 5100!'));

app.get('/', (req, res) => {

    res.render('index');

    
    fs.writeFile('./visitas', "vistas:" + visitas, (err) => {
        if (err) throw err;
    });
    

});
app.get('/proyectos', (req, res) => {

    res.render('proyectos');

});

app.get('/contacto', (req, res) => {

    res.render('contacto');

});