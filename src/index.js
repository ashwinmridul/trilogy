import { AppRegistry } from "react-native";
import App from "./App";
import "../icons";

AppRegistry.registerComponent("App", () => App);

AppRegistry.runApplication("App", {
  rootTag: document.getElementById("root")
});
