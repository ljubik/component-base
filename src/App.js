import React from "react";
import { Button } from "./components/button/Button";
import { Checkbox } from "./components/checkbox/Checkbox";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      label: "",
    };
    this.onChangeFunc = this.onChangeFunc.bind(this);
    console.log("start", this.state);
  }

  onChangeFunc = (event) => {
    // const task = this.state.checkbox[id];
    let label = "";
    let msg = "";

    const { id, checked } = event.target;
    this.setState({ [id]: checked });

    if (this.state.checked) {
      // label = "checked";
      this.setState({ msg: "ВИКЛЮЧЕНО", checked: false, label: "checked" });
    } else {
      // label = "unchecked";
      this.setState({ msg: "ВКЛЮЧЕНО", checked: true, label: "unchecked" });
    }
    this.setState({ checked: !this.state.checked });
    console.log("func app", this.state);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Button className="btn-base" size="btn-main" disabled={false} />
          <br></br>
          <Button className="btn-base" size="btn-main" disabled={true} color="">
            DAISABLE
          </Button>
          <br></br>
          <Button className="btn-base" size="btn-secondary" disabled={false}>
            SECOND
          </Button>
          <br></br>
          <Button className="btn-base" size="btn-secondary" disabled={true}>
            btn-secondary
          </Button>
          <br></br>
          <Button
            className="btn-base"
            size="btn-tertiary"
            disabled={false}
            color=""
          >
            Start new project
          </Button>
          <br></br>
          <Button className="btn-base" size="btn-tertiary" disabled={true}>
            btn-tertiary
          </Button>
          <br></br>
          <Checkbox
            className="chek-base"
            disabled={false}
            color="chek-main"
            label="test label"
            onChange={() => this.onChangeFunc()}
            checked={this.state.checked}
            id="cb1"
          />
          <Checkbox className="chek-base" disabled={true} color="" id="cb2" />
          <Checkbox
            className="chek-base"
            disabled={false}
            color="chek-success"
            checked={true}
            onChange={this.onChangeFunc}
            id="cb3"
          />
        </header>
      </div>
    );
  }
}
export default App;
