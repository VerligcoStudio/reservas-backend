import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

let reservas = [];

// Criar reserva
app.post("/reservas", (req, res) => {
  const nova = { ...req.body, id: Date.now() };
  reservas.push(nova);
  res.json(nova);
});

// Listar reservas
app.get("/reservas", (req, res) => {
  res.json(reservas);
});

// Deletar reserva
app.delete("/reservas/:id", (req, res) => {
  reservas = reservas.filter(r => r.id != req.params.id);
  res.json({ message: "Reserva removida" });
});

app.listen(3000, () => console.log("Backend rodando na porta 3000"));
