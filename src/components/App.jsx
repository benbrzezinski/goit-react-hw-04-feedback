import { useState } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import options from './FeedbackOptions/options';

const App = () => {
  const STEP = 1;

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const setFeedback = type => {
    const feedbackTypes = {
      good: () => setGood(good + STEP),
      neutral: () => setNeutral(neutral + STEP),
      bad: () => setBad(bad + STEP),
    };

    return feedbackTypes[type] ?? console.error('Type not specified');
  };

  return (
    <Section>
      <FeedbackOptions options={options} setFeedback={setFeedback} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </Section>
  );
};

export default App;
