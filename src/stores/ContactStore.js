
import { observable, action, computed } from 'mobx'
import ContactService from '../services/ContactService'

class ContactStore {
    @observable _contacts = [];

    @action addContact = (contact) => {
        this._contacts.push(contact)
    }

    @action _setContacts = (contacts) => {
        this._contacts = contacts
    }

    loadContacts = (filterBy) => {
        ContactService.getContacts(filterBy)
            .then(this._setContacts)
    }


    @computed get contacts() {
        return this._contacts
    }
}

const store = new ContactStore
export default store