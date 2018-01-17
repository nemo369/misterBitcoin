import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { log } from 'util';
import {Provider} from 'mobx-react';
import {UserStore} from './stores/UserStore'

// SETTING UP THE STORE
const Root = (
    <Provider UserStore={UserStore}>
        <App />>
    </Provider>
);

ReactDOM.render(Root , document.getElementById('root'));
registerServiceWorker();


