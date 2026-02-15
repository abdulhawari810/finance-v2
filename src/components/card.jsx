export default function Card({styles, children}){
  return(
    <>
      <section className={styles}>{children}</section>
    </>
    )
}