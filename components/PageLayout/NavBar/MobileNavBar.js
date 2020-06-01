import styles from "./MobileNavBar.module.scss";
import Link from "next/link";

const MobileNavBar = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a>
          <h2 className={styles.mobileNavLogo}>GGP</h2>
        </a>
      </Link>
    </nav>
  );
};

export default MobileNavBar;
