import axios from "axios";

class AddressBookService {
  baseUrl = "http://localhost:8080/addressbookservice";

  addPerson(data) {
    console.log("stsr");
    return axios.post(`${this.baseUrl}/createAddressBook`, data);
  }

  getAllContacts() {
    return axios.get(`${this.baseUrl}/getAllAddressBook`);
  }

  getPersonById(personId) {
    return axios.get(`${this.baseUrl}/findAddressBook/${personId}`);
  }

  updatePerson(personId, data) {
    return axios.put(`${this.baseUrl}/updateAddressBook/${personId}`, data);
  }

  deletePerson(personId) {
    return axios.delete(`${this.baseUrl}/deleteAddressBook/${personId}`);
  }
}

export default new AddressBookService();