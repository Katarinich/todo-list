import userList from '../users.js';

import { navigateToUrl } from '../routing.js';
import currentUser from '../current-user.js';
import storageService from '../storage-service.js';
import { checkIfHasErrors, showErrors } from '../utils.js';

function validateLogin({ email, password }) {
  let errors = {
    email: [],
    password: [],
  };

  const user = userList.getUserByEmail(email);

  if (!user) {
    errors = { ...errors, email: [...errors.email, 'User dows not exits'] };
  }

  const hashedPassword = CryptoJS.SHA3(password).toString();

  if (user && user.password !== hashedPassword) {
    errors = {
      ...errors,
      password: [...errors.password, 'Password does not match'],
    };
  }

  return errors;
}

export default function loginUser(event) {
  event.preventDefault();

  const formData = new FormData(event.target);

  const email = formData.get('email');
  const password = formData.get('password');

  const errors = validateLogin({ email, password });

  showErrors(errors);

  const hasErrors = checkIfHasErrors(errors);

  if (hasErrors) {
    return;
  }

  currentUser.login(user);
  storageService.set('currentUser', JSON.stringify(user));

  navigateToUrl('/');
}
