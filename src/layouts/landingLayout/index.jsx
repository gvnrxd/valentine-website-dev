import styles from "./index.module.css";
import { Outlet } from "react-router-dom";

export default function LandingLayout() {
  return (
    <>
      <div className={styles.page}>
        <header></header>
        <main>
          <Outlet />
        </main>
        <footer></footer>
      </div>
    </>
  );
}
