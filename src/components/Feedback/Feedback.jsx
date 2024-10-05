import feedCss from './Feedback.module.css';

const Feedback = ({ feedback }) => {
  return (
    <>
      <p className={feedCss.text}>Good: {feedback.good}</p>
      <p className={feedCss.text}>Neutral: {feedback.neutral}</p>
      <p className={feedCss.text}>Bad: {feedback.bad}</p>
    </>
  );
};

export default Feedback;
