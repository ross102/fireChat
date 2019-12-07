import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import LoginScreen from "./screens/LoginScreen";
 import ChatScreen from "./screens/ChatScreen";

 import { YellowBox } from 'react-native';
import _ from 'lodash';

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};


const AppNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    Chat: ChatScreen
   
  },
  {
    headerMode: "none"
  }
);

export default createAppContainer(AppNavigator);
