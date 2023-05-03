import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params: {
        key: '45b703fdfb444d70b7d4bc6e4314eb5b'
    }
});

