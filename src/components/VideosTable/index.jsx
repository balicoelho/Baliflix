/* eslint-disable react/prop-types */
import styles from "./VideosTable.module.css";
import { useEffect, useState } from "react";

export default function VideosTable({ onRemove, onEdit }) {
  const [categories, setCatgories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const url = await fetch(
          "https://my-json-server.typicode.com/balicoelho/baliflix-api/categories"
        );
        const categories = await url.json();
        setCatgories(categories);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchCategories();
  }, []);

  function createData(categoryDisplayName, description, edit, remove, id) {
    return { categoryDisplayName, description, edit, remove, id };
  }

  const tableData = categories.map((category) => {
    return {
      categoryDisplayName: category.categoryDisplayName,
      categoryDescription: category.categoryDescription,
      id: category.id,
    };
  });

  const rows = tableData.map((row) => {
    return createData(
      row.categoryDisplayName,
      row.categoryDescription,
      "Editar",
      "Remover",
      row.id
    );
  });

  return (
    <>
      <table className={styles.table}>
        <thead className={styles.head}>
          <tr className={styles.row}>
            <td className={styles.head}>Nome</td>
            <td className={styles.head}>Descrição</td>
            <td className={styles.head} align="center">
              Editar
            </td>
            <td className={styles.head} align="center">
              Remover
            </td>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td className={styles.cell} scope="row">
                {row.categoryDisplayName}
              </td>
              <td className={styles.cell} align="left">
                {row.description}
              </td>
              <td align="center">
                <button
                  className={styles.btnTable}
                  id={row.id}
                  onClick={onEdit}
                >
                  {row.edit}
                </button>
              </td>
              <td align="center">
                <button
                  className={styles.btnTable}
                  id={row.id}
                  onClick={onRemove}
                >
                  {row.remove}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
