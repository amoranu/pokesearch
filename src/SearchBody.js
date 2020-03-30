import React from 'react'
import {ScrollView, Text,View,ImageBackground, FlatList, Image,Dimensions} from 'react-native'
import {ListItem} from 'react-native-elements'

const width = Dimensions.get('window').width;
var mB = require('../assets/bg.png');
const height = Dimensions.get('window').height;
export default class SearchBody extends React.Component{

  render(){
    var pokemon = this.props.data;

    if (!pokemon){
      return<View/>
    }
    return(
      <ImageBackground
        style = {styles.bI}
        source={mB}
      >
      <ScrollView style = {{flex: 1}}>
      <Text style = {styles.header}>#{pokemon.id} - {pokemon.name.toUpperCase()} </Text>
      <View style={styles.viewStyle}>
        <Image
          source = {{uri: pokemon.sprites.front_default}}
          style = {styles.img}
        />
      </View>
      <View style = {styles.info}>
        <ListItem
          bottomDivider
          topDivider
          title = {<Text style={{fontWeight: 'bold', fontSize: 18}}>Size</Text>}
         />
         <ListItem
           title = {<Text style={{fontSize: 15}}>Weight      -       {pokemon.weight} kg</Text>}
          />
          <ListItem
            title ={<Text style={{fontSize: 15}}>Height      -       {pokemon.height/10} m</Text>}
           />
           <ListItem
            bottomDivider
            topDivider
            title ={<Text style={{fontSize: 18,fontWeight: 'bold'}}>Abilities</Text>}
            />
            <FlatList
                    data={pokemon.abilities}

                    renderItem={({item}) =>
                    <ListItem
                        title = {<Text>{item.ability.name}</Text>}
                    />
                      }
            />
      </View>
      </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = {
  header: {
    fontSize : 30,
    color : 'red',
    textAlign : 'center'
  },
  viewStyle: {
    justifyContent : 'center',
    alignItems: 'center',
    flex: 1
  },
  img : {
    height: 200,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center'
  },
  info : {
    flex: 1,
    backdroundColor: 'white',
    opacity: .8
  },
  bI : {
    flex : 1,
    resizeMode: 'cover',
    height : height,
    width : width
  }
}
