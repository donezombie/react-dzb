class AuthServices {
  saveUserLocalStorage(data = {}) {
    localStorage.setItem('user', JSON.stringify(data));
  }

  getUserLocalStorage() {
    const dataUser = localStorage.getItem('user');
    if (!!dataUser) {
      return JSON.parse(dataUser);
    }
    return {};
  }

  clearUserLocalStorage() {
    localStorage.removeItem('user');
  }
}

export default new AuthServices();
