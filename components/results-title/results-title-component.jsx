import Button from "../button/button.component";
import styles from "./results-title.module.css";

const ResultsTitle = ({ date }) => {
  const updateDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <section className={styles.title}>
      <h1>Events in {updateDate}</h1>
      <Button link="/events">Show all events</Button>
    </section>
  );
};

export default ResultsTitle;
