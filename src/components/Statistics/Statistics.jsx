import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import Notification from 'components/Notification/Notification';

const Statistics = ({ good, neutral, bad }) => {
  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    const positiveFeedbackPercentage = (good / totalFeedback) * 100;

    return Math.round(positiveFeedbackPercentage);
  };

  return (
    <>
      <h2 className={css.statisticsTitle}>Statistics</h2>
      {countTotalFeedback() > 0 ? (
        <ul className={css.statistics}>
          <li className={css.statisticsItem}>Good: {good}</li>
          <li className={css.statisticsItem}>Neutral: {neutral}</li>
          <li className={css.statisticsItem}>Bad: {bad}</li>
          <li className={css.statisticsItem}>Total: {countTotalFeedback()}</li>
          <li className={css.statisticsItem}>
            Positive feedback: {countPositiveFeedbackPercentage()}%
          </li>
        </ul>
      ) : (
        <Notification message={'There is no feedback'} />
      )}
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};

export default Statistics;
