import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Button extends React.Component {
  // contextType property is very special property name, you can't change the name of it
  static contextType = LanguageContext;

  render() {
    // console.log(this.context);
    // const text = this.context === "english" ? "Submit" : "Voorleggen";

    // return <button className="ui button primary">{text}</button>;
    return (
      <button className="ui button primary">
        <LanguageContext.Consumer>
          {value => (value === "english" ? "Submit" : "Voorleggen")}
        </LanguageContext.Consumer>
      </button>
    );
  }
}

export default Button;
