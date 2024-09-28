import { useEffect, useState } from "react";

import styles from "./LoadingSpinnerCSS.module.css";

// Displays an spinner generated with CSS
// and "Loading..." text (with animated dots):  
// Some (or all) dots are styles invisible to maintain 
// the total string length constant and prevent it's repositioning.
export function LoadingSpinnerCSS() {
  const [dots, setDots] = useState(3);

  useEffect(() => {
    const interval = setInterval(
      () => setDots(prevDots => setDots(prevDots < 3 ? prevDots + 1 : 0)),
      300
    );

    // cleanup
    return () => clearInterval(interval);
  }, []);

  return <div className={styles.loader__container}>
    <div className={styles.spinner} />
    <p className={styles.loader_message}>
        <span>Loading Data</span>
        {Array.from("...").map((dot, index) => (
          <span
            key={`dot${index}`}
            className={`${styles.dot} ${index >= dots ? styles.invisible : ""}`}
          >
            {dot}
          </span>
        ))}
      </p>
  </div>
}
