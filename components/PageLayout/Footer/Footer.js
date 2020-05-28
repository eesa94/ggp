import styles from "./Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>Copyright © GGP 2020</p>
      <div>
        <Link href="/contact">
          <a>Contact us</a>
        </Link>
        <Link href="/careers">
          <a>Join GGP</a>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
