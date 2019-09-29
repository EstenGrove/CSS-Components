import React, { useState } from "react";
import styles from "../css/CheckmarkAccent.module.scss";

const CheckmarkAccent = ({ onColors, offColors }) => {
  const [wasClicked, setWasClicked] = useState(false);

  console.log(wasClicked);

  return (
    <>
      <div
        class={styles.CheckmarkAccent}
        onClick={() => setWasClicked(!wasClicked)}
        style={wasClicked ? onColors : offColors}
      >
        <div
          class={styles.CheckmarkAccent_check}
          style={wasClicked ? onColors : offColors}
        >
          ✓
        </div>
      </div>

      <section className={styles.output}>
        Local State: {wasClicked.toString()}
      </section>
    </>
  );
};
export default CheckmarkAccent;
