import React from 'react';
import {View , Text, Platform} from 'react-native';
import { Button, Header, Icon, Input, SearchBar} from 'react-native-elements'
import { getStatusBarHeight } from 'react-native-status-bar-height';
import PokeLoader from './PokeLoader';
import SearchBody from './SearchBody';
import axios from 'axios'

export default class Search extends React.Component{
  state = {
    pokeSearch : "",
    onCall : true,
    data : {}
  };
  searchpoke = () => {
    this.setState({onCall : true});
    var self = this;
    axios.get("http://pokeapi.co/api/v2/pokemon/" + this.state.pokeSearch.toLowerCase())
    .then(function(response){
      console.log(response.data);
      self.setState({data: response.data});
      self.setState({onCall: false});
    })
    .catch(function(error){
      console.log(error);
    });

  }
  renderbody = () => {
    if (this.state.onCall) {
      return(
          <PokeLoader/>
      )
    }
    else{
      return(
          <SearchBody data = {this.state.data}/>
      )
    }
  }
  rendersI = () => {
    <Icon
      name='rowing' />
  }
  render(){
    return(
      <View style = {{flex : 1, top : getStatusBarHeight()}}>
      <SearchBar
        searchIcon = {<Icon name='search' onPress = {this.searchpoke} />}
        value={this.state.pokeSearch}
        placeholder="Search Pokemon"
        lightTheme
        round
        onChangeText = {(pokeSearch) => this.setState({pokeSearch})}
      />
      {this.renderbody()}
      </View>
    );
  }
}
