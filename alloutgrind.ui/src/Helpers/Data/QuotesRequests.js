import axios from 'axios';

const baseUrl = 'https://localhost:44361/api/quotes'

const getAllQuotes = () => new Promise ((resovle, reject) => {
    axios.get(`${baseUrl}`)
    .then(res => resovle(res.data))
    .catch(err => reject(err));
})

export default { getAllQuotes };