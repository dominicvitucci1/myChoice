import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { ReactNativeAudioStreaming } from 'react-native-audio-streaming';
import Tts from 'react-native-tts';
import Icon from 'react-native-vector-icons/Entypo';
import { strings } from '../Utils/Strings';
import { scale, moderateScale, verticalScale } from '../Utils/scaling';

const url = 'https://firebasestorage.googleapis.com/v0/b/mychoice-f9186.appspot.com/o/Disclaimer.mp3?alt=media&token=6ff105fb-cd0c-4435-93ce-69d204088d8d';


class Disclaimer extends Component {

    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        return {
            headerRight: <Icon.Button
            name='sound'
            backgroundColor='transparent'
            onPress={() => { params.onPressSound(); }}
            />,
             headerStyle: {
                backgroundColor: '#CCCC66',
                }
        };          
      };

      componentDidMount() {
        this.props.navigation.setParams({ onPressSound: this.onPressSound });
      }

      onPressSound= () => {
        if (strings.getLanguage() === 'en') {
            Tts.speak(strings.this_application_app_does_not_provide_specific_medical_advice_and_does_not_endorse_any_medical_or_pr);
        } else if (strings.getLanguage() === 'es') {
            ReactNativeAudioStreaming.play(url, { showIniOSMediaCenter: true, showInAndroidNotifications: true });              
        }     
      }

    render() {
        return (
            <View style={styles.mainBackgroud}>
                <ScrollView tyle={styles.scrollStyle}>
                    <Text style={styles.titleStyle}>
                        { strings.Disclaimer }
                    </Text> 
                    <Text style={styles.disclaimerStyle}>
                        { strings.this_application_app_does_not_provide_specific_medical_advice_and_does_not_endorse_any_medical_or_pr }
                    </Text>
                </ScrollView>
            </View>
            
        );
    }
}

export default Disclaimer;

const styles = StyleSheet.create({
    mainBackgroud: {
      flex: 1,
      backgroundColor: '#996633'
    },

    titleStyle: {
        textAlign: 'center',
        color: '#fff',
        fontSize: moderateScale(32),
        marginBottom: scale(15),
        marginLeft: scale(8),
        marginRight: scale(8)
    },

    disclaimerStyle: {
        textAlign: 'center',
        color: '#fff',
        fontSize: moderateScale(18),
        marginBottom: scale(8),
        marginLeft: scale(8),
        marginRight: scale(8)
    },

    scrollStyle: {
        flex: 1,
        padding: scale(8)
    }
  });
