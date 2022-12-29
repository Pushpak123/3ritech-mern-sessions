import React from "react";
import ContactForm from "../Components/ContactForm";
import ContactTable from "../Components/ContactTable";
import { ContactContextProvider } from "../Context/ContactContext";

export default function ContactViews() {
    return(
        <ContactContextProvider>
            <div className="row">
                <div className="col-12">
                    <h4>Contact App</h4>

                    <div className="row">
                        <div className="col-5">
                            <ContactForm />
                        </div>
                        <div className="col-7">
                            <ContactTable />
                        </div>
                    </div>
                </div>
            </div>
        </ContactContextProvider>
    )
}