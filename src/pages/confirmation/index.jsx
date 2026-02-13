import styles from "./index.module.css";
import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";

const dressCodeMap = {
  "Round1 + Kami Ramen": "Casual and Comfy",
  "Monster Jam": "Casual",
  "Availa Dining Experience": "Casual Elegant",
  "Avenida Brazil": "Casual Elegant",
};

function SuccessMessage({ date, dressCode }) {
  return (
    <div className={styles.centerWrapper}>
      <div className={styles.success}>
        <h2>Date Confirmed 💘</h2>
        <p>
          <b>We’re going to:</b> {date}
        </p>
        <p>
          <b>Pick up time:</b> 5:30pm
        </p>
        <p>
          <b>Dress Code:</b> {dressCode}
        </p>
      </div>
    </div>
  );
}

function ContactForm() {
  const [state, handleSubmit] = useForm("mzdaeaba");
  const [selectedDate, setSelectedDate] = useState("");

  if (state.succeeded) {
    return (
      <SuccessMessage
        date={selectedDate}
        dressCode={dressCodeMap[selectedDate]}
      />
    );
  }

  return (
    <div className={styles.formCtnr}>
      <form onSubmit={handleSubmit}>
        <div className={styles.formHeader}>
          <h2>Confirm Our Valentine Date</h2>
          <p>Pick up time will be 5:30pm</p>
        </div>

        <label className={styles.option}>
          <input
            type="radio"
            name="valentine-date"
            value="Round1 + Kami Ramen"
            required
            checked={selectedDate === "Round1 + Kami Ramen"}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
          Round1 + Kami Ramen
        </label>

        <label className={styles.option}>
          <input
            type="radio"
            name="valentine-date"
            value="Monster Jam"
            checked={selectedDate === "Monster Jam"}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
          Monster Jam
        </label>

        <label className={styles.option}>
          <input
            type="radio"
            name="valentine-date"
            value="Availa Dining Experience"
            checked={selectedDate === "Availa Dining Experience"}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
          Availa Dining Experience
        </label>

        <label className={styles.option}>
          <input
            type="radio"
            name="valentine-date"
            value="Avenida Brazil"
            checked={selectedDate === "Avenida Brazil"}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
          Avenida Brazil
        </label>

        <ValidationError
          prefix="Date"
          field="valentine-date"
          errors={state.errors}
        />

        <button type="submit" disabled={state.submitting}>
          Confirm
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
