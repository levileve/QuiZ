import {createStackNavigator} from 'react-navigation';
import Main from './pages/main';
import Quiz from './pages/quiz';
import Result from './pages/result';

export default createStackNavigator({
  Main,
  Quiz,
  Result,
},{
  headerLayoutPreset: 'center',
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#DA552F'
    },
    headerTintColor: '#FFF'
  },
});