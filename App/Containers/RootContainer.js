import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as firebase from 'firebase';
import StartupActions from '../Redux/StartupRedux';
import ReduxPersist from '../Config/ReduxPersist';
import { StackNavigator } from 'react-navigation';

import HomeContainer from '../Containers/Home';
import Disclaimer from './Disclaimer';
import ThreeChoice from './ThreeChoice';
import OptionsView from './OptionsView';
import HighSchoolView from './HighSchoolView';
import ForMeView from './ForMeView';
import DetailView from './DetailView';
import LARCView from './LARCView';
import QuestionsView from './QuestionsView';
import QuestionsMedView from './QuestionsMedView';
import QuestionsOptionsView from './QuestionsOptionsView';
import ResultsView from './ResultsView';
import EmailView from './EmailView';

const AppNavigator = StackNavigator({
  Home: {
    screen: HomeContainer
  },

  Disclaimer: { 
    screen: Disclaimer 
  },

  ThreeChoice: {
    screen: ThreeChoice
  },
  OptionsView: {
    screen: OptionsView
  },
  HighSchoolView: {
    screen: HighSchoolView
  },
  ForMeView: {
    screen: ForMeView
  },
  DetailView: {
    screen: DetailView
  },
  LARCView: {
    screen: LARCView
  },
  QuestionsView: {
    screen: QuestionsView
  }, 
  QuestionsMedView: {
    screen: QuestionsMedView
  },
  QuestionsOptionsView: {
    screen: QuestionsOptionsView
  },
  ResultsView: {
    screen: ResultsView
  },
  EmailView: {
    screen: EmailView
  }

});

class RootContainer extends Component {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAp0GTjONAiN8RiGHtk9KET-lMhiK01mqk',
      authDomain: 'mychoice-f9186.firebaseapp.com',
      databaseURL: 'https://mychoice-f9186.firebaseio.com',
      projectId: 'mychoice-f9186',
      storageBucket: 'mychoice-f9186.appspot.com',
      messagingSenderId: '429346895811'
    });
  }
  

  componentDidMount() {
    if (!ReduxPersist.active) {
      this.props.startup();
    }

    firebase.auth().signInAnonymously().catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + errorMessage);
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        //const isAnonymous = user.isAnonymous;
        const uid = user.uid;
        //console.log(isAnonymous);
        //console.log(uid);      
        global.userID = uid;
        return firebase.database().ref('/SendGridKey').once('value').then((snapshot) => {
          const key = (snapshot.val()) || 'Error';
          global.key = String(key);
        });
      } else {
        // User is signed out.
        // ...
      }
      // ...
    });
  }

  render() {
    return (
      <AppNavigator />
    );
  }
}

const mapStateToDispatch = dispatch => ({
  startup: () => dispatch(StartupActions.startup())
});


export default connect(null, mapStateToDispatch)(RootContainer);

