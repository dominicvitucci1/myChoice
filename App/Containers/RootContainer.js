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

