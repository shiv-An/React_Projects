import axios from 'axios';

export default axios.create({
    baseURL : 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID o8fbf13Lw8zQa-wEjt2DQlmTc_ZurSI4K1Ft1FB0D18'  
    }

})