const express = require("express");
const { PrismaClient } = require("@prisma/client");
const app = express();
const prisma = new PrismaClient();

// app.get("/user/contacts", async (req, res) => {

//     const contactos = await prisma.contactos.findMany({});

//     // if (!user) {
//     //   return res.status(404).json({ error: "Usuario no encontrado" });
//     // }

//     // res.json({ user: user, contactos: user.contactos });
//     res.json(contactos);
// });

app.get("/user/contactos", async (req, res) => {
  try {
    const contactos = await prisma.contacto.findMany({});
    res.json(contactos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener contactos" });
  }
});

module.exports = app;
