import React from "react";
import ComponentC from "./components/useContextDemo/ComponentC";

const UserContext = React.createContext()
const ChannelContext = React.createContext()

function App() {
  return (
    <div>
      <UserContext.Provider value={'Satya'}>
        <ChannelContext.Provider value={'Neural-Navigator'}>
        <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export {UserContext, ChannelContext}
export default App;
