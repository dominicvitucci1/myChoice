import React, { Component } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Alert, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Button } from 'react-native-elements';
import t from 'tcomb-form-native';
import RNRestart from 'react-native-restart';
import { strings } from '../Utils/Strings';
import { scale, moderateScale, verticalScale } from '../Utils/scaling';

const Form = t.form.Form;

const stylesheet = t.form.Form.stylesheet;

// overriding the text color
stylesheet.controlLabel.normal.color = '#fff';
stylesheet.textbox.normal.color = '#fff';
stylesheet.textbox.error.borderColor = '#fff';
stylesheet.textbox.error.color = '#fff';

const Email = t.struct({
    email: t.String,                     
  });

const emailOptions = [];

const options = { 
    auto: 'placeholders',
    fields: {
        email: {
            label: 'Enter your email address',
            error: 'Enter a valid email address'
        }
      }
};

class EmailView extends Component {

    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#CCCC66',
            }
      };

      constructor(props) {
        super(props);
        
        const tempOptions = this.props.navigation.state.params.emailOptions;

        for (let j = 0; j < tempOptions.length; j++) {
           emailOptions.push(tempOptions[j].key);
        }
      }

      onPressSend= () => {
        // call getValue() to get the values of the form
        const value = this.refs.form.getValue();
        if (value) { // if validation fails, value will be null
          console.log(value); // value here is an instance of Email

        const body = {
            personalizations: [
                { to: [{ email: value.email }], 
                subject: 'Your Results' }
            ],
                from: { email: 'donotreply@stratifiedmobile.com' },
                content: [{ type: 'text/plain',
                value: strings.your_chosen_forms_of_birth_control_are_b2f4e6afa4e2a14b4114b41168d667f6 + JSON.stringify(emailOptions) + strings.ask_your_healthcare_provider_about_these_methods_to_learn_more_disclaimer_this_application_app_does_ }]
            };

        if (global.key) {
            fetch('https://api.sendgrid.com/v3/mail/send', {
                method: 'POST',
                headers: {
                Authorization: `Bearer ${global.key}`,
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            }).then((response) => {
                this.setState({ response: `${response.status} - ${response.ok}` });

                if (this.state.response === '202 - true') {
                    Alert.alert(
                        strings.your_results_have_been_sent,
                        strings.thank_you,
                        [
                          { text: strings.Okay, onPress: () => this.onPressOkaySent() },
                        ]
                      );
                }
            });
            } else {
                Alert.alert(
                    strings.error,
                    strings.error,
                    [
                      { text: strings.Okay, onPress: () => this.onPressOkaySent() },
                    ]
                  );
            }
        }
      }

        onPressOkaySent= () => {
            Alert.alert(
                strings.after_using_this_application_are_you_more_likely_to_use_an_iud_or_an_implant,
                strings.your_response_will_not_be_associated_with_any_identifying_information,
                [
                  { text: strings.Yes, onPress: () => this.onPressYesLARC() },
                  { text: strings.No, onPress: () => this.onPressNoLARC(), style: 'cancel' }
                ]
              );
            }

    onPressOkay= () => {
        RNRestart.Restart();
    }

    onPressCancel= () => {
        console.log('cancel pressed');
    }

    onPressYesLARC= () => {
        Alert.alert(
            strings.if_youre_finished_viewing_your_results_and_you_dont_wish_to_receive_them_by_email_tap_okay_to_exit_t,
            strings.your_email_address_will_not_be_saved_and_the_methods_selected_for_you_will_not_be_connected_to_any_i,
            [
              { text: strings.Okay, onPress: () => this.onPressOkay() },
            ]
          );
    }

    onPressNoLARC= () => {
        Alert.alert(
            strings.if_youre_finished_viewing_your_results_and_you_dont_wish_to_receive_them_by_email_tap_okay_to_exit_t,
            strings.your_email_address_will_not_be_saved_and_the_methods_selected_for_you_will_not_be_connected_to_any_i,
            [
              { text: strings.Okay, onPress: () => this.onPressOkay() },
              { text: strings.Cancel, onPress: () => this.onPressCancel(), style: 'cancel' }
            ]
          );
    }

        DismissKeyboard= () => {
            Keyboard.dismiss(); 
        }

    render() {
        return (
            <TouchableWithoutFeedback onPress={() => { this.DismissKeyboard(); }}>
                <KeyboardAvoidingView style={styles.mainBackgroud} behavior='padding'>
                {/* display */}
                <Form
                ref='form'
                type={Email}
                options={options}
                />
                <Button
                    backgroundColor='#903e32'
                    small
                    buttonStyle={styles.buttonSendStyle}
                    title={strings.Send}
                    onPress={this.onPressSend.bind(this)}
                />
                <View style={{ height: 60 }} />
            </KeyboardAvoidingView>
          </TouchableWithoutFeedback>
        );
    }
}

export default EmailView;

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

    // container: {
    //     justifyContent: 'center',
    //     marginTop: 50,
    //     padding: 20,
    //     backgroundColor: '#ffffff',
    //   },

      title: {
        fontSize: 30,
        alignSelf: 'center',
        marginBottom: 30
      },

  });
