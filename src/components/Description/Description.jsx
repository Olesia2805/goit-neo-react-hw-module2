import descCss from './Description.module.css';

const Description = () => {
  return (
    <>
      <h1 className={descCss.header}>Sip Happens Café</h1>
      <p className={descCss.text}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </>
  );
};

export default Description;
