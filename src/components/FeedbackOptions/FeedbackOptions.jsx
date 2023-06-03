import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={css.feedbackBtns}>
    {options.map(({ type, id }) => (
      <button
        className={css.feedbackBtn}
        key={id}
        type="button"
        onClick={() => onLeaveFeedback(type)}
      >
        {type}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string.isRequired).isRequired
  ).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
