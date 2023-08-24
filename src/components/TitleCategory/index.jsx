import styles from "./TitleCategory.module.css";

export default function TitleCategory({
  // eslint-disable-next-line react/prop-types
  categoryColor,
  titleCategory,
  categoryDescription,
}) {
  return (
    <section className={styles.section}>
      <div
        className={styles.title}
        style={{ backgroundColor: `${categoryColor}` }}
      >
        <h2>{titleCategory}</h2>
      </div>
      <p>{categoryDescription}</p>
    </section>
  );
}
