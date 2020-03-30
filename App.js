import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Dimensions } from 'react-native';
import Landing from './src/Landing';
import Search from './src/Search';

export default class App extends React.Component {
  state= {
    cS: "Search"
  }
  switchScreen = (cS) =>{
    this.setState({cS});
  }
  renderScreen = () =>{
    if (this.state.cS === "Landing"){
      return(
        <Landing switchScreen = {this.switchScreen} />
      )
    }
    else if (this.state.cS === "Search"){
      return(
        <Search/>
      )
    }
  }
  render(){
    return (
      <View style={styles.container}>
        {this.renderScreen()}
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
  },
}
