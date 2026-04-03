
import styles from "../css/header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>CarAgency</div>

      <nav className={styles.nav}>
        <a href="#home">Home</a>
        <a href="#cars">Cars</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>

      <button className={styles.ctabtn}>Book Now</button>
    </header>
  );
}

export default Header;
