const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Productos
const productos = ['banana', 'cebollas', 'lechuga', 'papas', 'pimenton', 'tomate'];

// Configuración de EJS y rutas estáticas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Ruta raíz
app.get('/', (req, res) => {
    res.render('dashboard', { productos });
});

// Servir Bootstrap y jQuery desde node_modules
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')));

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});


