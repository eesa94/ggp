import styles from "./LogoTicker.module.css";

const testImageArray = [
  { id: "1", src: "https://source.unsplash.com/KxB7q987Em8/140x50" },
  { id: "2", src: "https://source.unsplash.com/_1BFldLbv6A/140x50" },
  { id: "3", src: "https://source.unsplash.com/HQJwQ7FFi9M/140x50" },
  { id: "4", src: "https://source.unsplash.com/m-d5S1XcWBY/140x50" },
  { id: "5", src: "https://source.unsplash.com/S3LfE9CLBok/140x50" },
  { id: "6", src: "https://source.unsplash.com/5fsb2FGoJ8A/140x50" },
  { id: "7", src: "https://source.unsplash.com/xCy6dZS_WLc/140x50" },
  { id: "8", src: "https://source.unsplash.com/9WCZ8EkzzKQ/140x50" },
  { id: "9", src: "https://source.unsplash.com/jUKpxAfSHlE/140x50" },
  { id: "10", src: "https://source.unsplash.com/gIvbGYxzF_I/140x50" },
  { id: "11", src: "https://source.unsplash.com/lwTKLFpxZpQ/140x50" },
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
                <div key={index}>
                  <img className={styles.image} src={item.src} alt="" />
                  <span>{item.id}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="logosTickerTwo">
            <div className={styles.logos}>
              {testImageArray.map((item, index) => (
                <div key={index}>
                  <img className={styles.image} src={item.src} alt="" />
                  <span>{item.id}</span>
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
