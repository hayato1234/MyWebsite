export const validateContactForm = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Required";
  }

  const emailReg = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!values.email) {
    errors.email = "Required";
  } else if (!emailReg.test(values.email)) {
    errors.email = "Please input a valid email address";
  }
  if (!values.message) {
    errors.message = "Required";
  }

  return errors;
};
