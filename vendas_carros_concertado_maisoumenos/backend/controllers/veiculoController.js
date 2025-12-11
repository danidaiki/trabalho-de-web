import db from "../db.js";

export const criar = async (req, res) => {
  try {
    const { modelo, marca, ano, preco, id_vendedor } = req.body;

    const imagem = req.file ? req.file.filename : null;

    await db.query(
      "INSERT INTO veiculo (modelo, marca, ano, preco, imagem, id_vendedor) VALUES (?, ?, ?, ?, ?, ?)",
      [modelo, marca, ano, preco, imagem, id_vendedor]
    );

    res.json({ msg: "Veículo cadastrado!" });
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};

export const listar = async (req, res) => {
  try {
    const [dados] = await db.query("SELECT * FROM veiculo");
    res.json(dados);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
};
