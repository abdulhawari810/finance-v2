import { useEffect } from "react";

export default function Modal({ isOpen, styles, children }) {
  useEffect(() => {
    if (!isOpen) return;

    if (isOpen === true) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);
  return (
    <>
      <section className={styles}>{children}</section>
    </>
  );
}
