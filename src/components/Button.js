import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {
  // contextType property is very special property name, you can't change the name of it
  static contextType = LanguageContext;

  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {value => (value === "english" ? "Submit" : "Voorleggen")}
        </LanguageContext.Consumer>
      </button>
    );
  }

  render() {
    // console.log(this.context);
    // const text = this.context === "english" ? "Submit" : "Voorleggen";

    // return <button className="ui button primary">{text}</button>;
    return (
      <ColorContext.Consumer>
        {color => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
