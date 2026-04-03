
import styles from "../css/footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <h2 className={styles.title}>Get in Touch</h2>

        <p className={styles.phone}>
          📞 Phone:{" "}
          <a href="tel:01288938773" className={styles.phoneLink}>
            01288938773
          </a>
        </p>

        <a
          href="https://wa.me/201288938773"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.whatsappBtn}
        >
          💬 Whats App
        </a>

        <p className={styles.copy}>© 2026 All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
