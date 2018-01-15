import StorageService from './StorageService'
import uniqid from 'uniqid'
const STORAGE_KEY = 'user';

function getUser (){
    var user = StorageService.load(STORAGE_KEY)
    return user
}

function saveUser(user) {
    StorageService.save(STORAGE_KEY,user)
}

function getEmptyUser() {
    return {
        name:'',
        coins:100,
        moves:[],
        _id:uniqid() 
    }
}

export default {
    getUser,
    saveUser,
    getEmptyUser,
}