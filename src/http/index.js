import axios from 'axios'

const instance = axios.create({
    baseURL:'',
    timeout:20000
})

instance.interceptors.request.use((config)=>{
    // console.log(config); 
    sessionStorage.getItem('token') ? config.headers.token = sessionStorage.getItem('token') : alert('没有token')
  
     return config
})
instance.interceptors.response.use((response)=>{
   console.log(response);
   return response
})

export {
    instance
}