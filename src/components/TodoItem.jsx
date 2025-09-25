import React from "react";
import styles from "./TodoItem.module.css";

function Todoitem({ text }) {
  return (
    <div>
      <input type="chekbox" className={styles.checkbox} />
      <span className={styles.text}>{text}</span>
      <button className={styles.deleteBtn}>x</button>
    </div>
  );
}
export default Todoitem;
