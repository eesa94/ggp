import styles from "./Benefits.module.scss";

const boxContent = [
  {
    text: "Reduce operating overheads, giving you the competitive advantage.",
    src: "https://source.unsplash.com/ahi73ZN5P0Y",
  },
  {
    text:
      "Fully inclusive fixed rates so you have peace of mind that your energy costs won’t spike in the duration of your contract term.",
    src: "https://source.unsplash.com/yETqkLnhsUI",
  },
  {
    text:
      "Streamline your portfolio by aligning contract end dates giving you optimum position to secure the best prices at your renewals.",
    src: "https://source.unsplash.com/XGAZzyLzn18",
  },
  {
    text:
      "All contracts between your business and your chosen supplier are regulated by OFGEM.",
    src: "https://source.unsplash.com/a1Lm99Kkqtg",
  },
  {
    text:
      "Dedicated Account Management and Customer Service teams are available 7 days a week from 8am-8pm.",
    src: "https://source.unsplash.com/_SFJhRPzJHs",
  },
  {
    text:
      "Global Gas & Power offers a free utility analysation to identify which tariffs would best suit your business.",
    src: "https://source.unsplash.com/k9e4KXs6AGQ",
  },
];

const Benefits = () => {
  return (
    <section className={styles.section} id="benefits">
      <div className={styles.container}>
        <h2 className={styles.header}>Benefits</h2>
        <div className={styles.gridContainer}>
          {boxContent.map((item, index) => (
            <div
              key={index}
              className={styles.gridBox}
              style={{ backgroundImage: `url(${item.src})` }}
            >
              <div className={styles.boxOverlay}>
                <span className={styles.boxText}>{item.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
