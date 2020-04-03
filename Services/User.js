import DataService from "./DataService";

class User {
    async fetchUsers(axios, url =''){
        url =url ? url : '/users';
        let baseUrl = axios.baseURL;
        url.replace(baseUrl, '');
        return await axios.get(url, DataService.authHeader())
            .then((response) => {
                return response.data;
            })
            .catch(err => console.log(err))
    }

    async fetchUser(axios, id){
        return await axios.get('/user/'+id, DataService.authHeader())
            .then((response) => {
                return response.data.data;
            })
            .catch(err => console.log(err))
    }

    async updateUser(axios, formData){
        return await axios.patch('/user/'+ formData.id, formData, DataService.authHeader())
            .then((response) => {
                return response.data.data;
            })
            .catch(err => Promise.reject(err))
    }

    async createUser(axios, formData){
        return await axios.post('/user', formData, DataService.authHeader())
            .then((response) => {
                return response.data.data;
            })
            .catch(err => Promise.reject(err))
    }
}

export default new User();