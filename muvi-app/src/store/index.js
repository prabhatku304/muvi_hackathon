import {compose,applyMiddleware,createStore} from 'redux'
import thunk from 'redux-thunk';
import rootConfigure from './root';

export function storeRoot(){
        const store = createStore(rootConfigure,
            compose(applyMiddleware(thunk),
            window.devToolsExtension ? window.devToolsExtension() : f => f
            ))

            return store;

}