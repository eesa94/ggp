import DesktopNavBar from "./NavBar/DesktopNavBar";
import MobileNavBar from "./NavBar/MobileNavBar";
import Footer from "./Footer/Footer";
import MediaQuery from "react-responsive";

const PageLayout = ({ children }) => {
  return (
    <>
      <MediaQuery maxDeviceWidth={991}>
        <MobileNavBar />
      </MediaQuery>

      <MediaQuery minDeviceWidth={992}>
        <DesktopNavBar />
      </MediaQuery>

      {children}
      <Footer />
    </>
  );
};

export default PageLayout;
