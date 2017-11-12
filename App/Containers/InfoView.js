import React, { Component } from 'react';
import { View, StyleSheet, Alert, Keyboard, ScrollView, Text, NetInfo } from 'react-native';
import { Button } from 'react-native-elements';
import * as firebase from 'firebase';
import t from 'tcomb-form-native';
import { strings } from '../Utils/Strings';
import { scale, moderateScale, verticalScale } from '../Utils/scaling';

const Form = t.form.Form;
const stylesheet = t.form.Form.stylesheet;

// overriding the text color
stylesheet.controlLabel.normal.color = '#fff';
stylesheet.textbox.normal.color = '#fff';
stylesheet.textbox.error.borderColor = '#fff';
stylesheet.textbox.error.color = '#fff';


const Age = t.enums({
    _1519: strings._1519,
    _2024: strings._2024,
    _2529: strings._2529,
    _3034: strings._3034,
    _3539: strings._3539,
    _4044: strings._4044,
    _4550: strings._4550,
    older_than_50: strings.older_than_50
  });

  const Ethnicity = t.enums({
    hispanic_or_latina: strings.hispanic_or_latina,
    not_hispanic_or_latina: strings.not_hispanic_or_latina,
  });

  const Race = t.enums({
    black_or_african_american: strings.black_or_african_american,
    Asian: strings.Asian,
    american_indian_or_alaskan_native: strings.american_indian_or_alaskan_native,
    native_hawaiian_or_other_pacific_islander: strings.native_hawaiian_or_other_pacific_islander,
    White: strings.White,
  });

  const medAssist = t.enums({
    Yes: strings.Yes,
    No: strings.No,
  });

const UserInfo = t.struct({
    Age,   
    Ethnicity,
    Race,
    medAssist
  });

const options = { 
    fields: {
        Age: {
            label: strings.Please_select_your_age_range,
            error: strings.Please_select_your_age_range,
            nullOption: { value: '', text: strings.Tap_here_to_select_your_age_range },
        },
        Ethnicity: {
            label: strings.What_ethnicity_best_describes_you,
            error: strings.What_ethnicity_best_describes_you,
            nullOption: { value: '', text: strings.Tap_here_to_select_your_ethnicity }            
        },
        Race: {
            label: strings.Please_select_your_race,
            error: strings.Please_select_your_race,
            nullOption: { value: '', text: strings.Tap_here_to_select_your_race }            
        },
        medAssist: {
            label: strings.Do_you_have_or_do_you_qualify_for_State_Medical_Assistance,
            error: strings.Do_you_have_or_do_you_qualify_for_State_Medical_Assistance,
            nullOption: { value: '', text: strings.Tap_here_to_select_if_you_qualify_for_State_Medical_Assitance }
            
        }
      }
};

class InfoView extends Component {

    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#CCCC66',
            }
      };

      constructor(props) {
        super(props);
      }

      componentDidMount() {
        NetInfo.isConnected.addEventListener('change', this.handleConnectionChange);
        
            NetInfo.isConnected.fetch().done(
              (isConnected) => { this.setState({ status: isConnected }); }
            );
      }

      componentWillUnmount= () => {
        NetInfo.isConnected.removeEventListener('change', this.handleConnectionChange);        
      }

    onPressDone= () => {
    // call getValue() to get the values of the form
    const value = this.refs.form.getValue();
    if (value) { // if validation fails, value will be null
        console.log(value); // value here is an instance of UserInfo
        if (this.state.status === true) {
        const userId = firebase.auth().currentUser.uid;                
        firebase.database().ref(`users/${userId}`).set({
            UserInfo: value
          });
        }

        this.props.navigation.dispatch({ type: 'Navigation/BACK' });        
        }
    }

    DismissKeyboard= () => {
        Keyboard.dismiss(); 
    }

    handleConnectionChange = (isConnected) => {
        this.setState({ status: isConnected });
        console.log(`is connected: ${this.state.status}`);
    }

    render() {
        return (
            <View style={styles.mainBackgroud}>
                <ScrollView style={styles.scrollStyle} contentContainerStyle={styles.wrapper}>
                    <Text style={styles.questionStyle}>
                        {strings.Please_enter_the_following_infomation}
                    </Text> 
                    {/* display */}
                    <Form
                    ref='form'
                    type={UserInfo}
                    options={options}
                    />
                    <Button
                        backgroundColor='#903e32'
                        small
                        buttonStyle={styles.buttonSendStyle}
                        title={strings.Send}
                        onPress={this.onPressDone.bind(this)}
                    />
            </ScrollView>
          </View>
        );
    }
}

export default InfoView;

const styles = StyleSheet.create({
    mainBackgroud: {
      flex: 1,
      backgroundColor: '#996633',
      //justifyContent: 'center',
      padding: 20,
    },

    titleStyle: {
        textAlign: 'center',
        color: '#fff',
        fontSize: moderateScale(18),
        paddingTop: scale(10),
        paddingBottom: scale(8)
    },

    buttonSendStyle: {
        height: verticalScale(80),
        width: moderateScale(320),
        borderRadius: 5,
        marginLeft: scale(8),
        marginRight: scale(8),
        alignSelf: 'center',        
    },

      title: {
        fontSize: 30,
        alignSelf: 'center',
        marginBottom: 30
      },

      scrollStyle: {
        flex: 1,
        padding: scale(8),
        marginBottom: scale(8),
        backgroundColor: 'transparent',
        
        
    },

    wrapper: {
        //alignItems: 'center',
        backgroundColor: 'transparent',
        
    },

    questionStyle: {
        textAlign: 'center',
        color: '#fff',
        fontSize: moderateScale(18),
        height: verticalScale(75),
        width: moderateScale(343),
        alignSelf: 'center'
    },

  });
