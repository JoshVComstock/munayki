const { PrismaClient } = require("@prisma/client");
const express = require("express");
const app = express();
const prisma = new PrismaClient();

app.get("/organizacion", async (req, res) => {
  const organizacion = await prisma.organizacion.findMany({
    include: {
      usuario: true,
    },
  });
  res.send(organizacion);
});
app.post("/organizacion", async (req, res) => {
  try {
    const organizacion = await prisma.organizacion.create({
      data: {
        nombre: req.body.nombre,
        areVulnerable: req.body.areVulnerable,
        ubicacion: req.body.ubicacion,
        ubicacionData:req.body.ubicacionData
      }
    });
    res.json({
      message: "successully created",
      data: organizacion,
    });
  } catch (error) {
    if (error.code === "P2002" && error.meta?.target?.includes("nombre")) {
      return res.status(400).json({
        error: "Ya existe una organización con este nombre.",
      });
    }
    console.error(error);
    res.status(500).json({
      error: "Error interno del servidor al crear la organización.",
    });
  }
});
app.put("/organizacion/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const organizacionActualizada = await prisma.organizacion.update({
    where: {
      id,
    },
    data: {
      areVulnerable,
      nombre,
      ubicacion,
    },
  });
  res.json(organizacionActualizada);
});
app.delete("/organizacion/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const deleted = await prisma.organizacion.delete({
    where: {
      id: id,
    },
  });
  res.json({
    message: "succesfully deleted",
    data: deleted,
  });
});

module.exports = app;
