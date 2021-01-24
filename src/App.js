import React, { Fragment, useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import SearchBar from "./component/layout/SearchBar";
import Logs from "./component/logs/Logs";
import Addbtn from "./component/layout/Addbtn";
import EditLogModal from "./component/logs/EditLogModel";
import AddTechModal from "./component/techs/AddTechModal";
import TechListModal from "./component/techs/TechListModel";
import { Provider } from "react-redux";
import store from "./store";

import "./App.css";
import AddLogModal from "./component/logs/AddLogModel";

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });

  return (
    <Provider store={store}>
      <Fragment>
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
    </Provider>
  );
};

export default App;
