import { db } from "../db.js";

export const getUsers = (_, res) => {
  const q = "SELECT * FROM animais";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const addUser = (req, res) => {
  const q =
    "INSERT INTO animais(`nome`, `especie`, `data_nascimento`) VALUES(?)";

  const values = [req.body.nome, req.body.especie, req.body.data_nascimento];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Animal criado com sucesso.");
  });
};

export const updateUser = (req, res) => {
  const q =
    "UPDATE animais SET `nome` = ?, `especie` = ?, `data_nascimento` = ? WHERE `id` = ?";

  const values = [req.body.nome, req.body.especie, req.body.data_nascimento];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Animal atualizado com sucesso.");
  });
};

export const deleteUser = (req, res) => {
  const q = "DELETE FROM animais WHERE `id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Animal deletado com sucesso.");
  });
};
