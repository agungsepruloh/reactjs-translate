import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Button extends React.Component {
  // contextType property is very special property name, you can't change the name of it
  static contextType = LanguageContext;

  render() {
    console.log(this.context);
    return <button className="ui button primary">Submit</button>;
  }
}

export default Button;
