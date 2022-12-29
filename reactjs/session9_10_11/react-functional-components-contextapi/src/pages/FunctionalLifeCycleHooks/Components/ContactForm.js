import React, {useState, useContext} from "react";
import { ContactContext } from "../Context/ContactContext";
import _ from "lodash";

export default function ContactForm() {
    const name = useFormInput("");
    const email = useFormInput("");

    // setting the data from ContactContext
    const [state, dispatch] = useContext(ContactContext);

    const handleSubmit = () => {
        dispatch({
            type: "ADD_CONTACT", 
            payload: {
                id: _.uniqueId(10), 
                name: name.value, 
                email: email.value
            }
        });

        name.onReset();
        email.onReset();
    };

    return(
        <div className="row">
            <div className="col-12">
                <form className="form-group" onSubmit={handleSubmit}>
                    <div className="row">
                        <label className="form-label col-form-label text-end col-4">Name</label>
                        <div className="col-6">
                            <input type="text" className="form-control" {...name} required />
                        </div>
                    </div>

                    <div className="row">
                        <label className="form-label col-form-label text-end col-4">Email</label>
                        <div className="col-6">
                            <input type="text" className="form-control" {...email} required />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-6 offset-4">
                            <button type="submit" className="btn btn-primary"> Add New Contact </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
};

function useFormInput(initialValue) {
    const [value, setValue] = useState(initialValue);

    const handleChange = e => {
        setValue(e.target.value);
    };

    const handleReset = () => {
        setValue("");
    };

    return {
        value, 
        onChange: handleChange, 
        onReset: handleReset
    };
};