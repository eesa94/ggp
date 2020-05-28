import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";

const PageLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default PageLayout;
