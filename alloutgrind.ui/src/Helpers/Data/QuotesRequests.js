import axios from 'axios';

const baseUrl = 'https://localhost:44361/api/quotes'

const getAllQuotes = () => new Promise ((resolve, reject) => {
    axios.get(`${baseUrl}`)
    .then(res => resolve(res.data))
    .catch(err => reject(err));
})

const getUsersQuotes = () => new Promise ((resolev, reject) => {
    axios.get(`${baseUrl}`)
    .then(res => resovle(res.data))
    .catch(err => reject(err));
})


export default { getAllQuotes,
                getUsersQuotes };