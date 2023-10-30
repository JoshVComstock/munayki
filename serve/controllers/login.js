const express = require("express");
const { PrismaClient } = require("@prisma/client");
const app = express();
const prisma = new PrismaClient();
const jwt = require("jsonwebtoken");
const validTokens= new Set();
app.post("/login", async (req, res) => {
  const { correo, password } = req.body;

  // Buscar un usuario por su correo electrónico
  const user = await prisma.usuario.findFirst({
    where: {
      correo: correo, // Condición única basada en el correo electrónico
    },
  });

 
  if (!(user && password)) {
    res.status(401).json({
      error: "Contraseña invalida",
    });
  }
  const userForToken = {
    id: user.id,
    username: user.correo,
  };
  const token = jwt.sign(userForToken, "123");
  res.send({
    name: user.nombre,
    userName: user.correo,
    token,
  });
});
app.post("/logout", (req, res) => {
  const token = req.body.token; 
  if (validTokens.has(token)) {
    validTokens.delete(token);
    res.status(200).json({ message: "Token invalidado correctamente" });
  } else {
    res.status(401).json({ error: "Token no válido" });
  }
});

module.exports = app;
