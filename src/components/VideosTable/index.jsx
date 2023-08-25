/* eslint-disable react/prop-types */
import styles from "./VideosTable.module.css";
import { categories } from "../../database/db";

function createData(categoryDisplayName, description, edit, remove) {
  return { categoryDisplayName, description, edit, remove };
}

const tableData = categories.map((category) => {
  return {
    categoryDisplayName: category.categoryDisplayName,
    categoryDescription: category.categoryDescription,
  };
});

const rows = tableData.map((row) => {
  return createData(
    row.categoryDisplayName,
    row.categoryDescription,
    "Editar",
    "Remover"
  );
});

export default function VideosTable({ onEdit, onRemove }) {
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
            <tr key={row.categoryDisplayName}>
              <td className={styles.cell} scope="row">
                {row.categoryDisplayName}
              </td>
              <td className={styles.cell} align="left">
                {row.description}
              </td>
              <td align="center">
                <button
                  className={styles.btnTable}
                  id={row.categoryDisplayName}
                  onClick={onEdit}
                >
                  {row.edit}
                </button>
              </td>
              <td align="center">
                <button
                  className={styles.btnTable}
                  id={row.categoryDisplayName}
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
