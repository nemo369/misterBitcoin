import StorageService from './StorageService'
import uniqid from 'uniqid'
const STORAGE_KEY = 'user';

function loadUser (){
    var user = StorageService.load(STORAGE_KEY)
    if (user === null) user = getEmptyUser()
    return user
}

function saveUser(user) {
    StorageService.save(STORAGE_KEY,user)
}

function getEmptyUser() {
    return {
        name:'User',
        coins:100,
        moves:[],
        _id:uniqid() 
    }
}

export default {
    loadUser,
    saveUser,
    getEmptyUser,
}