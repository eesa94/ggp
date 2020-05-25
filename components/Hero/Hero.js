import styles from "./Hero.module.css";
// import { useEffect } from "react";

const Hero = () => {
  // https://stackoverflow.com/questions/1927610/how-to-verify-background-css-image-was-loaded
  // not sure if the below actually makes a difference
  // alternatively try this https://www.selbekk.io/blog/2019/05/how-to-write-a-progressive-image-loading-hook/

  // useEffect(() => {
  //   let heroDiv = document.querySelector(".Hero_container__18hN4");
  //   let bgImage = new Image();
  //   bgImage.onload = function () {
  //     heroDiv.style.backgroundImage = `url(${bgImage.src})`;
  //     console.log("image loaded---");
  //   };
  //   bgImage.src = "/images/earth.jpg";
  // });

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <span>hey</span>
      </div>
    </section>
  );
};

export default Hero;
