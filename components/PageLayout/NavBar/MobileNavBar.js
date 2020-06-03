import { useState, useEffect } from "react";
import styles from "./MobileNavBar.module.scss";
import { homePageSectionsLinks, separatePageLinks } from "./Links";
import { Squeeze } from "react-burgers";
import Link from "next/link";
import { Link as ReactScrollLink } from "react-scroll";

const MobileNavBar = ({ currentPath }) => {
  const [active, setActive] = useState(false);

  const toggleBurger = () => {
    setActive(!active);
  };

  const closeMenu = () => {
    setActive(false);
  };

  const menuClass = active ? styles.isOpen : styles.isClosed;

  return (
    <>
      <nav className={styles.nav}>
        <Link href="/">
          <a>
            <img
              className={styles.logo}
              src="/images/logo.png"
              alt="GGP logo"
            />
          </a>
        </Link>
        <Squeeze
          width={25}
          lineHeight={3}
          lineSpacing={4}
          padding="0"
          color="#24b6c1"
          active={active}
          onClick={() => {
            toggleBurger();
          }}
        />
      </nav>

      <div className={`${styles.menu} ${menuClass}`}>
        <div className={styles.menuInner}>
          <ul className={styles.linksList}>
            <div className={styles.homeSectionsLinksWrapper}>
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
            </div>

            <div className={styles.sectionDivider} />

            <div>
              {separatePageLinks.map((link, index) => (
                <li key={index} className={styles.navListItem}>
                  <Link href={`/${link.url}`} key={index}>
                    <a className={styles.navLink}>{link.name}</a>
                  </Link>
                </li>
              ))}
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNavBar;
