import configureStore from './store/store';
import ReactDOM from 'react-dom';
import React from 'react';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
    let preloadedState = undefined;
    if (window.currentUser) {
        preloadedState = {
            session: {
                currentUser: window.currentUser
            }
        };
    }
    const store = configureStore(preloadedState);
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);
    window.getState = store.getState;
});