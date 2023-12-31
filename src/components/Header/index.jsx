/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";
import Button from "../Button";
import styles from "./Header.module.css";
import logosm from "/src/assets/imagens/logoBaliflix.png";

export default function Header({ children }) {
  const navigate = useNavigate();

  return (
    <div className={styles.header}>
      <img
        onClick={() => navigate("/")}
        className={styles.logo}
        src={logosm}
        alt="Logotipo Alura"
      />
      <Button bgcolor="black" onClick={() => navigate("/novovideo")}>
        {children}
      </Button>
    </div>
  );
}
