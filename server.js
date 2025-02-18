require("dotenv").config();

const express = require("express");
const cors = require("cors");
const usersRoutes = require("./src/routes/usersRoutes");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors()); 
app.use(express.json()); 

app.use("/api", usersRoutes);

app.get("/", (req, res) => {
    res.send("ROTA TA FUNCIONANDO!!");
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});