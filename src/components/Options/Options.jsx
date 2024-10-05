import optCss from './Options.module.css';

const Option = ({ onFeedback }) => {
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
      {/* <button className={optCss.btn}>Reset</button> */}
    </>
  );
};

export default Option;
