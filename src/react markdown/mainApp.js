import React from "react";
import Editor from "./editor";
import Previewer from "./previewer";
import styles from "./MainApp.module.css";
import "./GlobalStyles.css";
import { marked } from "marked";
class MainApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorInput:
        "# Welcome to my React Markdown Previewer!\n## This is a sub-heading...\n### And here's some other cool stuff:\nHeres some code, `<div></div>`, between 2 backticks.\n```\n// this is multi-line code:\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n            return multiLineCode;\n  }\n}\n```\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\nThere's also [links](https://www.freecodecamp.org), and\n> Block Quotes!\nAnd if you want to get really crazy, even tables:\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)",
      editorButtonMax: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleButtonMinMaxEditor = this.handleButtonMinMaxEditor.bind(this);
  }
  handleButtonMinMaxEditor() {
    this.setState((state) => ({
      editorButtonMax: !state.editorButtonMax,
    }));
    //console.log(`the max button is: ${this.state.editorButtonMax}`);
  }
  handleChange(e) {
    this.setState({ editorInput: e.target.value });
  }

  render() {
    // console.log(marked(this.state.editorInput));
    return (
      <div className={styles.MainAppContainer}>
        {" "}
        <Editor
          input={this.state.editorInput}
          handleChange={this.handleChange}
          maximize={this.handleButtonMinMaxEditor}
          maximizeState={this.state.editorButtonMax}
        />
        <h1>
          <Previewer
            input={this.state.editorInput}
            editorMaximizeState={this.state.editorButtonMax}
          />
        </h1>
      </div>
    );
  }
}

export default MainApp;
