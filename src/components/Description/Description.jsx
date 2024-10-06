import descCss from './Description.module.css';

const Description = () => {
  return (
    <>
      <h1 className={descCss.header}>
        <span className={descCss.fastFlicker}>S</span>ip{' '}
        <span className={descCss.flicker}>H</span>
        app<span className={descCss.flicker}>en</span>s{' '}
        <span className={descCss.fastFlicker}>C</span>afé
      </h1>
      <p className={descCss.text}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </>
  );
};

export default Description;
