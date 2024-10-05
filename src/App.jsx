import Section from './components/Section/Section';
import Container from './components/Container/Container';
import Description from './components/Description/Description';
import Option from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';
import { useState } from 'react';
// import appCss from './App.module.css';

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = feedbackType => {
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  return (
    <Container>
      <Section>
        <Description />
      </Section>
      <Section>
        <Option onFeedback={updateFeedback} />
      </Section>
      <Section>
        {totalFeedback > 0 ? (
          <Feedback feedback={feedback} totalFeedback={totalFeedback} />
        ) : (
          <Notification />
        )}
      </Section>
    </Container>
  );
};

export default App;
