import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { ReactNativeAudioStreaming } from 'react-native-audio-streaming';
import Tts from 'react-native-tts';
import Icon from 'react-native-vector-icons/Entypo';
import { strings } from '../Utils/Strings';
import { scale, moderateScale, verticalScale } from '../Utils/scaling';

const url = 'https://firebasestorage.googleapis.com/v0/b/mychoice-f9186.appspot.com/o/43.mp3?alt=media&token=e71b6037-a0ac-49f5-8b5b-d63d77d7ae6b';

class ForMeView extends Component {

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
            Tts.speak(strings.Are_you_planning_to_get_pregnant_within_the_next_1_3_years);
        } else if (strings.getLanguage() === 'es') {
            ReactNativeAudioStreaming.play(url, { showIniOSMediaCenter: true, showInAndroidNotifications: true });              
        }     
      }

    onPressYes= () => {
        const { navigate } = this.props.navigation;
        navigate('QuestionsView');
        }

    onPressNo= () => {
        const { navigate } = this.props.navigation;
        navigate('LARCView');
        }
    

    render() {
        return (
            <View style={styles.mainBackgroud}>
                <Text style={styles.questionStyle}>
                    {strings.Are_you_planning_to_get_pregnant_within_the_next_1_3_years}
                </Text> 

                <View style={styles.buttonBackground}>
                    <Button
                        backgroundColor='#2dc937'
                        small
                        buttonStyle={styles.buttonYesStyle}
                        title={strings.Yes}
                        onPress={this.onPressYes}
                    />

                    <Button
                        backgroundColor='#cc3232'
                        small
                        buttonStyle={styles.buttonNoStyle}
                        title={strings.No}
                        onPress={this.onPressNo}
                    />
                </View>
            </View>
        );
    }
}

export default ForMeView;

const styles = StyleSheet.create({
    mainBackgroud: {
      flex: 1,
      backgroundColor: '#996633'
    },

    questionStyle: {
        textAlign: 'center',
        color: '#fff',
        fontSize: moderateScale(16),
        marginBottom: scale(8),
        marginLeft: scale(8),
        marginRight: scale(8),
        height: verticalScale(75),
        width: moderateScale(343),
        alignSelf: 'center'
    },

    buttonNoStyle: {
        height: verticalScale(80),
        width: moderateScale(160),
        borderRadius: 5,
        marginRight: scale(8)
    },

    buttonYesStyle: {
        height: verticalScale(80),
        width: moderateScale(160),
        borderRadius: 5,
        marginLeft: scale(8),
    },

    buttonBackground: {
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
        marginLeft: scale(8),
        marginRight: scale(8),
        position: 'absolute',
        bottom: scale(8)
    },
  });
