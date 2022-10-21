const mariadb = require('mariadb')

// Guardamos la conexion en pool
const pool = mariadb.createPool({
  host: '127.0.0.1',
  port: '3307',
  user: 'root',
  password: 'mypassword',
  database:'mydatabase'
});
// Funcion para obtener la conexion
async function getConnection() {
  try {
    const connection = await pool.getConnection()
    return connection;
  }catch (err) {
    console.log(err);
  }
}

module.children() = {getConnection};