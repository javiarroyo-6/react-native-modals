import HomeScreen from './src/Screens/HomeScreen';
import ProfileScreen from './src/Screens/ProfileScreen';
import MenuScreen from './src/Screens/MenuScreen';
import {
  createMaterialBottomTabNavigator,
  createAppContainer
} from 'react-navigation-material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator(
  {
    Home: { screen: HomeScreen },
    Profile: { screen: ProfileScreen },
    Menu: { screen: MenuScreen }
  },
  {
    initialRouteName: 'Menu',
    activeColor: '#f0edf6',
    inactiveColor: '#3e2465',
    barStyle: { backgroundColor: '#694fad' }
  }
);

export default createAppContainer(Tab);
