import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { getCountdown } from "../lib/dates";

import styles from "./Countdown.module.css";

export function Countdown({ date }) {
  const [countdown, setCountdown] = useState(null);

  useEffect(() => {
    const updateCountdown = () => {
      const objCountdown = getCountdown(new Date(date)); // {days, hours, minutes, seconds} - numeric values
      if (objCountdown) {
        setCountdown(objCountdown);
      }
    };

    try {
      // Initial update
      updateCountdown();
      // Set up interval to update countdown display once every sec
      const intervalId = setInterval(updateCountdown, 1000);

      // Clean up interval on component unmount
      return () => clearInterval(intervalId);
    } catch (err) {
      console.error(err);
    }
  }, [date]);

  return renderCountdown(countdown);
}

Countdown.propTypes = {
  date: PropTypes.string,
  // date: PropTypes.instanceOf(Date).isRequired,
};

// Renders the countdown object
// Input: {days, hours, minutes, seconds}
// Output: a table-like dd/hh/mm/ss display
function renderCountdown(obj) {
  if (!obj) return "";
  return (
    <div className={styles.countdown__container}>
      {obj.days > 0 ? (
        <div>
          <p className={styles.countdown__value}>{(obj.days < 10 ? "0" : "") + obj.days}</p>
          <p className={styles.countdown__label}>days</p>
        </div>
      ) : (
        ""
      )}
      <div>
        <p className={styles.countdown__value}>{(obj.hours < 10 ? "0" : "") + obj.hours}</p>
        <p className={styles.countdown__label}>hrs</p>
      </div>
      <div>
        <p className={styles.countdown__value}>{(obj.minutes < 10 ? "0" : "") + obj.minutes}</p>
        <p className={styles.countdown__label}>min</p>
      </div>
      <div>
        <p className={styles.countdown__value}>{(obj.seconds < 10 ? "0" : "") + obj.seconds}</p>
        <p className={styles.countdown__label}>sec</p>
      </div>
    </div>
  );
}
