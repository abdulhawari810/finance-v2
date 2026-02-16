export default function Header({ styles, title, icons }) {
  return (
    <>
      <section className={styles}>
        {icons}
        <h1 className="text-lg font-bold">{title}</h1>
      </section>
    </>
  );
}
