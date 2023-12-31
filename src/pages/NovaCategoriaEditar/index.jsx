import styles from "./NovaCategoriaEditar.module.css";
import Container from "@mui/material/Container";
import FormNovaCategoria from "../../components/FormNovaCategoria";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function NovaCategoriaEditar() {
  const [videos, setVideos] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/balicoelho/baliflix-api/videos")
      .then((resposta) => resposta.json())
      .then((dados) => {
        setVideos(dados);
      });
  }, []);

  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/balicoelho/baliflix-api/categories"
    )
      .then((resposta) => resposta.json())
      .then((dados) => {
        setCategories(dados);
      });
  }, []);

  const { id } = useParams();
  const categoryToEdit = categories.find((c) => String(c.id) === id);

  let [name, setName] = useState(categoryToEdit.categoryDisplayName);
  const [description, setDescription] = useState(
    categoryToEdit.categoryDescription
  );
  const [color, setColor] = useState(categoryToEdit.categoryColor);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const clean = () => {
    setDescription("");
    setName("");
    setColor("#000000");
  };

  const aoMudar = () => {
    const videoExist = videos.some(
      (v) => v.categoryName === categoryToEdit.categoryName
    );

    if (videoExist && name !== categoryToEdit.categoryDisplayName) {
      setError(true);
      setErrorMessage(
        "Categoria já existe em videos criados. Não é possível alterar nome da categoria"
      );
      setName(categoryToEdit.categoryDisplayName);
    }

    const demaisCategorias = categories.filter((c) => String(c.id) !== id);
    const category = demaisCategorias.find(
      (c) => c.categoryName === name.toLowerCase().replace(/\s/g, "")
    );

    if (category) {
      setError(true);
      setErrorMessage("Categoria já existe, digite uma nova categoria.");
      return;
    }
  };

  const onFocus = () => {
    setError(false);
    setErrorMessage("");
  };

  const onSave = (ev) => {
    ev.preventDefault();

    if (!error) {
      (categoryToEdit.categoryName = name.toLowerCase().replace(/\s/g, "")),
        (categoryToEdit.categoryDisplayName = name);
      (categoryToEdit.categoryColor = color),
        (categoryToEdit.categoryDescription = description),
        alert("Categoria alterada com sucesso!");
      navigate(-1);
    }
  };

  const onClean = (ev) => {
    clean();
    ev.preventDefault();
  };

  return (
    <Container className={styles.container}>
      <FormNovaCategoria
        onSave={onSave}
        name={name}
        onChangeName={(ev) => setName(ev.target.value)}
        onChangeDescription={(ev) => setDescription(ev.target.value)}
        onChangeColor={(ev) => setColor(ev.target.value)}
        error={error}
        errorMessage={errorMessage}
        aoMudar={aoMudar}
        description={description}
        color={color}
        onClean={onClean}
        onFocus={onFocus}
      />
    </Container>
  );
}
