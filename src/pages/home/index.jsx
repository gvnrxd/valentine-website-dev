import styles from "./index.module.css";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

// Images
import Gif from "@img/default-ask.gif";
import YesGif from "@img/leona-yes.gif";
import NoGif from "@img/shrug-jinx.gif";

export default function HomePage() {
  const [step, setStep] = useState(1);
  const [noIndex, setNoIndex] = useState(0);

  const handleNoClick = () => {
    // Grow Yes button
    setStep((prev) => Math.min(prev + 0.25, 1.75));

    // Change No text
    setNoIndex((prev) => Math.min(prev + 1, noTexts.length - 1));
  };

  const noTexts = [
    "No ",
    "Are you sure?",
    "Really sure?",
    "Please?",
    "PLEASEEE",
    "Last chance...",
    "Okay this is awkward",
  ];

  return (
    <>
      <div className={styles.ctnr}>
        <h1>Stormy, Will you be my Valentine?</h1>
        <img src={Gif} alt="Valentine GIF" />
        <div
          className={`${styles.btnCtnr} ${step >= 1.5 ? styles.column : ""}`}
        >
          <Link
            to="/valentine-confirmation"
            style={{ fontSize: `${step}rem` }}
            className={styles.yes}
          >
            <span>
              Yes <img src={YesGif} alt="Valentine GIF" />
            </span>
          </Link>
          <button
            style={{ fontSize: `${step}rem` }}
            className={styles.no}
            onClick={handleNoClick}
          >
            <span>
              {noTexts[noIndex]} <img src={NoGif} alt="Valentine GIF" />
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
