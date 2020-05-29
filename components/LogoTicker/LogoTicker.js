import styles from "./LogoTicker.module.scss";

const testImageArray = [
  { id: "1", src: "https://source.unsplash.com/KxB7q987Em8/140x80" },
  { id: "2", src: "https://source.unsplash.com/_1BFldLbv6A/140x80" },
  { id: "3", src: "https://source.unsplash.com/HQJwQ7FFi9M/140x80" },
  { id: "4", src: "https://source.unsplash.com/m-d5S1XcWBY/140x80" },
  { id: "5", src: "https://source.unsplash.com/S3LfE9CLBok/140x80" },
  { id: "6", src: "https://source.unsplash.com/5fsb2FGoJ8A/140x80" },
  { id: "7", src: "https://source.unsplash.com/xCy6dZS_WLc/140x80" },
  { id: "8", src: "https://source.unsplash.com/9WCZ8EkzzKQ/140x80" },
  { id: "9", src: "https://source.unsplash.com/jUKpxAfSHlE/140x80" },
  { id: "10", src: "https://source.unsplash.com/gIvbGYxzF_I/140x80" },
  { id: "11", src: "https://source.unsplash.com/lwTKLFpxZpQ/140x80" },
  { id: "12", src: "https://source.unsplash.com/apgH3Q880cw/140x80" },
  { id: "13", src: "https://source.unsplash.com/imbTFiEY9ls/140x80" },
  { id: "14", src: "https://source.unsplash.com/rvV3wOuxNWs/140x80" },
  { id: "15", src: "https://source.unsplash.com/sBga13mu80c/140x80" },
  { id: "16", src: "https://source.unsplash.com/12mi25fTAmM/140x80" },
  { id: "17", src: "https://source.unsplash.com/q_SsevhyQl0/140x80" },
  { id: "18", src: "https://source.unsplash.com/hUP6mI6xO8s/140x80" },
  { id: "19", src: "https://source.unsplash.com/6MsHF5FBhHI/140x80" },
  { id: "20", src: "https://source.unsplash.com/ZyM1SIGWpCI/140x80" },
  { id: "21", src: "https://source.unsplash.com/TFqjlTmkeyY/140x80" },
  { id: "22", src: "https://source.unsplash.com/URZ3LyYwZH0/140x80" },
  { id: "23", src: "https://source.unsplash.com/Mi7Y2PWNvcw/140x80" },
  { id: "24", src: "https://source.unsplash.com/ooGR7NRVt0g/140x80" },
  { id: "25", src: "https://source.unsplash.com/r36d1SXEpNo/140x80" },
  { id: "26", src: "https://source.unsplash.com/aYUnrtYnG88/140x80" },
  { id: "27", src: "https://source.unsplash.com/GrlUGYJwu2c/140x80" },
  { id: "28", src: "https://source.unsplash.com/VRKmyDgYUpc/140x80" },
  { id: "29", src: "https://source.unsplash.com/pMclGjHKqzg/140x80" },
  { id: "30", src: "https://source.unsplash.com/T87EFhuqfYc/140x80" },
];

const LogoTicker = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.fadeOverlay}></div>
        <div className={styles.tickersContainer}>
          <div className="logosTickerOne">
            <div className={styles.logos}>
              {testImageArray.map((item, index) => (
                <div className={styles.imageContainer} key={index}>
                  <img className={styles.image} src={item.src} alt="" />
                  <div className={styles.imageOverlayBox}>
                    <span className={styles.temporaryImageOverlay}>
                      {item.id}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="logosTickerTwo">
            <div className={styles.logos}>
              {testImageArray.map((item, index) => (
                <div className={styles.imageContainer} key={index}>
                  <img className={styles.image} src={item.src} alt="" />
                  <div className={styles.imageOverlayBox}>
                    <span className={styles.temporaryImageOverlay}>
                      {item.id}
                    </span>
                  </div>
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
