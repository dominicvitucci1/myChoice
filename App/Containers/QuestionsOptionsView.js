import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { ReactNativeAudioStreaming } from 'react-native-audio-streaming';
import Tts from 'react-native-tts';
import Icon from 'react-native-vector-icons/Entypo';
import { strings } from '../Utils/Strings';
import renderIf from '../Utils/renderif';
import { scale, moderateScale, verticalScale } from '../Utils/scaling';

let bcOptions = [];

let url = 'https://firebasestorage.googleapis.com/v0/b/mychoice-f9186.appspot.com/o/161.mp3?alt=media&token=96167ea4-782b-458a-b6cf-84927f329824';

class QuestionsOptionsView extends Component {

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
            bcOptions = this.props.navigation.state.params.bcOptions;
            }

        state = { questionOptionPrompt: strings.are_you_taking_any_of_these_medications_that_are_used_for_tuberculosis_tb_or_seizures };

        componentWillMount= () => {
            this.setState({ loadButtons: this.props.navigation.state.params.loadButtons });            
            }

        componentDidMount() {
            this.props.navigation.setParams({ onPressSound: this.onPressSound });
            }
    
        onPressSound= () => {
            if (strings.getLanguage() === 'en') {
                Tts.speak(this.state.questionOptionPrompt);
            } else if (strings.getLanguage() === 'es') {
                ReactNativeAudioStreaming.play(url, { showIniOSMediaCenter: true, showInAndroidNotifications: true });              
            }     
        }

        onPressYes= () => {
            if (this.state.questionOptionPrompt === strings.are_you_taking_any_of_these_medications_that_are_used_for_tuberculosis_tb_or_seizures) {
                //remove all hormonal items aka pills, ring, implant, 5yr iud
                for (let j = 0; j < bcOptions.length; j++) {
                    if (bcOptions[j].value === 'Daily') {
                        delete bcOptions[j];
                    } else if (bcOptions[j].value === 'Weekly') {
                        delete bcOptions[j];
                    } else if (bcOptions[j].value === 'Monthly') {
                        delete bcOptions[j];
                    } else if (bcOptions[j].value === '3 Months') {
                        delete bcOptions[j];
                    } else if (bcOptions[j].value === '5 Years') {
                        delete bcOptions[j];
                    } else {
                        bcOptions = bcOptions.filter(Boolean);
                    }
                }
                this.setState({ questionOptionPrompt: strings.would_you_remember_to_take_a_pill_at_the_same_time_everyday });
                url = 'https://firebasestorage.googleapis.com/v0/b/mychoice-f9186.appspot.com/o/291.mp3?alt=media&token=ac768aea-3022-4123-baa4-739c1037ce46';
                } else if (this.state.questionOptionPrompt === strings.would_you_remember_to_take_a_pill_at_the_same_time_everyday) {
                    this.setState({ questionOptionPrompt: strings.have_you_had_weight_reduction_surgery_that_shortens_the_length_of_your_small_intestine });
                    url = 'https://firebasestorage.googleapis.com/v0/b/mychoice-f9186.appspot.com/o/298.mp3?alt=media&token=93327e6e-f31d-4ed2-8f4a-465a78b7e3b8';                    
                } else if (this.state.questionOptionPrompt === strings.have_you_had_weight_reduction_surgery_that_shortens_the_length_of_your_small_intestine) {
                    this.setState({ questionOptionPrompt: strings.do_you_have_sensitive_skin_with_adhesives_such_as_tape });
                    url = 'https://firebasestorage.googleapis.com/v0/b/mychoice-f9186.appspot.com/o/185.mp3?alt=media&token=11317e45-8fea-4976-92d0-be90b88be0cf';                                        
                } else if (this.state.questionOptionPrompt === strings.do_you_have_sensitive_skin_with_adhesives_such_as_tape) {
                    //remove weekly aka patch
                    for (let j = 0; j < bcOptions.length; j++) {
                        if (bcOptions[j].value === 'Weekly') {
                            delete bcOptions[j];
                        } else {
                            bcOptions = bcOptions.filter(Boolean);
                        }
                    }
                    this.setState({ questionOptionPrompt: strings.would_you_be_willing_to_put_your_fingers_inside_your_vagina_to_insert_your_birth_control });
                    url = 'https://firebasestorage.googleapis.com/v0/b/mychoice-f9186.appspot.com/o/287.mp3?alt=media&token=acbea419-e469-4994-8f62-9aa9407252e2';                                                            
                } else if (this.state.questionOptionPrompt === strings.would_you_be_willing_to_put_your_fingers_inside_your_vagina_to_insert_your_birth_control) {
                    this.setState({ questionOptionPrompt: strings.would_you_it_bother_you_to_get_an_injection_shot_every_3_months });
                    url = 'https://firebasestorage.googleapis.com/v0/b/mychoice-f9186.appspot.com/o/288.mp3?alt=media&token=ad978f7e-6080-485a-847a-b7f64e610b82';                                                                                
                } else if (this.state.questionOptionPrompt === strings.would_you_it_bother_you_to_get_an_injection_shot_every_3_months) {
                    //remove 3 month aka shot
                    for (let j = 0; j < bcOptions.length; j++) {
                        if (bcOptions[j].value === '3 Months') {
                            delete bcOptions[j];
                        } else {
                            bcOptions = bcOptions.filter(Boolean);
                        }
                    }
                    this.setState({ questionOptionPrompt: strings.would_it_bother_you_to_have_an_implant_put_just_under_your_skin });
                    url = 'https://firebasestorage.googleapis.com/v0/b/mychoice-f9186.appspot.com/o/285.mp3?alt=media&token=cd7d7ac1-fd0e-409a-9af9-040b01de9a4e';                                                                                                    
                } else if (this.state.questionOptionPrompt === strings.would_it_bother_you_to_have_an_implant_put_just_under_your_skin) {
                    //remove 3 year aka implant
                    for (let j = 0; j < bcOptions.length; j++) {
                        if (bcOptions[j].value === '3 Year') {
                            delete bcOptions[j];
                        } else {
                            bcOptions = bcOptions.filter(Boolean);
                        }
                    }
                    this.setState({ questionOptionPrompt: strings.are_you_being_treated_for_any_sexually_transmitted_infections_stis_do_you_have_a_lot_of_vaginal_blee });
                    url = 'https://firebasestorage.googleapis.com/v0/b/mychoice-f9186.appspot.com/o/160.mp3?alt=media&token=87adbe4a-6862-4c3f-a99e-6377081b7397';                                                                                                                        
                } else if (this.state.questionOptionPrompt === strings.are_you_being_treated_for_any_sexually_transmitted_infections_stis_do_you_have_a_lot_of_vaginal_blee) {
                    //remove 5 yr
                    for (let j = 0; j < bcOptions.length; j++) {
                        if (bcOptions[j].value === '5 Year') {
                            delete bcOptions[j];
                        } else {
                            bcOptions = bcOptions.filter(Boolean);
                        }
                    }
                    this.setState({ questionOptionPrompt: strings.would_you_be_opposed_to_having_some_side_effects_such_as_spotting_during_the_initial_few_months_afte });
                    url = 'https://firebasestorage.googleapis.com/v0/b/mychoice-f9186.appspot.com/o/286.mp3?alt=media&token=8be6dc9a-8752-4b3c-baa4-341b610dd805';                                                                                                                                            
                } else if (this.state.questionOptionPrompt === strings.would_you_be_opposed_to_having_some_side_effects_such_as_spotting_during_the_initial_few_months_afte) {
                    //remove implant, shot, IUD 5&10 year
                    for (let j = 0; j < bcOptions.length; j++) {
                        if (bcOptions[j].value === 'Monthly') {
                            delete bcOptions[j];
                        } else if (bcOptions[j].value === '3 Months') {
                            delete bcOptions[j];
                        } else if (bcOptions[j].value === '5 Years') {
                            delete bcOptions[j];
                        } else if (bcOptions[j].value === '10 Years') {
                            delete bcOptions[j];
                        } else {
                            bcOptions = bcOptions.filter(Boolean);
                        }
                    }
                    //show results button
                    console.log(bcOptions);
                    this.setState({ questionOptionPrompt: strings.View_Your_Results });                                        
                    this.setState({ loadButtons: false });
                    url = 'https://firebasestorage.googleapis.com/v0/b/mychoice-f9186.appspot.com/o/67.mp3?alt=media&token=c6e81f58-844f-4b99-80e6-c0a28ad0a26b';                    
                }
            }
    
        onPressNo= () => {
            if (this.state.questionOptionPrompt === strings.are_you_taking_any_of_these_medications_that_are_used_for_tuberculosis_tb_or_seizures) {
                this.setState({ questionOptionPrompt: strings.would_you_remember_to_take_a_pill_at_the_same_time_everyday });
                url = 'https://firebasestorage.googleapis.com/v0/b/mychoice-f9186.appspot.com/o/291.mp3?alt=media&token=ac768aea-3022-4123-baa4-739c1037ce46';                
                } else if (this.state.questionOptionPrompt === strings.would_you_remember_to_take_a_pill_at_the_same_time_everyday) {
                    //remove pills
                    for (let j = 0; j < bcOptions.length; j++) {
                        if (bcOptions[j].value === 'Daily') {
                            delete bcOptions[j];
                        } else {
                            bcOptions = bcOptions.filter(Boolean);
                        }
                    }
                    this.setState({ questionOptionPrompt: strings.have_you_had_weight_reduction_surgery_that_shortens_the_length_of_your_small_intestine });
                    url = 'https://firebasestorage.googleapis.com/v0/b/mychoice-f9186.appspot.com/o/298.mp3?alt=media&token=93327e6e-f31d-4ed2-8f4a-465a78b7e3b8';                                        
                } else if (this.state.questionOptionPrompt === strings.have_you_had_weight_reduction_surgery_that_shortens_the_length_of_your_small_intestine) {
                    this.setState({ questionOptionPrompt: strings.do_you_have_sensitive_skin_with_adhesives_such_as_tape });
                    url = 'https://firebasestorage.googleapis.com/v0/b/mychoice-f9186.appspot.com/o/185.mp3?alt=media&token=11317e45-8fea-4976-92d0-be90b88be0cf';                                                            
                } else if (this.state.questionOptionPrompt === strings.do_you_have_sensitive_skin_with_adhesives_such_as_tape) {
                    this.setState({ questionOptionPrompt: strings.would_you_be_willing_to_put_your_fingers_inside_your_vagina_to_insert_your_birth_control });
                    url = 'https://firebasestorage.googleapis.com/v0/b/mychoice-f9186.appspot.com/o/287.mp3?alt=media&token=acbea419-e469-4994-8f62-9aa9407252e2';                                                                                
                } else if (this.state.questionOptionPrompt === strings.would_you_be_willing_to_put_your_fingers_inside_your_vagina_to_insert_your_birth_control) {
                    //remove monthly aka ring
                    for (let j = 0; j < bcOptions.length; j++) {
                        if (bcOptions[j].value === 'Monthly') {
                            delete bcOptions[j];
                        } else {
                            bcOptions = bcOptions.filter(Boolean);
                        }
                    }
                    this.setState({ questionOptionPrompt: strings.would_you_it_bother_you_to_get_an_injection_shot_every_3_months });
                    url = 'https://firebasestorage.googleapis.com/v0/b/mychoice-f9186.appspot.com/o/288.mp3?alt=media&token=ad978f7e-6080-485a-847a-b7f64e610b82';                                                                                                    
                } else if (this.state.questionOptionPrompt === strings.would_you_it_bother_you_to_get_an_injection_shot_every_3_months) {
                    this.setState({ questionOptionPrompt: strings.would_it_bother_you_to_have_an_implant_put_just_under_your_skin });
                    url = 'https://firebasestorage.googleapis.com/v0/b/mychoice-f9186.appspot.com/o/285.mp3?alt=media&token=cd7d7ac1-fd0e-409a-9af9-040b01de9a4e';                                                                                                                        
                } else if (this.state.questionOptionPrompt === strings.would_it_bother_you_to_have_an_implant_put_just_under_your_skin) {
                    this.setState({ questionOptionPrompt: strings.are_you_being_treated_for_any_sexually_transmitted_infections_stis_do_you_have_a_lot_of_vaginal_blee });
                    url = 'https://firebasestorage.googleapis.com/v0/b/mychoice-f9186.appspot.com/o/160.mp3?alt=media&token=87adbe4a-6862-4c3f-a99e-6377081b7397';                                                              
                } else if (this.state.questionOptionPrompt === strings.are_you_being_treated_for_any_sexually_transmitted_infections_stis_do_you_have_a_lot_of_vaginal_blee) {
                    this.setState({ questionOptionPrompt: strings.would_you_be_opposed_to_having_some_side_effects_such_as_spotting_during_the_initial_few_months_afte });
                    url = 'https://firebasestorage.googleapis.com/v0/b/mychoice-f9186.appspot.com/o/286.mp3?alt=media&token=8be6dc9a-8752-4b3c-baa4-341b610dd805';                                                                                                                                                                
                } else if (this.state.questionOptionPrompt === strings.would_you_be_opposed_to_having_some_side_effects_such_as_spotting_during_the_initial_few_months_afte) {
                    //show results button
                    console.log(bcOptions);
                    this.setState({ questionOptionPrompt: strings.View_Your_Results });                    
                    this.setState({ loadButtons: false });
                    url = 'https://firebasestorage.googleapis.com/v0/b/mychoice-f9186.appspot.com/o/67.mp3?alt=media&token=c6e81f58-844f-4b99-80e6-c0a28ad0a26b';
                }
            }

            onPressResults= () => {
                bcOptions = bcOptions.filter(Boolean);
                const { navigate } = this.props.navigation;                
                navigate('ResultsView', { finalBCOptions: bcOptions }); 
            }

    render() {
        return (
            <View style={styles.mainBackgroud}>
                {renderIf(this.state.loadButtons, 
                <View style={styles.wrapperBackground}>
                    <Text style={styles.questionStyle}>
                        {this.state.questionOptionPrompt}
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
                )}

                {renderIf(this.state.loadButtons === false, 
                <View style={styles.wrapperBackground}>
                    <Text style={styles.questionStyle}>
                        {this.state.questionOptionPrompt}
                    </Text> 

                    <View style={styles.resultsButtonBackground}>
                        <Button
                            backgroundColor='#903e32'
                            small
                            buttonStyle={styles.buttonResultStyle}
                            title={strings.View_Your_Results}
                            onPress={this.onPressResults}
                        />
                    </View>
                </View>
                )}
            </View>
        );
    }
}

export default QuestionsOptionsView;

const styles = StyleSheet.create({
    mainBackgroud: {
      flex: 1,
      backgroundColor: '#996633'
    },

    wrapperBackground: {
        flex: 1,
        backgroundColor: 'transparent'
      },

    questionStyle: {
        textAlign: 'center',
        color: '#fff',
        fontSize: moderateScale(16),
        marginBottom: scale(8),
        marginLeft: scale(8),
        marginRight: scale(8),
        height: verticalScale(343),
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

    buttonResultStyle: {
        height: verticalScale(80),
        width: moderateScale(320),
        borderRadius: 5,
        marginLeft: scale(8),
        marginRight: scale(8),
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

    resultsButtonBackground: {
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
