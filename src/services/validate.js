export const validate = (values) => {
  const errors = {};
  if (!values.frequency) {
    errors.frequency = "Це поле обов'язкове!";
  }
  if (values.useFixedDiameter && !values.fixedDiameter) {
    errors.fixedDiameter = "Це поле обов'язкове!";
  }
  if (values.useFastening && !values.fastening) {
    errors.fastening = "Це поле обов'язкове!";
  }

  return errors;
};
