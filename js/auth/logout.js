import currentUser from '../current-user';
import storageService from '../storage-service';
import { navigateToUrl, LOGIN_URL } from '../routing';

export default function logout(event) {
  event.preventDefault();

  currentUser.logout();

  storageService.set('currentUser', JSON.stringify(currentUser.userData));

  navigateToUrl(LOGIN_URL);
}
