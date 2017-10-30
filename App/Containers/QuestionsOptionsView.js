import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { strings } from '../Utils/Strings';
import renderIf from '../Utils/renderif';
import { scale, moderateScale, verticalScale } from '../Utils/scaling';

let bcOptions = [];

class QuestionsOptionsView extends Component {

    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#CCCC66',
            }
      };

        constructor(props) {
            super(props);
            bcOptions = this.props.navigation.state.params.bcOptions;
            }

        state = { questionOptionPrompt: strings.are_you_taking_any_of_these_medications_that_are_used_for_tuberculosis_tb_or_seizures };

        componentWillMount= () => {
            this.setState({ loadButtons: this.props.navigation.state.params.loadButtons });            
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
                } else if (this.state.questionOptionPrompt === strings.would_you_remember_to_take_a_pill_at_the_same_time_everyday) {
                    this.setState({ questionOptionPrompt: strings.have_you_had_weight_reduction_surgery_that_shortens_the_length_of_your_small_intestine });
                } else if (this.state.questionOptionPrompt === strings.have_you_had_weight_reduction_surgery_that_shortens_the_length_of_your_small_intestine) {
                    this.setState({ questionOptionPrompt: strings.do_you_have_sensitive_skin_with_adhesives_such_as_tape });
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
                } else if (this.state.questionOptionPrompt === strings.would_you_be_willing_to_put_your_fingers_inside_your_vagina_to_insert_your_birth_control) {
                    this.setState({ questionOptionPrompt: strings.would_you_it_bother_you_to_get_an_injection_shot_every_3_months });
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
                }
            }
    
        onPressNo= () => {
            if (this.state.questionOptionPrompt === strings.are_you_taking_any_of_these_medications_that_are_used_for_tuberculosis_tb_or_seizures) {
                this.setState({ questionOptionPrompt: strings.would_you_remember_to_take_a_pill_at_the_same_time_everyday });
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
                } else if (this.state.questionOptionPrompt === strings.have_you_had_weight_reduction_surgery_that_shortens_the_length_of_your_small_intestine) {
                    this.setState({ questionOptionPrompt: strings.do_you_have_sensitive_skin_with_adhesives_such_as_tape });
                } else if (this.state.questionOptionPrompt === strings.do_you_have_sensitive_skin_with_adhesives_such_as_tape) {
                    this.setState({ questionOptionPrompt: strings.would_you_be_willing_to_put_your_fingers_inside_your_vagina_to_insert_your_birth_control });
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
                } else if (this.state.questionOptionPrompt === strings.would_you_it_bother_you_to_get_an_injection_shot_every_3_months) {
                    this.setState({ questionOptionPrompt: strings.would_it_bother_you_to_have_an_implant_put_just_under_your_skin });
                } else if (this.state.questionOptionPrompt === strings.would_it_bother_you_to_have_an_implant_put_just_under_your_skin) {
                    this.setState({ questionOptionPrompt: strings.are_you_being_treated_for_any_sexually_transmitted_infections_stis_do_you_have_a_lot_of_vaginal_blee });
                } else if (this.state.questionOptionPrompt === strings.are_you_being_treated_for_any_sexually_transmitted_infections_stis_do_you_have_a_lot_of_vaginal_blee) {
                    this.setState({ questionOptionPrompt: strings.would_you_be_opposed_to_having_some_side_effects_such_as_spotting_during_the_initial_few_months_afte });
                } else if (this.state.questionOptionPrompt === strings.would_you_be_opposed_to_having_some_side_effects_such_as_spotting_during_the_initial_few_months_afte) {
                    //show results button
                    console.log(bcOptions);
                    this.setState({ questionOptionPrompt: strings.View_Your_Results });                    
                    this.setState({ loadButtons: false });
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
        fontSize: moderateScale(20),
        marginBottom: scale(8),
        marginLeft: scale(8),
        marginRight: scale(8),
        height: verticalScale(343),
        width: moderateScale(343)
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
