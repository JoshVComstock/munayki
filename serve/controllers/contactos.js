const express = require("express");
const { PrismaClient } = require("@prisma/client");
const app = express();
const prisma = new PrismaClient();

app.get("/user/contactos", async (req, res) => {
  try {
    const contactos = await prisma.contacto.findMany({});
    res.json(contactos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener contactos" });
  }
});
app.post("/contactos", async (req, res) => {
  const contactos = prisma.contacto.findMany({
    data: req.body,
  });
  res.json(contactos);
});
module.exports = app;
