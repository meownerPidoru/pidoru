import axios from 'axios';
import AuthenticationService from '../services/AuthenticationService';
import { LOCAL_API_URL } from '../utils/consts';
export default class Store {
  error = {};
  user = {};
  isAuth = false;
  isLoading = false;

  setError(error) {
    this.error = error;
  }
  setAuth(bool) {
    this.isAuth = bool;
  }
  setIsLoading(bool) {
    this.isLoading = bool;
  }
  setUser(user) {
    this.user = user;
  }
  async login(email, password) {
    try {
      const response = await AuthenticationService.login(email, password);
      console.log(response);
      localStorage.setItem('token', response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user)
    } catch (e) {
      this.setError(e)
    }
  }
  async registration(email, password) {
    try {
      const response = await AuthenticationService.registration(email, password);
      console.log(response);
      localStorage.setItem('token', response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user)
    } catch (e) {
      this.setError(e)
    }
  }
  async logout() {
    try {
      await AuthenticationService.logout();
      localStorage.removeItem('token');
      this.setAuth(false);
      this.setUser({})
    } catch (e) {
      console.log(e)
    }
  }
  async checkAuth() {
    this.setIsLoading(true);
    try {
      const response = await axios.get(`${LOCAL_API_URL}/refresh`, { withCredentials: true });
      localStorage.setItem('token', response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (e) {
      console.log(e)
    } finally {
      this.setIsLoading(false);
    }
  }
}