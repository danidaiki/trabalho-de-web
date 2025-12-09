import { connection } from '../db.js';

export const cadastrar = (req, res) => {
  const { marca, modelo, ano, categoria, preco, id_vendedor } = req.body;
  const imagem = req.file ? req.file.filename : null;

  connection.query(
    "INSERT INTO veiculo (marca,modelo,ano,categoria,preco,imagem,id_vendedor) VALUES (?,?,?,?,?,?,?)",
    [marca, modelo, ano, categoria, preco, imagem, id_vendedor],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });

      const created = {
        id_veiculo: result.insertId,
        marca,
        modelo,
        ano,
        categoria,
        preco,
        imagem,
        id_vendedor
      };

      return res.status(201).json(created);
    }
  );
};