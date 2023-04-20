import { MASTER_KEY } from '../constants/app.const';
class AuthService {

    user

    getUser() {
        const user = localStorage.getItem(MASTER_KEY.USER);
        return JSON.parse(user);
    }

    setUser(user) {
        const userData = JSON.stringify(user);
        localStorage.setItem(MASTER_KEY.USER, userData);
    }

    unsetUser() {
        localStorage.removeItem(MASTER_KEY.USER);
    }

    getToken() {
        return localStorage.getItem(MASTER_KEY.TOKEN);
    }

    setToken(token) {
        localStorage.setItem(MASTER_KEY.TOKEN, token);
    }

    unsetToken() {
        return localStorage.removeItem(MASTER_KEY.TOKEN);
    }
}
export default new AuthService();