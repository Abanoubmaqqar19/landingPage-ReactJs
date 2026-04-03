
import styles from "../css/services.module.css";

function Services() {
  return (
    <section className={styles.services}>
      <h2 className={styles.title}>Our Services</h2>
      <p className={styles.subtitle}>
        We provide a wide range of premium automotive services tailored to your
        needs.
      </p>

      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.icon}>🚗</div>
          <h3>Car Sales</h3>
          <p>
            Explore our collection of new and used vehicles with exceptional
            performance and reliability.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.icon}>🛠️</div>
          <h3>Maintenance & Repair</h3>
          <p>
            Our expert technicians offer high-quality maintenance and repair
            services for all car models.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.icon}>📄</div>
          <h3>Financing Options</h3>
          <p>
            We provide flexible financing plans to help you drive your dream car
            with ease.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
