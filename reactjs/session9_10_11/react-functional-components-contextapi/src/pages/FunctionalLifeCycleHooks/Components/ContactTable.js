import React, {useState, useContext} from "react";
import { ContactContext } from "../Context/ContactContext";

export default function ContactTable() {
    // subscribe to 'contacts' state and access dispatch function
    const [state, dispatch] = useContext(ContactContext);
    const [selectedId, setSelectedId] = useState();

    const rows = state.contacts.map(contact => (
        <tr 
            key = {contact.id}
            onClick = {() => setSelectedId(contact.id)} 
            active = {contact.id === selectedId}
            >
            <td>{contact.id}</td>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
        </tr>
    ));
    
    const delContact = id => {
        dispatch({
            type: "DEL_CONTACT", 
            payload: id
        });
    };

    const onRemoveContact = () => {
        delContact(selectedId);
        selectedId(null);
    }

    return(
        <div className="row">
            <div className="col-12">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={3}>
                                <button type="button" className="btn btn-primary" onClick={onRemoveContact} disabled={!selectedId}> Remove Contact </button>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    )
}