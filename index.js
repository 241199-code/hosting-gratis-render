const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("🚀 Hosting GRATIS en Render funcionando");
});

app.listen(PORT, () => {
  console.log("Servidor activo en el puerto " + PORT);
});
