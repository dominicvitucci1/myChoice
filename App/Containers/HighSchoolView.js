import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { ReactNativeAudioStreaming } from 'react-native-audio-streaming';
import Tts from 'react-native-tts';
import Icon from 'react-native-vector-icons/Entypo';
import Hyperlink from 'react-native-hyperlink';
import { strings } from '../Utils/Strings';
import { scale, moderateScale, verticalScale } from '../Utils/scaling';

const url = 'https://firebasestorage.googleapis.com/v0/b/mychoice-f9186.appspot.com/o/My%20Choice%20High%20School.mp3?alt=media&token=e9084c67-e7c4-4365-89a0-599e6e5d82b5';


class HighSchoolView extends Component {

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
            Tts.speak(strings.thinking_about_having_sex_you_may_feel_curious_interested_or_even_pressured_how_do_you_know_what_is_);
        } else if (strings.getLanguage() === 'es') {
            ReactNativeAudioStreaming.play(url, { showIniOSMediaCenter: true, showInAndroidNotifications: true });              
        }     
      }

    render() {
        return (
            <View style={styles.mainBackgroud}>
                <ScrollView style={styles.scrollStyle}>
                    <Text style={styles.titleStyle}>
                        { strings.HS_Question }
                    </Text> 
                    <Hyperlink linkDefault linkStyle={{ color: '#0645AD' }}>
                        <Text style={styles.titleStyle}>
                            { strings.thinking_about_having_sex_you_may_feel_curious_interested_or_even_pressured_how_do_you_know_what_is_ }
                        </Text>
                    </Hyperlink>
                </ScrollView>
            </View>
            
        );
    }
}

export default HighSchoolView;

const styles = StyleSheet.create({
    mainBackgroud: {
      flex: 1,
      backgroundColor: '#996633'
    },

    titleStyle: {
        textAlign: 'center',
        color: '#fff',
        fontSize: moderateScale(18),
        paddingTop: scale(10),
        paddingBottom: scale(8)
    },

    bodyStyle: {
        textAlign: 'center',
        color: '#fff',
        fontSize: moderateScale(14),
    },

    scrollStyle: {
        flex: 1,
        padding: scale(8)
    }
  });
