export const REGISTER_USER = "REGISTER_USER";

export const registerUser = (firstName, lastName, email, password) => ({
  type: REGISTER_USER,
  firstName,
  lastName,
  email,
  password
});
