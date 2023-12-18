import { ApiProvider } from "@reduxjs/toolkit/query/react";
import "./App.css";
import RoutePage from "./Pages/RoutePage";
import { usersApi } from "./features/apiSlice";
import UserContext from "./Context/UserContext";
import { useState } from "react";
// import store from './store';
function App() {
  const [selectedUser, setSelectedUser] = useState(null);
  const value = { selectedUser, setSelectedUser };
  return (
    <>
      <UserContext.Provider value={value}>
        <ApiProvider api={usersApi}>
          <RoutePage />
        </ApiProvider>
      </UserContext.Provider>
    </>
  );
}

export default App;
