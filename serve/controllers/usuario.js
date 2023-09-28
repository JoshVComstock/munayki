const express = require("express");
const { PrismaClient } = require("@prisma/client")
const app = express();
const prisma = new PrismaClient();

app.get('/user', async (res) => {
    const usuarios = await prisma.Usuario.findMany({
        
    });
    res.json(usuarios);
})

app.post('/user', async (req, res) => {
    const newUser = await prisma.Usuario.create({
        data: {
            nombre:req.body.nombre,
            apellido:req.body.apellido,
            edad:req.body.edad,
            telefono:req.body.telefono,
            carnet:req.body.carnet,
            correo:req.body.correo,
            password:req.body.password,
            rol:req.body.rol,
            genero:req.body.genero,
        },
    })
    res.json({
        message:"sucessully create",
        data:newUser
    });
});

app.put('/user/:id',async(req,res)=>{
    const id=parseInt(req.params.id);
    const userUpdate= await prisma.usuario.update({
        where:{
            id,
        },
        data:{
            nombre,
            AlertasUsuario,
            apellido,
            carnet,
            correo,
            edad,
            genero,
            telefono,
            password,
            Organizacion,
            rol,
        }
    });
    res.json({
        message:"successully update",
        data:userUpdate
    })
});
app.delete('/user/:id',async(req,res)=>{
    const id=parseInt(req.params.id);
    const userUpdate= await prisma.usuario.delete({
        where:{
            id,
        }
    });
    res.json({
        message:"successully delete",
        data:userUpdate
    })
});

module.exports=app