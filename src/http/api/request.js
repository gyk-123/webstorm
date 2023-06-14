import {instance} from './../index'

function home (){
    return instance.get('/api/home')
}

function login (){
    return instance.post('/api/login',{
        username:'root',
        password:'root'
    })
}

export {home,login}