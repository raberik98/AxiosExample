import Axios from 'axios'

Axios.defaults.baseURL='http://localhost/people/public/api';

export default {
    getAllUser(){
        return Axios.get('/users')
            .then(resp => {
                //console.log(resp);
                return resp.data;
            })
            .catch()
    },
    getUserbyId(id){
        return Axios.get(`/users/${id}`)
            .then(resp => {
                return resp.data;
            })
            .catch()
    },
    saveUser(user){
        return Axios.post('/users',user)
            .then(()=>{});
    },
    updateUser(user,id){
        return Axios.put(`/users/${id}`,user)
            .then(()=>{});
    },
    deleteUser(id){
        return Axios.delete(`/users/${id}`);
    }
}