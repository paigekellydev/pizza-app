import { createStore } from 'redux';

const defaultStore = {
    selections: [
        {
            "type": "pickUp",
            "displayName": "Pick up",
            "price": 0
        },
        {
            "type": "small",
            "displayName": "Small: 16\" Pizza $18",
            "price": 18
        }
    ]
}

// actions have type and maybe payload
// does not need to be named type or payload
function reducer(store, action) {
    switch(action.type) {
        case "ADD_ITEM":
            return {...store, selections: [...store.selections, item]}

        case "REMOVE_ITEM":
            const filteredSelections = store.selections.filter(item => item !== action.item)
            return {...store, 
                selections: filteredSelections
            }  
        default: 
            return store;
    }
}

