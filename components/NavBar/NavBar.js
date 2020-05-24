import styles from "./NavBar.module.css";

const NavBar = ({ children }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <span>Hi</span>
      </div>
      {children}
    </>
  );
};

export default NavBar;
