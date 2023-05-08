import React from "react";

// Funtional Component, Arrow Function, Default Parameter 'props'
// Contacts and addedString's Property value got passed in

//// Traditional way to destruct the props
// const ContactList = (props) => {
//     console.log(`props: ${JSON.stringify(props)}`);
//     const {contacts, addedString} = props;

const ContactList = ({ contacts, addedString }) => {
    // const { contacts, addedString } = props;
    // console.log(`${JSON.stringify(contacts)}, ${addedString}`);

    return (
        <React.Fragment>
            <table className="info">
                <thead>
                    <tr>
                        <th>Name</th>

                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact, index) => {
                        return (
                            <tr key={index}>
                                <td>{contact.name}</td>
                                <td>{contact.phone}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </React.Fragment>
    );

    // return (
    //     <div>
    //         <h1>Functional Component:</h1>
    //         <h2>Contact List</h2>
    //         <p>Hi ZhiYuan Luo!</p>
    //         <br></br>
    //     </div>
    // );
};

export default ContactList;
