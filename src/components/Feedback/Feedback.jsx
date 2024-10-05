import feedCss from './Feedback.module.css';

const Feedback = ({ feedback, totalFeedback }) => {
  return (
    <>
      <p className={feedCss.text}>Good: {feedback.good}</p>
      <p className={feedCss.text}>Neutral: {feedback.neutral}</p>
      <p className={feedCss.text}>Bad: {feedback.bad}</p>
      <p className={feedCss.text}>Total: {totalFeedback}</p>
    </>
  );
};

export default Feedback;
