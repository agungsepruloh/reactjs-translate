import React from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class App extends React.Component {
  state = { language: "english", color: "primary" };

  onLanguageChange = language => {
    this.setState({
      language: language,
      color: language === "english" ? "red" : "primary"
    });
  };

  render() {
    return (
      <div className="ui container">
        <div>
          Select a Language:
          <i
            className="flag us"
            onClick={() => this.onLanguageChange("english")}
          />
          <i
            className="flag nl"
            onClick={() => this.onLanguageChange("dutch")}
          />
          {/* value property for provider is a special property, you can't change the name of it */}
          <ColorContext.Provider value={this.state.color}>
            <LanguageContext.Provider value={this.state.language}>
              <UserCreate />
            </LanguageContext.Provider>
          </ColorContext.Provider>
        </div>
      </div>
    );
  }
}

export default App;
