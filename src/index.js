import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { log } from 'util';
import { Provider } from 'mobx-react';
import UserStore from './stores/UserStore'
import ContactStore from './stores/ContactStore';

// SETTING UP THE STORE
const store = { UserStore, ContactStore }
const Root = (
    <Provider {...store}>
        <App />
    </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));
registerServiceWorker();


