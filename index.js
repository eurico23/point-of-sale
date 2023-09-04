/**
 * @format
 */
import 'react-native-get-random-values'; // Import the polyfill
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import 'react-native-get-random-values'; // Import the polyfill
AppRegistry.registerComponent(appName, () => App);
