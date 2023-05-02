import { useState, useEffect } from "react";
import styles from "./catlist.module.css";

function CatList({ data }) {
  return (
    <div>
      <ul className={styles["list"]}>
        {data.map((cat, i) => {
          return (
            // list item component
            <li key={`cat-list-item-${cat.name}`} className={styles["list-item"]}>
              <h2 className={styles["cat-name"]}>{cat.name}</h2>
              <p className={styles["description"]}>{`Cuteness level: ${cat.cutenessLevel}`}</p>
              <p className={styles["description"]}>{`Allergy inducing fur: ${cat.allergyInducingFur}`}</p>
              <p className={styles["description"]}>{`Lives left: ${cat.livesLeft}`}</p>
              <br></br>
              <img src={cat.imageUrl} alt={cat.name} className={styles["img-item"]}/>
              <br></br>
              <br></br>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CatList;
