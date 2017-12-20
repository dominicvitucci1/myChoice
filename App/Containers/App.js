import React, { Component } from 'react';
import { Provider } from 'react-redux';
import codePush from 'react-native-code-push';
import '../I18n/I18n'; // keep before RootContainer
import RootContainer from './RootContainer';
import createStore from '../Redux';

// create our store
const store = createStore();

/**
 * Provides an entry point into our application.  Both index.ios.js and index.android.js
 * call this component first.
 *
 * We create our Redux store here, put it into a provider and then bring in our
 * RootContainer.
 *
 * We separate like this to play nice with React Native's hot reloading.
 */
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    );
  }
}

const codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_RESUME };

App = codePush(codePushOptions)(App);

export default App;
