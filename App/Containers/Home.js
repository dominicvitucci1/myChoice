import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Alert } from 'react-native';
import I18n from 'react-native-i18n';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { strings } from '../Utils/Strings';

class Home extends Component {

    static navigationOptions = {

        headerStyle: {
            backgroundColor: '#CCCC66'
            }, 

            // headerRight: <Icon.Button
            // name='language'
            // backgroundColor='transparent'
            // onPress={this.popUp}
            // />
      };
      
      componentDidMount= () => {
        this.popUp();
        }

      onPressDisclaimer= () => {
        const { navigate } = this.props.navigation;
        navigate('Disclaimer');
      }

      onPressStart= () => {
        const { navigate } = this.props.navigation;
        navigate('ThreeChoice');
      }

      popUp= () => {
        Alert.alert(
            'Alert Title',
            'My Alert Msg',
            [
              { text: 'English', onPress: () => this._onSetLanguageToEnglish() },
              { text: 'Spanish', onPress: () => this._onSetLanguageToSpanish() }
            ]
          );
    }

    _onSetLanguageToEnglish() {
        strings.setLanguage('en');
        this.setState({});
      }

      _onSetLanguageToSpanish() {
        strings.setLanguage('es');
        this.setState({});
      }

    render() {
        return (
            <View style={styles.mainBackgroud} >

                <View style={styles.startTextViewStyle}>
                    <Text style={styles.titleStyle}>
                        { strings.welcome_to }
                    </Text>
                </View>
                <View style={styles.logoViewStyle}>
                    <Image
                    style={styles.logoImageStyle}
                    source={require('../../resources/Top-Bar-132.png')}
                    />
                </View>
                <View style={styles.startTextViewStyle}>
                    <Text style={styles.startTextStyle}>
                        { strings.press_get_started_to_begin }
                    </Text>
                </View>
                <View style={styles.cathyViewStyle}>
                    <Image
                    style={styles.cathyImageStyle}
                    source={require('../../resources/cathy.png')}
                    />
                </View>
                <Button
                    backgroundColor='#66B7E5'
                    large
                    buttonStyle={styles.buttonStyle}
                    title={strings.get_started}
                    onPress={this.onPressStart}
                />
                <View style={styles.disclaimerTextViewStyle}>
                    <Text adjustsFontSizeToFit style={styles.disclaimerTextStyle} onPress={this.onPressDisclaimer}>
                    { strings.disclaimerButtonTitle }
                    </Text>
                </View>
                
            </View>
        );
    }
}

export default Home;

const styles = StyleSheet.create({
    mainBackgroud: {
      flex: 1,
      justifyContent: 'flex-start',
      backgroundColor: '#996633'
    },

    titleViewStyle: {
        paddingTop: 10,
        backgroundColor: '#000'
    },

    titleStyle: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 32
    },

    startTextViewStyle: {
        backgroundColor: '#000',
        marginBottom: 8,
        marginLeft: 8,
        marginRight: 8
    },

    startTextStyle: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20
    },

    logoViewStyle: {
        backgroundColor: '#000',
        justifyContent: 'center',
        marginLeft: 8,
        marginRight: 8,
        marginTop: 15,
        marginBottom: 40

    },

    logoImageStyle: {
        resizeMode: 'contain',
        alignSelf: 'center',
        justifyContent: 'center',
        width: 280,
        height: 40
    },

    cathyViewStyle: {
        backgroundColor: '#000',
        justifyContent: 'center',
        marginLeft: 8,
        marginRight: 8,
        marginBottom: 40
    },

    cathyImageStyle: {
        resizeMode: 'contain',
        alignSelf: 'center',
        width: 320,
        height: 240
    },

    buttonStyle: {
        borderRadius: 5,
        marginLeft: 8,
        marginRight: 8,
        marginBottom: 15
        },

    disclaimerTextViewStyle: {
        backgroundColor: '#000',
        marginLeft: 8,
        marginRight: 8
    },

    disclaimerTextStyle: {
        textAlign: 'center',
        color: '#fff'
    }
  });
