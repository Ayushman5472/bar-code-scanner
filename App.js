import * as React from 'react'
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import SearchScreen from './Screens/SearchScreen';
import BookTransactionScreen from './Screens/BookTransactionScreen';

export default class App extends React.Component{
  render(){
    return (
 <AppContainer/>
    )}
   }
const TabNavigator = createBottomTabNavigator({
  Transaction:{screen:BookTransactionScreen},
  Search:{screen:SearchScreen}
})
const AppContainer = createAppContainer(TabNavigator)
