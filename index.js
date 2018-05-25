const express = require('express'),
    engines = require('consolidate');;
const app = express();
app.use('/css', express.static('public/css'));

app.engine('hbs', engines.handlebars);

app.set('views', './views');
app.set('view engine', 'hbs');

app.use(express.static('public'));

app.listen(5000, () => console.log('Example app listening on port 5000!'));

app.get('/', (req, res) => {

    res.render('index');

});
app.get('/proyectos', (req, res) => {

    res.render('proyectos');

});

app.get('/contacto', (req, res) => {

    res.render('contacto');

});