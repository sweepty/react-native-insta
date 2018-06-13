import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import HomeScreen from './home_tab/home';
import SearchScreen from './search_tab/search';
import UploadScreen from './upload/upload';
import HeartScreen from './heart';
import ProfileScreen from './profile_tab/profile';
import SignInScreen from './signin';
import AuthLoadingScreen from './auth_loading';
import OtherScreen from './other';
import EditProfile from './profile_tab/edit';

const HomeStack = createStackNavigator({Home: {screen: HomeScreen}});
const editProfileStack = createStackNavigator({Edit: {screen: EditProfile}});
const UploadStack = createStackNavigator({Upload: {screen: UploadScreen}});
const ProfileStack = createStackNavigator({Profile: {screen: ProfileScreen}});
const RootStack = createBottomTabNavigator(
  {
  Home: HomeStack,
  Search: SearchScreen,
  upload: UploadStack,
  heart: HeartScreen,
  profile: ProfileStack,
  other: OtherScreen
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home`;
        } else if (routeName === 'Search') {
          iconName = `ios-search`;
        } else if (routeName === 'upload') {
          iconName = `ios-add-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'heart') {
          iconName = `ios-heart${focused ? '': '-outline'}`;
        } else {
          iconName = `ios-contact`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'steelblue',
      inactiveTintColor: 'gray',
    },
  }
);
const AppNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: RootStack,
    Auth: SignInScreen,
    EditProfile: editProfileStack
    // Other: OtherStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);

export default AppNavigator



