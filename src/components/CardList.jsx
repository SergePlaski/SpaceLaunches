import { useEffect, useState } from "react";
import { Card } from "./Card";
// import { LoadingRocket } from "./LoadingRocket";
import { LoadingSpinnerCSS } from "./LoadingSpinnerCSS";

import { isValidDateTime } from "../lib/dates";
import styles from "./Cards.module.css";

function CardList() {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [nextScheduledLaunchIndex, setNextScheduledLaunchIndex] = useState();

  const url = `${import.meta.env.VITE_API}?_limit=9`;

  // Fetching external data is a side effect and should be handled using useEffect()
  useEffect(() => {
    setIsError(false);
    setIsLoading(true);
    setData(undefined);

    // initialize AbortController
    const controller = new AbortController();

    console.log("Fetching data...", url);
    fetch(url, { signal: controller.signal })
      .then(res => {
        // unlike axios, status codes out of 200s range are not technically errors
        // be sure to check the status code (status = 200)
        if (res.status >= 200 && res.status < 400) {
          return res.json();
        }
        return Promise.reject(res);
      })
      // .then(setData)
      .then(data => {
        setData(data);
        return data;
      })
      // Locate the first launch object with valid datetime
      .then(data =>
        setNextScheduledLaunchIndex(
          data?.findIndex(item => isValidDateTime(item.date))
        )
      )
      .then(() => {
        console.log("Data loaded.");
        setIsLoading(false);
      })
      .catch(e => {
        if (e.name === "AbortError") return;
        setIsLoading(false);
        setIsError(true);
        // TEMP
        // console.log({data, isLoading, isError, nextScheduledLaunchIndex});
      })
      .finally(() => {
        if (controller.signal.aborted) return;
      });

    // cleanup function
    return () => {
      // send an abort signal to prevent the second fetch (because of strict mode in dev mode)
      controller.abort();
    };
  }, [url]);


  const renderContent = () => {
    return (
      <div className={styles.cards_container}>
        <div className={styles.cards_wrapper}>
          {isError ? (
            <h1>Error loading data</h1>
          ) : isLoading ? (
            <LoadingSpinnerCSS />
          ) : data?.length > 0 ? (
            data.map((item, index) => (
              <Card
                key={index}
                data={
                  index === nextScheduledLaunchIndex
                    ? { ...item, countdown: true }
                    : item
                }
              />
            ))
          ) : (
            <h1>No data loaded</h1>
          )}
        </div>
      </div>
    );
  };

  return renderContent();
}

export default CardList;
