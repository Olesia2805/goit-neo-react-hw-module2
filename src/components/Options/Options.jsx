import optCss from './Options.module.css';

const Option = ({ onFeedback, totalFeedback, resetFeedback }) => {
  return (
    <>
      <button
        onClick={() => {
          onFeedback('good');
        }}
        className={optCss.btn}
      >
        Good
      </button>
      <button
        onClick={() => {
          onFeedback('neutral');
        }}
        className={optCss.btn}
      >
        Neutral
      </button>
      <button
        onClick={() => {
          onFeedback('bad');
        }}
        className={optCss.btn}
      >
        Bad
      </button>
      {totalFeedback > 0 && (
        <button
          onClick={() => {
            resetFeedback();
          }}
          className={optCss.btn}
        >
          Reset
        </button>
      )}
    </>
  );
};

export default Option;
