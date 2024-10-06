import Section from './components/Section/Section';
import Container from './components/Container/Container';
import Description from './components/Description/Description';
import Option from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';
import { useState, useEffect } from 'react';
// import appCss from './App.module.css';

const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = window.localStorage.getItem('saved-feedback');
    if (savedFeedback !== null) {
      return JSON.parse(savedFeedback);
    }

    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    window.localStorage.setItem('saved-feedback', JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = feedbackType => {
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const positiveFeedbacks = Math.round(
    ((feedback.good + feedback.neutral) / totalFeedback) * 100
  );

  return (
    <Container>
      <Section>
        <Description />
      </Section>
      <Section className="buttons">
        <Option
          onFeedback={updateFeedback}
          totalFeedback={totalFeedback}
          resetFeedback={resetFeedback}
        />
      </Section>
      <Section>
        {totalFeedback > 0 ? (
          <Feedback
            feedback={feedback}
            totalFeedback={totalFeedback}
            positiveFeedbacks={positiveFeedbacks}
          />
        ) : (
          <Notification />
        )}
      </Section>
    </Container>
  );
};

export default App;
