import React, {Component} from 'react';
import {StyleSheet, Text, WebView, View, FlatList, SafeAreaView, TouchableOpacity} from 'react-native';

import questions from '../service/api';

import RadioButton from '../components/radioButtons';

export default class Quiz extends Component {
  state = {
    participant: '',
    questions: [],
    answers: []
  }
  

  componentWillMount() {
    const {navigation} = this.props;
    const participant = navigation.getParam('participant');
    this.setState({participant, questions});
  }

  clickOptionsQuestion = (optionQuestion, numberQuestion) => {
    const answers = [...this.state.answers];
    answers[numberQuestion-1] = optionQuestion;
    this.setState({answers});
  }

  renderItem = ({item}) => {
    const options = [];
    item.options.map((op) => 
      options.push({key:(item.id+op).toString(), text: op, number:item.number}))

    return (
      <View style={styles.containerQuestion}>
        <View style={styles.subContainerQuestion}>
          <Text style={[styles.textNumber,styles.textColor]}> {item.number})</Text>
          <Text style={[styles.textQuestion,styles.textColor]}> {item.question} </Text>
        </View>
        <RadioButton
          options={options}
          click={this.clickOptionsQuestion}
        />
      </View>
    ) 
  }

  render() {
    return(

      <SafeAreaView style={styles.containerQuiz}>
        <View>
          <View style={styles.containerAnswers}>
            <Text style={[styles.textResp,styles.textColor]}>Participante </Text>
            <Text style={styles.textPart}>{this.state.participant}</Text>
          </View>
          <Text style={[styles.textAnswers,styles.textColor]}>Responda:</Text>
        </View>

        <FlatList
            data={questions}
            keyExtractor={(item) => 
              `${item.id}`
            }
            renderItem={
              this.renderItem 
            }
          />

          <TouchableOpacity 
          onPress={() => 
           {
              if(this.state.answers.length === this.state.questions.length) {
                this.props.navigation.navigate('Result', {
                  participant: this.state.participant,
                  questions: this.state.questions,
                  answers: this.state.answers
                })
              }
            }
          }
          >
            <Text
              style={
                this.state.answers.length === this.state.questions.length ?
                  (styles.proceed)
                    :
                  (styles.noProceed)
              }
            >
              Concluír
            </Text>
          </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

Quiz.navigationOptions = ({navigation}) => ({
  title: 'Questões'
})

const styles = StyleSheet.create({
  containerQuiz: {
    padding: 10,
    paddingBottom: 15,
    flex: 1,
    backgroundColor: '#f9f1f2',
  },
  containerAnswers: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  textResp: {
    alignSelf: 'center'
  },
  textPart: {
    color: '#2f2f2f',
    fontSize: 18
  },
  proceed: {
    color: '#009000',
    textAlign: 'right',
    fontWeight: 'bold',
    fontSize: 20
  },
  noProceed: {
    color: '#900111',
    textAlign: 'right',
    fontWeight: 'bold',
    fontSize: 20
  },
  containerQuestion: {
    marginBottom: 10,
    flexBasis: 0,
    flexGrow: 0,
    padding: 10
  },
  subContainerQuestion: {
    flexDirection: 'row',
  },
  textQuestion: {
    marginBottom: 5,
  },
  textNumber: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  textColor: {
    color: '#333333',
  }
})