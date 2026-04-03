
import styles from "../css/hero.module.css";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1 className={styles.title}>Find Your Perfect Car Today</h1>
          <p className={styles.subtitle}>
            Explore our latest collection with premium quality, advanced
            technology, and unbeatable deals.
          </p>
          <button className={styles.ctaBtn}>Browse Cars</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
