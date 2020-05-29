import styles from "./Benefits.module.scss";

const boxContent = [
  {
    text: "Normcore VHS single-origin coffee blue bottle",
    src: "https://source.unsplash.com/ahi73ZN5P0Y",
  },
  {
    text:
      "Readymade try-hard health goth irony ennui glossier. Pug banjo stumptown PBR&B pour-over umami",
    src: "https://source.unsplash.com/yETqkLnhsUI",
  },
  {
    text:
      "Ennui cornhole fashion axe ethical enamel pin meditation poke, subway tile fingerstache authentic, kombucha humblebrag",
    src: "https://source.unsplash.com/XGAZzyLzn18",
  },
  {
    text:
      "Master cleanse poke pork belly vinyl, single-origin coffee DIY microdosing",
    src: "https://source.unsplash.com/a1Lm99Kkqtg",
  },
  {
    text:
      "Paleo XOXO tofu tousled man bun. Kickstarter jianbing food truck pabst organic poutine pork belly humblebrag cornhole",
    src: "https://source.unsplash.com/_SFJhRPzJHs",
  },
  {
    text:
      "Pug banjo stumptown PBR&B pour-over umami normcore VHS single-origin",
    src: "https://source.unsplash.com/k9e4KXs6AGQ",
  },
];

const Benefits = () => {
  return (
    <section className={styles.section}>
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
