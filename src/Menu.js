import React from "react";
import Search from "./Search";
import PanelAdd from "./PanelAdd";
import "./Menu.css";

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {nemItemPanel: false};

    //this.add = this.add.bind(this);
  }
  add = () => {
     this.state({newItemPanel: true});
     console.log('mensaje');
  }
  render() {
    return (
      <div className="container">
        <div className="subcontainer">
          <div className="Logo">
            {this.props.title}</div>
          <div className="search">
            <search />
          </div>

          <div className="actions">
            <button onClick={this.add} className="button btn-blue">
              + añadir nuevo propietario
            </button>
          </div>
          <PanelAdd />
        </div>
      </div>
    );
  }
}
