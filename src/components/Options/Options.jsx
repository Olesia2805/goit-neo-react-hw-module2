import optCss from './Options.module.css';

const Option = ({ handleFeedback }) => {
  return (
    <>
      <button onClick={handleFeedback} className={optCss.btn}>
        Good
      </button>
      <button onClick={handleFeedback} className={optCss.btn}>
        Neutral
      </button>
      <button onClick={handleFeedback} className={optCss.btn}>
        Bad
      </button>
      {/* <button className={optCss.btn}>Reset</button> */}
    </>
  );
};

export default Option;
