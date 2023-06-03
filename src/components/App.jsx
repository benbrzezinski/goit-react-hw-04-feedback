import { Component } from 'react';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import options from './FeedbackOptions/options';

class App extends Component {
  static defaultProps = {
    step: 1,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  setFeedback = type => {
    this.setState((state, props) => ({
      [type]: state[type] + props.step,
    }));
  };

  countTotalFeedback = (...args) => args.reduce((acc, n) => acc + n, 0);

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback(good, neutral, bad);
    const positiveFeedbackPercentage = (good / totalFeedback) * 100;

    return Math.round(positiveFeedbackPercentage);
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <Section>
        <FeedbackOptions options={options} onLeaveFeedback={this.setFeedback} />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback(good, neutral, bad)}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </Section>
    );
  }
}

export default App;
