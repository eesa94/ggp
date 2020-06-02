import { useState, useEffect } from "react";
import styles from "./DesktopNavBar.module.scss";
import Link from "next/link";
import { Link as ReactScrollLink } from "react-scroll";

const NavBar = ({ currentPath }) => {
  // == Scroll nav ==
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const hasPassedScrollThreshold = window.scrollY > 100;

    hasPassedScrollThreshold !== scrolled
      ? setScrolled(hasPassedScrollThreshold)
      : setScrolled(false);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navClass = scrolled ? styles.scrolled : styles.notScrolled;
  // =====

  // == Generate nav links ==
  const homePageSectionsLinks = [
    { name: "Our Mission", id: "our-mission" },
    { name: "About Us", id: "about-us" },
    { name: "Benefits", id: "benefits" },
    { name: "Services", id: "services" },
  ];

  const separatePageLinks = [
    { name: "Careers", url: "careers" },
    { name: "Contact", url: "contact" },
    { name: "View Rates", url: "view-rates" },
  ];

  // =====

  return (
    <nav className={`${styles.nav} ${navClass}`}>
      <div className={styles.logoContainer}>
        {currentPath === "/" ? (
          <ReactScrollLink
            className={styles.navLink}
            activeClass={styles.active}
            to={"home"}
            spy={true}
            smooth={true}
            offset={0}
            duration={900}
          >
            <h1>GGP</h1>
          </ReactScrollLink>
        ) : (
          <Link href="/">
            <a>
              <h1>GGP</h1>
            </a>
          </Link>
        )}
      </div>
      <div className={styles.linksContainer}>
        <>
          <ul className={styles.homePageSectionsLinksList}>
            {homePageSectionsLinks.map((link, index) => (
              <li key={index} className={styles.navListItem}>
                {currentPath === "/" ? (
                  <ReactScrollLink
                    className={styles.navLink}
                    activeClass={styles.active}
                    to={link.id}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={900}
                    delay={50}
                  >
                    {link.name}
                  </ReactScrollLink>
                ) : (
                  <Link href={`/#${link.id}`}>
                    <a className={styles.navLink}>{link.name}</a>
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <ul className={styles.separatePagesLinksList}>
            {separatePageLinks.map((link, index) => (
              <li key={index} className={styles.navListItem}>
                <Link href={`/${link.url}`} key={index}>
                  <a className={styles.navLink}>{link.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </>
      </div>
    </nav>
  );
};

export default NavBar;
