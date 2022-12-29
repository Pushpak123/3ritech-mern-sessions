import React, {useReducer, createContext} from "react";

export const ContactContext = createContext();

const initialState = {
    contacts: [
        {
            id: 1, 
            name: "diana", 
            email: "diana@gmail.com"
        }, 
        {
            id: 2, 
            name: "bruce", 
            email: "bruce@gmail.com"
        }, 
        {
            id: 3, 
            name: "clark", 
            email: "clark@gmail.com"
        }
    ], 
    loading: false, 
    error: null
};

const reducer = (state, action) => {
    switch(action.type) {
        case "ADD_CONTACT": 
            return {
                contacts: [
                    ...state.contacts, 
                    action.payload
                ]
            };

        case "DEL_CONTACT":
            return {
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            };

        case "START": 
            return {
                loading: true
            };

        case "COMPLETE": 
            return {
                loading: false
            };

        default: 
            throw new Error();
    }
};

export const ContactContextProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return(
        <ContactContext.Provider value={[state, dispatch]}>
            {props.children}
        </ContactContext.Provider>
    )
}