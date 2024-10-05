import Section from './components/Section/Section';
import Container from './components/Container/Container';
import Description from './components/Description/Description';
import Option from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import { useState } from 'react';
// import appCss from './App.module.css';

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedback = value => {
    setFeedback(value);
  };

  return (
    <Container>
      <Section>
        <Description />
      </Section>
      <Section>
        <Option onFeedback={handleFeedback} />
      </Section>
      <Section>
        <Feedback feedback={feedback} />
      </Section>
    </Container>
  );
};

export default App;
