export default function Header({ styles, title, icons }) {
  return (
    <>
      <section className={styles}>
        {icons}
        <h1>{title}</h1>
      </section>
    </>
  );
}
