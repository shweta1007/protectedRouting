import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoutes from "./protectedRoutes";
import SignUp from "./pages/signUp";
import Edit from "./pages/edit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route exact path="/" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/product-list" component={ProductList} />
        <Route path="/add-product" component={AddProduct} />
        <Route path="/edit-product/:id" component={EditProduct} /> */}

        <Route path="/login" name="Login" element={<Login />} />
        <Route path="/signUp" name="SignUp" element={<SignUp />} />
        <Route path="/" name="Dashboard" element={<Dashboard />} />
        <Route element={<ProtectedRoutes />}>
        <Route path="/edit" name="Edit" element={<Edit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
