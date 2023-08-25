import styles from "./NovaCategoria.module.css";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Button from "../../components/Button";
import { categories } from "../../database/db.js";
import VideosTable from "../../components/VideosTable";

export default function NovaCategoria() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [id, setId] = useState("");
  const [color, setColor] = useState("#000000");

  const onSave = (ev) => {
    ev.preventDefault();
    const novaCategoria = {
      categoryName: name.toLowerCase().replace(/\s/g, ""),
      categoryColor: color,
      categoryDescription: description,
      categoryDisplayName: name,
    };

    categories.push(novaCategoria);
  };
  const onClean = (ev) => {
    ev.preventDefault();
    setDescription("");
    setId("");
    setName("");
    setColor("#000000");
  };

  const onEdit = (ev) => {
    const category = categories.find(
      (c) => c.categoryDisplayName == ev.target.id
    );
    setName(category.categoryDisplayName);
    setDescription(category.categoryDescription);
    setId(category.id);
    setColor(category.categoryColor);
  };

  const onRemove = (ev) => {
    const category = categories.find(
      (c) => c.categoryDisplayName == ev.target.id
    );
    const index = categories.findIndex((c) => c.id === category.id);
    categories.splice(index, 1);
  };

  return (
    <Container className={styles.container}>
      <form className={styles.form} onSubmit={onSave}>
        <div className={styles.main}>
          <h1>Nova Categoria</h1>
          <TextField
            className={styles.textField}
            id="filled-basic"
            variant="filled"
            fullWidth
            required
            label="Nome"
            type="text"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          />

          <TextField
            className={styles.multilineField}
            id="filled-basic"
            variant="filled"
            fullWidth
            required
            label="Descrição"
            multiline
            rows={4}
            type="text"
            value={description}
            onChange={(ev) => setDescription(ev.target.value)}
          />
          <div className={styles.inputColor}>
            <label>Cor:</label>
            <input
              type="color"
              label="Cor"
              value={color}
              onChange={(ev) => setColor(ev.target.value)}
            />
          </div>

          <TextField
            className={styles.textField}
            id="filled-basic"
            variant="filled"
            fullWidth
            required
            label="Código de segurança"
            type="text"
            value={id}
            onChange={(ev) => setId(ev.target.value)}
          />
        </div>
        <div className={styles.buttons}>
          <div className={styles.buttonsLeft}>
            <Button bgcolor="blue">Salvar</Button>
            <Button bgcolor="grey" onClick={onClean}>
              Limpar
            </Button>
          </div>
        </div>
      </form>

      <VideosTable onEdit={onEdit} onRemove={onRemove} />
    </Container>
  );
}
