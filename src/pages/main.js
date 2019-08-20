import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

export default class Main extends Component{
  static navigationOptions = {
    title: 'QuiZ'
  };
  
  state = {
    participant: ''
  }

  handleChangeText = (participant) => {
    this.setState({participant});
  }

  render() {
    
    return(
      <View style={styles.container}>
        <Text style={styles.textStyle}>Olá participante do QuiZ, diga-me!!</Text>

        <TextInput
        onChangeText={(text) => this.handleChangeText(text)} 
        value = {this.state.participant} 
        style={styles.nameInputText} 
        placeholder='qual é o seu nome?'/>
        
        <TouchableOpacity 
        onPress={() => {
          if(this.state.participant && this.state.participant.length > 0 && this.state.participant !== ' ' && this.state.participant[0] !== ' ') {
            this.props.navigation.navigate('Quiz', {
              participant: this.state.participant
            });
          }
        }}
        style={styles.buttonAcessar}>
          <Text style={styles.textAcessar}>Entrar</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f1f2',
  },
  textStyle: {
    marginTop: 50,
    fontSize: 20,
    color: '#333333',
    textAlign: 'center',
  },
  nameInputText: {
    textAlign: 'center',
    marginBottom: 30
  },
  buttonAcessar: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textAcessar: {
    textAlign: 'center',
    color: '#fff',
    borderWidth: 2,
    borderColor: '#DA552F',
    backgroundColor:'#DA552F',
    borderRadius: 5,
    width: 150,
    padding: 10
  }
})