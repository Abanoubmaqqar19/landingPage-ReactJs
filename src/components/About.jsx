
import styles from "../css/about.module.css";

function About() {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <div className={styles.image}>
          <img
            src="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=80"
            alt="Car Agency"
          />
        </div>

        <div className={styles.content}>
          <h2 className={styles.title}>About Our Agency</h2>
          <p className={styles.text}>
            We are a leading car agency offering a wide range of premium
            vehicles with exceptional performance and reliability. Our mission
            is to deliver top-quality cars with affordable prices and
            outstanding customer service.
          </p>
          <p className={styles.text}>
            With years of experience in the automotive industry, we ensure that
            every customer finds the perfect car that fits their needs and
            lifestyle.
          </p>

          <button className={styles.ctaBtn}>Learn More</button>
        </div>
      </div>
    </section>
  );
}

export default About;
