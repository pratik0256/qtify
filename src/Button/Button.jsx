import React from "react";
import styles from "./Button.module.css";

export default function Button({prop}) {
    return <button className={styles.btn} type="submit">{prop}</button>;
}
  