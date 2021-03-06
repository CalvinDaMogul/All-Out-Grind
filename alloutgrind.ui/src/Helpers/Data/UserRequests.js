import axios from 'axios';

const baseUrl = 'https://localhost:44361/api/user';

const addUser = user => axios.post(`${baseUrl}`, user);
const loginUser = email => axios.get(`${baseUrl}/email/${email}`);

const getSessionUser = () => {
    const userInfo = sessionStorage.getItem('userInfo');
    return JSON.parse(userInfo);
  };

  export default {
      addUser,
      loginUser,
      getSessionUser
  };