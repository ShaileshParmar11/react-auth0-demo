import "./App.css";
import LoginButton from "./Component/LoginButton";
import LogoutButton from "./Component/LogoutButton";
import Profile from "./Component/Profile";
import { useAuth0 } from "@auth0/auth0-react";
import { Fragment } from "react";

function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {!isAuthenticated ? (
        <LoginButton />
      ) : (
        <Fragment>
          <Profile />
          <LogoutButton />
        </Fragment>
      )}
    </div>
  );
}

export default App;
