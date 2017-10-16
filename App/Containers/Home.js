import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Alert } from 'react-native';
import I18n from 'react-native-i18n';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { scale, moderateScale, verticalScale } from '../Utils/scaling';
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
            'Please Select Your Language',
            '',
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
      backgroundColor: '#996633',
    },

    titleViewStyle: {
        paddingTop: scale(10),
        backgroundColor: '#000'
    },

    titleStyle: {
        textAlign: 'center',
        color: '#fff',
        fontSize: moderateScale(32)
    },

    startTextViewStyle: {
        backgroundColor: '#000',
        marginBottom: scale(8),
        marginLeft: scale(8),
        marginRight: scale(8)
    },

    startTextStyle: {
        textAlign: 'center',
        color: '#fff',
        fontSize: moderateScale(20)
    },

    logoViewStyle: {
        backgroundColor: '#000',
        justifyContent: 'center',
        marginLeft: scale(8),
        marginRight: scale(8),
        marginTop: scale(15),
        marginBottom: scale(25)

    },

    logoImageStyle: {
        resizeMode: 'contain',
        alignSelf: 'center',
        justifyContent: 'center',
        width: moderateScale(280),
        height: verticalScale(40)
    },

    cathyViewStyle: {
        backgroundColor: '#000',
        justifyContent: 'center',
        marginLeft: scale(8),
        marginRight: scale(8),
        marginBottom: scale(25)
    },

    cathyImageStyle: {
        resizeMode: 'contain',
        alignSelf: 'center',
        width: moderateScale(320),
        height: verticalScale(240)
    },

    buttonStyle: {
        borderRadius: 5,
        marginLeft: scale(8),
        marginRight: scale(8),
        marginBottom: scale(15)
        },

    disclaimerTextViewStyle: {
        backgroundColor: '#000',
        marginLeft: scale(8),
        marginRight: scale(8),
    },

    disclaimerTextStyle: {
        textAlign: 'center',
        color: '#fff'
    }
  });
