import Data from "./components/getData";
import LoginForm from "./components/login";
import Orders from "./components/orders";
import PrivateRoute from "./components/privateRoute";
import { AuthProvider } from "./contexts/authContext";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <LoginForm /> */}
      <BrowserRouter>
        <AuthProvider>
          <Switch>
            <Route exact path="/" component={LoginForm} />
            <PrivateRoute path="/orders" component={Orders} />
          </Switch>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
