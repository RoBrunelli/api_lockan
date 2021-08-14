import "reflect-metadata";
import express from "express";

import "./database";

//@types/express
const app = express();




// porta padrão sendo usada 'http//localhost:3000'
app.listen(3000, () => console.log("Server Running"));