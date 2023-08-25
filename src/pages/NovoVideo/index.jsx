import styles from "./NovoVideo.module.css";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useState } from "react";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { categories } from "../../database/db.json";

export default function NovoVideo() {
  const [title, setTitle] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [videoImgLink, setVideoImgLink] = useState("");
  const [description, setDescription] = useState("");
  const [id, setId] = useState("");
  const [select, setSelect] = useState("");

  const navigate = useNavigate();

  const onSave = (ev) => {
    ev.preventDefault();
    const novoVideo = {
      title,
      videoImgLink,
      videoLink,
      description,
      id,
      categoryDisplayName: select,
      categoryName: select.toLowerCase().replace(/\s/g, ""),
    };

    console.log(novoVideo);
  };
  const onClean = (ev) => {
    ev.preventDefault();
    setDescription("");
    setId("");
    setSelect("");
    setTitle("");
    setVideoImgLink("");
    setVideoLink("");
  };

  return (
    <Container>
      <form className={styles.form} onSubmit={onSave}>
        <div className={styles.main}>
          <h1>Novo Video</h1>
          <TextField
            className={styles.textField}
            id="filled-basic"
            variant="filled"
            fullWidth
            required
            label="Titulo"
            type="text"
            value={title}
            onChange={(ev) => setTitle(ev.target.value)}
          />
          <TextField
            className={styles.textField}
            id="filled-basic"
            variant="filled"
            fullWidth
            required
            label="Link do vídeo"
            type="text"
            value={videoLink}
            onChange={(ev) => setVideoLink(ev.target.value)}
          />
          <TextField
            className={styles.textField}
            id="filled-basic"
            variant="filled"
            fullWidth
            required
            label="Link da imagem vídeo"
            type="text"
            value={videoImgLink}
            onChange={(ev) => setVideoImgLink(ev.target.value)}
          />
          <FormControl
            variant="filled"
            className={styles.textField}
            required
            fullWidth
          >
            <InputLabel id="demo-simple-select-filled-label">
              Escolha uma categoria
            </InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={select}
              onChange={(ev) => setSelect(ev.target.value)}
            >
              {categories.map((category) => {
                return (
                  <MenuItem
                    key={category.id}
                    value={category.categoryDisplayName}
                  >
                    {category.categoryDisplayName}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>

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
          <div className={styles.buttonsRight}>
            <Button bgcolor="blue" onClick={() => navigate("/novacategoria")}>
              Nova Categoria
            </Button>
          </div>
        </div>
      </form>
    </Container>
  );
}
