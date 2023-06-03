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
    switch (type) {
      case 'good':
        setGood(good + STEP);
        break;
      case 'neutral':
        setNeutral(neutral + STEP);
        break;
      case 'bad':
        setBad(bad + STEP);
        break;
      default:
        console.error('Type not specified');
    }
  };

  const countTotalFeedback = (...args) => args.reduce((acc, n) => acc + n, 0);

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback(good, neutral, bad);
    const positiveFeedbackPercentage = (good / totalFeedback) * 100;

    return Math.round(positiveFeedbackPercentage);
  };

  return (
    <Section>
      <FeedbackOptions options={options} setFeedback={setFeedback} />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback(good, neutral, bad)}
        positivePercentage={countPositiveFeedbackPercentage()}
      />
    </Section>
  );
};

export default App;
