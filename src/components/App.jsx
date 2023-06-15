import { useState } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import options from './FeedbackOptions/options';

const App = () => {
  const STEP = 1;

  const [opinion, setOpinion] = useState({ good: 0, neutral: 0, bad: 0 });

  const setFeedback = type => {
    const feedbackTypes = {
      good: () => setOpinion(o => ({ ...o, good: o.good + STEP })),
      neutral: () => setOpinion(o => ({ ...o, neutral: o.neutral + STEP })),
      bad: () => setOpinion(o => ({ ...o, bad: o.bad + STEP })),
    };

    return feedbackTypes[type] ?? console.error('Type not specified');
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
