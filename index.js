const express = require('express'); //Import Express.js to project
const app = express(); //Creating the app
const port = 3000; //Assigning the port

/**Root end-point
 * Send Hello World! as String
 */
app.get('/', (req, res) => {
  res.send('API REST para cosméticos J&J');
});

/**Home end-ponit
 * Render a home page
 */
app.get('/home', (req, res) => {
  res.send('Bienvenidos a home page de la API');
});

/**Products end-point
 * Return a list of all products
 */
app.get('/products', (req, res) => {
  let { limit, offset } = req.query;
  res.json([
    {
      limit,
      offset,
    },
    {
      name: 'Mascarilla',
      descripcion: 'Mascarilla de carbón activado',
      contenido: '100',
      unidad: 'ml',
    },
    {
      name: 'Mascara para pestañas',
      descripcion: 'Mascara para pestañas',
      contenido: '80',
      unidad: 'ml',
    },
  ]);
});

/**Products end-point
 * Returns a single product info
 */
app.get('/proucts/:id', (req, res) => {
  let { id } = req.params; //Destructuring EC6, we just get what we need
  res.json({
    id,
    name: 'Mascarilla',
    descripcion: 'Mascarilla de carbón activado',
    contenido: '100',
    unidad: 'ml',
  });
});

/**Runs the server on the specified port
 * Logs the Port on the console
 */
app.listen(port, () => {
  console.log(`Servdor corriendo en el puerto ${port}`);
});
