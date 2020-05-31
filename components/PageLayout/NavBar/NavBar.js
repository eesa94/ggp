import styles from "./NavBar.module.scss";
import Link from "next/link";
import { Link as ReactScrollLink, animateScroll } from "react-scroll";

const scrollLinks = [
  { name: "About us", id: "our-mission" },
  { name: "Benefits", id: "benefits" },
  { name: "Services", id: "services" },
];

const separatePageLinks = [
  { name: "Careers", url: "careers" },
  { name: "Contact", url: "contact" },
  { name: "View rates", url: "view-rates" },
];

const NavBar = ({ children }) => {
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.logoContainer}>
          <Link href="/">
            <a>
              <h1>GGP</h1>
            </a>
          </Link>
        </div>
        <div className={styles.linksContainer}>
          <>
            {scrollLinks.map((link, index) => (
              <ReactScrollLink
                key={index}
                activeClass="active"
                to={link.id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {link.name}
              </ReactScrollLink>
            ))}

            {separatePageLinks.map((link, index) => (
              <Link href={`/${link.url}`} key={index}>
                <a>{link.name}</a>
              </Link>
            ))}
          </>
        </div>
      </nav>
      {children}
    </>
  );
};

export default NavBar;
