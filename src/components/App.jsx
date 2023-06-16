import { useState } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import options from './FeedbackOptions/options';

const App = () => {
  const STEP = 1;

  const [opinion, setOpinion] = useState({ good: 0, neutral: 0, bad: 0 });

  const setFeedback = type => {
    setOpinion(o => ({ ...o, [type]: o[type] + STEP }));
  };

  return (
    <Section>
      <FeedbackOptions options={options} setFeedback={setFeedback} />
      <Statistics
        good={opinion.good}
        neutral={opinion.neutral}
        bad={opinion.bad}
      />
    </Section>
  );
};

export default App;
