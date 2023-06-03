import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, setFeedback }) => (
  <div className={css.feedbackBtns}>
    {options.map(({ type, id }) => (
      <button
        className={css.feedbackBtn}
        key={id}
        type="button"
        onClick={() => setFeedback(type)}
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
  setFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
