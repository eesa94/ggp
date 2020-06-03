import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import DesktopNavBar from "./NavBar/DesktopNavBar";
import MobileNavBar from "./NavBar/MobileNavBar";
import Footer from "./Footer/Footer";
import MediaQuery from "react-responsive";

const PageLayout = ({ children }) => {
  const router = useRouter();

  const [currentPath, setCurrentPath] = useState("/");

  useEffect(() => {
    setCurrentPath(router.pathname);
  }, [router.pathname]);

  return (
    <>
      <MediaQuery maxDeviceWidth={991}>
        <MobileNavBar currentPath={currentPath} />
      </MediaQuery>

      <MediaQuery minDeviceWidth={992}>
        <DesktopNavBar currentPath={currentPath} />
      </MediaQuery>

      {children}
      <Footer />
    </>
  );
};

export default PageLayout;
