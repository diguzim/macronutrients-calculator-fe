import styles from "./new-ingredient-form.module.css";

export default function NewIngredientForm() {
  return (
    <form className={styles.form}>
      <label>
        Name
        <input type="text" />
      </label>
      <label>
        Kcal (100g)
        <input type="number" />
      </label>
      <button type="submit">Add</button>
    </form>
  );
}
