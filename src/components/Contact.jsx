
import styles from "../css/contact.module.css";

function Contact() {
  return (
    <section className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.title}>Contact Us</h2>
        <p className={styles.subtitle}>
          Have questions? We’re here to help you find the perfect car.
        </p>

        <div className={styles.grid}>
          {/* Contact Form */}
          <form className={styles.form}>
            <input
              type="text"
              placeholder="Your Name"
              className={styles.input}
            />
            <input
              type="email"
              placeholder="Your Email"
              className={styles.input}
            />
            <textarea
              placeholder="Your Message"
              className={styles.textarea}
            ></textarea>
            <button type="submit" className={styles.btn}>
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className={styles.info}>
            <h3>Get in Touch</h3>
            <p>
              <strong>Phone:</strong> +1 234 567 890
            </p>
            <p>
              <strong>Email:</strong> support@caragency.com
            </p>
            <p>
              <strong>Address:</strong> 123 Auto Drive, Los Angeles, CA
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
