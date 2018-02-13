
import { observable, action, computed , autorun } from 'mobx'
import UserService from '../services/UserService'

class UserStore {

    @observable currUser = null;

    @action
    setUser = (user) => {
        UserService.saveUser(user)
        this.currUser = user
        return Promise.resolve()
    }
    
    addMove = (amount, to) => {
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

    loadUser = autorun (() => {
       var user = UserService.loadUser()
       this.setUser(user)
    })
}


const store = new UserStore
export default store;