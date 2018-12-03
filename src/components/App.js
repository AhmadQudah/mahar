import React from "react";
import SweetsList from "./SweetsList";
import SweetsDetail from "./SweetsDetail";

const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SweetsList />
        </div>
        <div className="col eight wide">
          <SweetsDetail />
        </div>
      </div>
    </div>
  );
};

export default App;
