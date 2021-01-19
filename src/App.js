import React, { Fragment, useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import SearchBar from "./component/layout/SearchBar";
import Logs from "./component/logs/Logs";
import Addbtn from "./component/layout/Addbtn";
import AddLogsModel from "./component/logs/AddLogModel";
import EditLogModal from "./component/logs/EditLogModel";
import AddTechModal from "./component/techs/AddTechModal";
import TechListModal from "./component/techs/AddTechModal";

import "./App.css";
import AddLogModal from "./component/logs/AddLogModel";

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });

  return (
    <Fragment className="App">
      {" "}
      <SearchBar />
      <div className="container">
        <Addbtn />
        <EditLogModal />
        <AddTechModal />
        <AddLogModal />
        <TechListModal />
        <Logs />
      </div>
    </Fragment>
  );
};

export default App;
