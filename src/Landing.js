import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

var mB = require('../assets/splash.png');
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default class Landing extends React.Component {
  render(){
    return (
      <View>
        <ImageBackground source ={mB} style = {styles.image}>
          <View style={styles.vS}>
            <Text style={styles.tS}> Welcome to PokeSearch</Text>
            <View style= {styles.bS}>
            <Button
              onPress= {() => this.props.switchScreen("Search")}
              title= "Start searching"
              buttonStyle = {{backgroundColor: '#18618B'}}
            />
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
  },
  image: {
    width: deviceWidth,
    height: deviceHeight
  },
  vS: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',

  },
  tS: {
    position: 'absolute',
    bottom: 55,
    fontSize: 30,
    color: '#8A4E79'
  },
  bS: {
    position: 'absolute',
    bottom: 10,
  },
}
