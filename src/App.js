import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import AddressBookHome from "./components/address-book-home/AddressBookHome";
import Form from "./components/address-book-form/AddressBookForm";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/home">
            <AddressBookHome />
          </Route>
          <Route path="/form">
            <Form />
          </Route>
          <Route exact path="/AddressBookForm/:id">
            <Form />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
