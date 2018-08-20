import * as React from "react";
import "./../assets/scss/App.scss";
import { ApoptoosiMain } from "./ApoptoosiMain";
import { Registeration } from "../utils/api";

export interface AppProps {}

export default class App extends React.Component<AppProps, undefined> {
  render() {
    return (
      <main>
        <ApoptoosiMain />
      </main>
    );
  }
}
