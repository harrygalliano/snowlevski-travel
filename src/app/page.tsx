import Image from "next/image";
import styles from "./page.module.css";


export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Snowlevski travel agency
        </p>
      </div>

      <div className={styles.center}>
      </div>
    </main>
  );
}
