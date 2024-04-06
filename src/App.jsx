import React, { createContext, useReducer } from "react";
import SingUp from "./components/SingUp/SingUp";
import Buttons from "./components/Buttons/Buttons";

const userContex = createContext();
function App() {
  const [user, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "login":
        return  { ...state, form: "login"};

        case "register":
          return {...state, form: "register"}
    }
  }, {
    form: "register"
  });
  return (
    <userContex.Provider value={{ user, dispatch }}>
      <div className="container ">
        <h1 className="text-center text-white my-7">To Do APP</h1>
        <SingUp />
        <div className="flex justify-center p-4">
          <Buttons text={"default"} />
        </div>
      </div>
    </userContex.Provider>
  );
}

export default App;
// export { userContex };
