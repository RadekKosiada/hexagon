import LoginForm from "./components/login";
import Orders from "./components/orders";
import OrderDetails from "./components/orderDetails";
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
            <PrivateRoute path={"/orderDetails/:id" } component={OrderDetails} />
          </Switch>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
