
import {observable, action , computed} from 'mobx'
import UserService from '../services/UserService'

class UserStore {

    @observable currUser = UserService.getUser() || null
    @observable contacs = ['1'];

    @action
     setUser = (user) =>{
        UserService.saveUser(user)
        this.currUser = user
    }
    @action
     addMove = (amount,to) =>{
        var newMove = {
            at: Date.now(),
            amount,
            to
        }
        var user = this.currUser
        user.moves.push(newMove)
        user.coins = user.coins - amount
        this.setUser(user)
    }
    @action addContact = (contact) =>{
            this.contacs.push (contact)
    }

    @computed get contacsCount (){
        return this.contacs.length
    }
}


const store = new UserStore
export default store;