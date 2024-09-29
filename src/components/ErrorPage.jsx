import PropTypes from "prop-types";

import astronautImage from "../assets/astronaut.png";
import styles from "./ErrorPage.module.css";

export function ErrorPage({ title, message }) {
  return (
    <div className={styles.error__container}>
      <img src={astronautImage} alt="astronaut image" />
      <p className={styles.title}>{title}</p>
      <p>{message}</p>
      <a href="https://plaski.com/#projects">{ title === 'No data found.' ? 'Return to the base' : 'Back to safety'}</a>
    </div>
  );
}

ErrorPage.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
};
