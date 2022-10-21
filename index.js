const express = require('express')
const app = express()

const pool = require('./database')

app.get('/products', async (req, res) => {
  const conn = pool.getConnection();

  // Create a new query
  const query = 'SELECT * FROM products';

  // Executing de query
  const rows = await conn.query(query);

  // respond to the client
  res.status(200).json(rows);
  
});


app.listen(3000, () => {
  console.log(3000)
})