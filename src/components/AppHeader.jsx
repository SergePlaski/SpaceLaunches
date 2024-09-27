import styles from "./AppHeader.module.css";

function AppHeader() {
  return (
    <header>
      <div className={styles.header_container}>
        <h1 className={styles.header_title}>Upcoming Space Launches</h1>
        <div className={styles.header_subtitle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            fill="currentColor"
          >
            <path d="M480-301q99-80 149.5-154T680-594q0-90-56-148t-144-58q-88 0-144 58t-56 148q0 65 50.5 139T480-301Zm0 101Q339-304 269.5-402T200-594q0-125 78-205.5T480-880q124 0 202 80.5T760-594q0 94-69.5 192T480-200Zm0-320q33 0 56.5-23.5T560-600q0-33-23.5-56.5T480-680q-33 0-56.5 23.5T400-600q0 33 23.5 56.5T480-520ZM200-80v-80h560v80H200Zm280-520Z" />
          </svg>
          <h2>Cape Canaveral, FL</h2>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
