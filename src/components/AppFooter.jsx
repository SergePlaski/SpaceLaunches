import styles from "./AppFooter.module.css";

function AppFooter() {
  return (
    <footer>
      <div className={styles.footer_container}>
        <span id={styles.footer_copy} title="https://plaski.com">
          <a href="https://plaski.com">
            &copy; {new Date().getFullYear()} Serge Plaski
          </a>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
          </svg>
        </span>
        <span id={styles.footer_links}>
          <a href="https://plaski.com#projects" title="Back to projects">Home</a>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <a href="https://github.com/sergeplaski" title="code repository">GitHub</a>
        </span>
        <span id={styles.footer_dataref}>
          Data is provided by NASASpaceflight LLC
        </span>
      </div>
    </footer>
  );
}

export default AppFooter;
