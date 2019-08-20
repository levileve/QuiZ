import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList, SafeAreaView, TouchableOpacity} from 'react-native';

export default class Quiz extends Component {
  state = {
    participant: '',
    questions: [],
    answers: []
  }
  
  componentWillMount() {
    const {navigation} = this.props;

    const participant= navigation.getParam('participant')
    const questions= navigation.getParam('questions')
    const answers= navigation.getParam('answers')

    this.setState({participant, questions, answers});
  }

  clickOptionsQuestion = (optionQuestion, numberQuestion) => {
    const answers = [...this.state.answers];
    answers[numberQuestion-1] = optionQuestion;

    this.setState({answers});
  }

  renderItem = ({item, index}) => {
    return (
      <View style={styles.containerQuestion}>
        <View style={styles.subContainerQuestion}>
          <Text style={[styles.textNumber,styles.textColor]}> {item.number})</Text>
          <Text style={[styles.textQuestion,styles.textColor]}> {item.question} </Text>
        </View>
        <View style={styles.subContainerQuestionDois}>
          <Text style={styles.textGray}> {item.answer} </Text>
          <Text 
          style={ item.answer === this.state.answers[index] ? 
            styles.rightAnswer
              :
            styles.wrongAnswer}
          > {this.state.answers[index]} </Text>
        </View>
      </View>
    )
  }

  render() {
    return(
      <SafeAreaView style={styles.containerQuiz}>
      
        <FlatList
          data={this.state.questions}
          keyExtractor={(item) => 
            `${item.id}`
          }
          renderItem={
            this.renderItem 
          }
        />
          
      </SafeAreaView>
    );
  }
}

Quiz.navigationOptions = ({navigation}) => ({
  title: 'Resultados'
})

const styles = StyleSheet.create({
  containerQuiz: {
    padding: 10,
    paddingBottom: 15,
    flex: 1,
    backgroundColor: '#f9f1f2',
  },
  rightAnswer: {
    color: '#009000',
    fontSize: 16
  },
  wrongAnswer: {
    color: '#910000',
    fontSize: 16
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
    color: 'blue',
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
  subContainerQuestionDois: {
    marginLeft: 10,
  },
  textGray: {
    color: '#918199',
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