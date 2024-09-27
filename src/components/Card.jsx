import PropTypes from "prop-types";
import { Fragment, useState } from "react";
import { Countdown } from "./Countdown";

import { formatDateTimeET } from "../lib/dates";
import styles from "./Cards.module.css";

export function Card({ data }) {
  const [isCardContentExpanded, setIsCardContentExpanded] = useState(false);

  // Toggle the mission details when the card is clicked (mobile/tablet only)
  const toggleMissionDetails = () => {
    // check if the screen is mobile/tablet
    if (window.innerWidth < 1024) {
      setIsCardContentExpanded(prevState => !prevState);
    }
  };

  return (
    <div
    className={`${styles.card}${isCardContentExpanded ? ` ${styles.show_content_detail}` : ''}`}
      style={{ backgroundImage: `url(${data.imgUrl})` }}
      onClick={toggleMissionDetails}
    >
      <div className={styles.card__header}>
        <p className={styles.card__launch_operator}>{data.operator}</p>
        {data.countdown && (
          <div className={styles.card__launch_countdown}>
            <Countdown date={data.date} />
          </div>
        )}
      </div>

      <div className={styles.card__content}>
        <div className={styles.card__content_header}>
          <h2 className={styles.card__content_title}>
            {data.title.length < 30
              ? data.title
              : data.title.split("|").map((part, index) => (
                  <Fragment key={index}>
                    {part}
                    <br />
                  </Fragment>
                ))}
          </h2>
          <div className={styles.card__content_summary}>
            <p>{formatDateTimeET(data.date)}</p>
            <p>{data.location.replace(", Florida, USA", "")}</p>
          </div>
        </div>
        <div className={styles.card__content_detail}>
          <>
            {data.mission.map((detail, index) => (
              <p key={index}>{detail}</p>
            ))}
          </>
          <ul className={styles.card__mission_specs}>
            {data.specs.map((detail, index) => (
              <p key={index}>{detail}</p>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    date: PropTypes.string,
    location: PropTypes.string,
    operator: PropTypes.string,
    mission: PropTypes.arrayOf(PropTypes.string),
    specs: PropTypes.arrayOf(PropTypes.string),
    imgUrl: PropTypes.string,
    countdown: PropTypes.bool,
  }),
};
