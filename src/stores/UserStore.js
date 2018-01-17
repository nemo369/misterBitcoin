import {observable, action , computed} from 'mobx'

class UserStore {

    @observable currUser = [];
    @observable contacs = [];

    @action setUser = (user) =>{
            this.currUser = user
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