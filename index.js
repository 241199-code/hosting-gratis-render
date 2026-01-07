const express = require("express");
const { Pool } = require("pg");

const app = express();
const PORT = process.env.PORT || 10000;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: true
  }
});

app.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT now()");
    res.send(`
      <h1>✅ Render + CockroachDB funcionando</h1>
      <p>Hora BD:</p>
      <pre>${result.rows[0].now}</pre>
    `);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.listen(PORT, () => {
  console.log(`Servidor activo en el puerto ${PORT}`);
});
