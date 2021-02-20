import NotFoundPage from "./components/notFoundPage";
import HelpPage from "./components/helpPage";
import ExpenseDashboardPage from "./components/ExpenseDashboardPage";
import AddExpensePage from "./components/AddExpensePage";
import EditExpensePage from "./components/EditExpensePage";
import LoginPage from "./components/LoginPage";
import PrivateRoute from "./routers/PrivateRoute";
import PublicRoute from "./routers/PublicRoute";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import "./firebase/firebase";

function App() {
  return (
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
        <PrivateRoute path="/create" component={AddExpensePage} />
        <PrivateRoute path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route path="/not-found" component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
