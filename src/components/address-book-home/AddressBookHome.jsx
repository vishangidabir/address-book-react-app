import React, { Component } from "react";
import "./AddressBookHome.css";
import edit from "../../assets/icons/create-black-18dp.svg";
import deleteicon from "../../assets/icons/delete-black-18dp.svg";
import { withRouter, Link } from "react-router-dom";
import AddressBookService from "../../service/AddressBookService";

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            addressBook: [],
        };

    }

    fetchData() {
        AddressBookService.getAllContacts().then((response) => {
            console.log(response.data);
            this.setState({ addressBook: response.data.data });
        });
    }
    deleteEmployee(bookId) {
        console.log("employee id" + bookId);
        AddressBookService.deletePerson(bookId);
        window.location.reload();
    }

    componentDidMount() {
        this.fetchData();
    }
    
    updateEmployee = (bookId) => {
        console.log(bookId)
        this.props.history.push(`AddressBookForm/${bookId}`);
    };


    render() {
        return (
            <div>
                <div>
                    <div className="main-content">
                        <div className="header-content employee-header">
                            <div className="emp-detail-text">
                                Personal Details
                                <div className="emp-count">{this.state.addressBook.length}</div>
                            </div>
                            <Link to="/form" className="add-button">
                                <img src="" alt="" />+ Add User</Link>
                        </div>
                    </div>
                    <div className="table-main">
                        <table id="table-display" className="table">
                            <thead>
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Address</th>
                                    <th>City</th>
                                    <th>State</th>
                                    <th>Zip Code</th>
                                    <th>Phone Number</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                {this.state.addressBook.map((addressBook, index) => (
                                    <tr key={`${index}`}>
                                        <td>{addressBook.firstName}</td>
                                        <td>{addressBook.lastName}</td>           
                                        <td>{addressBook.address}</td>
                                        <td>{addressBook.city}</td>
                                        <td>{addressBook.state}</td>
                                        <td>{addressBook.zip}</td>
                                        <td>{addressBook.phoneNumber}</td>
                                        <td>
                                            <img onClick={() => {this.deleteEmployee(addressBook.id) && this.fetchData() }} src={deleteicon}alt="delete"
                                                name={addressBook.id}/>
                                            <img onClick={() => {this.updateEmployee(addressBook.id)}} src={edit} name={addressBook.id} alt="edit" />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div >
        );
    }
}
export default withRouter(Home);