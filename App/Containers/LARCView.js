import React, { Component } from 'react';
import { View, Text, StyleSheet, NetInfo } from 'react-native';
import { Button } from 'react-native-elements';
import * as firebase from 'firebase';
import { ReactNativeAudioStreaming } from 'react-native-audio-streaming';
import Tts from 'react-native-tts';
import Icon from 'react-native-vector-icons/Entypo';
import { strings } from '../Utils/Strings';
import { scale, moderateScale, verticalScale } from '../Utils/scaling';

let url = 'https://firebasestorage.googleapis.com/v0/b/mychoice-f9186.appspot.com/o/31.mp3?alt=media&token=b8bdd205-ccef-4d67-bfba-13f16050e624';

class LARCView extends Component {

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

      constructor(props) {
        super(props);

        this.state = { questionPrompt: strings.Do_you_know_there_are_long_acting_reversible_contraceptives };
      }

        componentDidMount() {
            this.props.navigation.setParams({ onPressSound: this.onPressSound });

            NetInfo.isConnected.addEventListener('change', this.handleConnectionChange);
            
                NetInfo.isConnected.fetch().done(
                  (isConnected) => { this.setState({ status: isConnected }); }
                );
          }

          componentWillUnmount= () => {
            NetInfo.isConnected.removeEventListener('change', this.handleConnectionChange);
            }
    
          onPressSound= () => {
            if (strings.getLanguage() === 'en') {
                Tts.speak(this.state.questionPrompt);
            } else if (strings.getLanguage() === 'es') {
                ReactNativeAudioStreaming.play(url, { showIniOSMediaCenter: true, showInAndroidNotifications: true });              
            }     
          }

        onPressYes= () => {
            if (this.state.questionPrompt === strings.Do_you_know_there_are_long_acting_reversible_contraceptives) {
                this.setState({ questionPrompt: strings.do_you_want_to_know_more_about_them });
                if (this.state.status === true) {
                url = 'https://firebasestorage.googleapis.com/v0/b/mychoice-f9186.appspot.com/o/188.mp3?alt=media&token=01ce8226-00e4-4959-af3b-45dc0ee99080';
                const userId = firebase.auth().currentUser.uid;                
                firebase.database().ref(`users/${userId}`).set({
                    Do_you_know_there_are_long_acting_reversible_contraceptives: 'Yes'
                  });
                }
                } else if (this.state.questionPrompt === strings.do_you_want_to_know_more_about_them) {
                    if (this.state.status === true) {
                    const userId = firebase.auth().currentUser.uid;                    
                    firebase.database().ref(`users/${userId}`).set({
                        do_you_want_to_know_more_about_them: 'Yes'
                      });
                    }
                    
                    const { navigate } = this.props.navigation;
                    navigate('LARCOptionsView');
            }
        }
    
        onPressNo= () => {
            if (this.state.questionPrompt === strings.Do_you_know_there_are_long_acting_reversible_contraceptives) {
                this.setState({ questionPrompt: strings.do_you_want_to_know_more_about_them });
                if (this.state.status === true) {
                url = 'https://firebasestorage.googleapis.com/v0/b/mychoice-f9186.appspot.com/o/188.mp3?alt=media&token=01ce8226-00e4-4959-af3b-45dc0ee99080';                
                const userId = firebase.auth().currentUser.uid;                
                firebase.database().ref(`users/${userId}`).set({
                    Do_you_know_there_are_long_acting_reversible_contraceptives: 'No'
                  });
                }
                } else if (this.state.questionPrompt === strings.do_you_want_to_know_more_about_them) {
                if (this.state.status === true) {
                const userId = firebase.auth().currentUser.uid;                    
                firebase.database().ref(`users/${userId}`).set({
                    do_you_want_to_know_more_about_them: 'No'
                    });
                }
                
                const { navigate } = this.props.navigation;
                navigate('QuestionsView');
                }
            }

            handleConnectionChange = (isConnected) => {
                this.setState({ status: isConnected });
                console.log(`is connected: ${this.state.status}`);
            }

    render() {
        return (
            <View style={styles.mainBackgroud}>
                <Text style={styles.questionStyle}>
                    {this.state.questionPrompt}
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

export default LARCView;

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
