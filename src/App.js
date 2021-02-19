import Header from "./components/header";
import NotFoundPage from "./components/notFoundPage";
import HelpPage from "./components/helpPage";
import ExpenseDashboardPage from "./components/ExpenseDashboardPage";
import AddExpensePage from "./components/AddExpensePage";
import EditExpensePage from "./components/EditExpensePage";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import "./firebase/firebase";
import LoginPage from "./components/LoginPage";
import firebase from "firebase/app";

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    console.log("logged in");

    // ...
  } else {
    // User is signed out
    // ...
    console.log("logged out");
  }
});

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" component={LoginPage} exact={true} />
        <Route path="/dashboard" component={ExpenseDashboardPage} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route path="/not-found" component={NotFoundPage} />
        <Redirect to="/not-found" />
      </Switch>
    </div>
  );
}

export default App;
