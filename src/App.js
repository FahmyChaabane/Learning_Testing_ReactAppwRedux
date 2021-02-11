import Header from "./components/header";
import NotFoundPage from "./components/notFoundPage";
import HelpPage from "./components/helpPage";
import ExpenseDashboardPage from "./components/ExpenseDashboardPage";
import AddExpensePage from "./components/AddExpensePage";
import EditExpensePage from "./components/EditExpensePage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={ExpenseDashboardPage} exact={true} />
          <Route path="/create" component={AddExpensePage} />
          <Route path="/edit/:id" component={EditExpensePage} />
          <Route path="/help" component={HelpPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
