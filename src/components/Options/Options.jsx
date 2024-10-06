import optCss from './Options.module.css';
import { FaRegLaughBeam } from 'react-icons/fa';
import { FaRegMeh } from 'react-icons/fa';
import { FaRegFrown } from 'react-icons/fa';
import { FaUndoAlt } from 'react-icons/fa';

const Option = ({ onFeedback, totalFeedback, resetFeedback }) => {
  return (
    <>
      <button
        onClick={() => {
          onFeedback('good');
        }}
        className={optCss.btn}
      >
        Good <FaRegLaughBeam color="var(--header-secondary-color)" />
      </button>
      <button
        onClick={() => {
          onFeedback('neutral');
        }}
        className={optCss.btn}
      >
        Neutral <FaRegMeh color="var(--header-tertiary-color)" />
      </button>
      <button
        onClick={() => {
          onFeedback('bad');
        }}
        className={optCss.btn}
      >
        Bad <FaRegFrown color="var(--header-additional-color)" />
      </button>
      {totalFeedback > 0 && (
        <button
          onClick={() => {
            resetFeedback();
          }}
          className={optCss.btn}
        >
          Reset <FaUndoAlt />
        </button>
      )}
    </>
  );
};

export default Option;
