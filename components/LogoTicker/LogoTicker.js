import styles from "./LogoTicker.module.scss";

const supplierLogosArray = [
  { id: "1", src: "/images/suppliers/avanti_resized.png" },
  { id: "2", src: "/images/suppliers/axis_resized.png" },
  { id: "3", src: "/images/suppliers/bg_resized.png" },
  { id: "4", src: "/images/suppliers/cng_resized.png" },
  { id: "5", src: "/images/suppliers/corona_resized.png" },
  { id: "6", src: "/images/suppliers/crown_resized.png" },
  { id: "7", src: "/images/suppliers/dual_resized.png" },
  { id: "8", src: "/images/suppliers/dyce_resized.png" },
  { id: "9", src: "/images/suppliers/ecotricity_resized.png" },
  { id: "10", src: "/images/suppliers/edf_resized.png" },
  { id: "11", src: "/images/suppliers/engie_resized.png" },
  { id: "12", src: "/images/suppliers/eon_resized.png" },
  { id: "13", src: "/images/suppliers/gazprom_resized.png" },
  { id: "14", src: "/images/suppliers/haven_resized.png" },
  { id: "15", src: "/images/suppliers/hudson_resized.png" },
  { id: "16", src: "/images/suppliers/npower_resized.png" },
  { id: "17", src: "/images/suppliers/opus_resized.png" },
  { id: "18", src: "/images/suppliers/orsted_resized.png" },
  { id: "19", src: "/images/suppliers/regent_resized.png" },
  { id: "20", src: "/images/suppliers/scottish_resized.png" },
  { id: "21", src: "/images/suppliers/sse_resized.png" },
  { id: "22", src: "/images/suppliers/total_resized.png" },
  { id: "23", src: "/images/suppliers/yorkshire_resized.png" },
];

const LogoTicker = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.fadeOverlay}></div>
        <div className={styles.tickersContainer}>
          <div className="logosTickerOne">
            <div className={styles.logos}>
              {supplierLogosArray.map((item, index) => (
                <div className={styles.imageContainer} key={index}>
                  <img className={styles.image} src={item.src} alt="" />
                </div>
              ))}
            </div>
          </div>
          <div className="logosTickerTwo">
            <div className={styles.logos}>
              {supplierLogosArray.map((item, index) => (
                <div className={styles.imageContainer} key={index}>
                  <img className={styles.image} src={item.src} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoTicker;
