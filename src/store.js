import { createStore } from 'redux';

const defaultStore = {

    delivery: {
        type: "pickUp",
        displayName: "Pick up",
        price: 0,
    },

    pizzaSize: {
        type: "small",
        displayName: "Small: 16\" Pizza $18",
        price: 18
    },

    toppings: [],

    contactInfo: {
        firstName: "",
        lastName: "",
        phoneNumber: null,
        email: "",
        streetAddress: "",
        state: "",
        zipCode: "",
        deliveryInstructions: "",
    },
}


// actions have type and maybe payload
// does not need to be named type or payload
function reducer(store, action) {
    switch(action.type) {
        case "ADD_ITEM":
            return {...store, toppings: [...store.toppings, action.payload ]}
        case "REMOVE_ITEM":
            const filteredToppings = store.toppings.filter(item => item !== action.payload)
            return {...store, 
                toppings: filteredToppings
            }
        case "CHANGE_DELIVERY":
            return {...store,
                delivery: action.payload
            }
        case "CHANGE_PIZZA_SIZE":
            return {...store,
                pizzaSize: action.payload
            }
        case "ADD_CONTACT_INFO":
            const info = action.payload
            return {...store,
                contactInfo: {...store.contactInfo, info}
            }
        default: 
            return store;
    }
}

export const store = createStore(reducer, defaultStore);

