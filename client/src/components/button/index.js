import React from "react";
import "./style.css";
import "materialize-css";

import sideNav from "../../components/sidebarnav/index";

function SendButton() {
  return (
    <>
      <div className="buttoncontainer">
        <a href="#" data-target="slide-out" className="sidenav-trigger">
          <i className="material-icons right">send</i>Send Class
        </a>
      </div>
    </>
  );
}

export default SendButton;
