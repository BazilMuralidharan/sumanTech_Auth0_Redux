import logo from "./logo.svg";
import "./App.css";

import { Backdrop, CircularProgress } from "@mui/material";
import Login from "./component/Login";
import Logout from "./component/Logout";
import Profile from "./component/Profile";

import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return (
      <Backdrop
        sx={{ color: "#fff", backgroundColor:"white" }}
        open={isLoading}
      >
        <CircularProgress size={100} />
      </Backdrop>
    );
  }
  return (
    <div>
      <Login />
      <Profile />
    </div>
  );
}

export default App;
