import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert, AsyncStorage } from 'react-native';
import { Button } from 'react-native-elements';
import SelectMultiple from 'react-native-select-multiple';
import { strings } from '../Utils/Strings';
import { scale, moderateScale, verticalScale } from '../Utils/scaling';

let medExclusionQuestions = [];
let frequency = [];

class QuestionsMedView extends Component {

    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#CCCC66',
            }
      };

    constructor(props) {
    super(props);
    frequency = this.props.navigation.state.params.options;
    }

    state = { selectedExclusions: [], medPrompt: strings.Please_check_all_that_apply_If_none_of_these_apply_to_you_press_Next }

    componentWillMount= () => {
        medExclusionQuestions = [strings.Did_you_have_a_baby_less_than_1_month_ago_and_you_are_breastfeeding_the_baby, strings.Did_you_have_a_baby_less_than_3_weeks_ago, strings.Are_you_older_than_35_and_smoke, strings.Are_you_older_than_35_years_old_and_also_have_migraine_headaches, strings.Do_you_have_a_history_of_a_blood_clot_in_the_lungs_or_legs, strings.Have_you_had_recent_surgery_where_you_needed_to_stay_in_bed]; 
        }
    
    onSelectionsChange = (selectedExclusions) => {
        // selectedFrequency is array of { label, value }
        this.setState({ selectedExclusions });
        }

    onPressNext= () => {
        if (this.state.selectedExclusions.length > 0) {
            // try {
            //     const value = await AsyncStorage.getItem('selectedFrequency');
            //     if (value !== null) {
            //     const obj = JSON.parse(value);
            //     const result = Object.keys(obj).map((key) => [obj[key]]); 

            //       console.log(result);
            //       const selectedFrequency = JSON.parse(value);

            //       for (let j = 0; j < result.length; j++) {
            //         if (result[j][j].value === 'Daily') {
            //             result[j][j].splice(j, 1);
            //          } else {
            //             console.log(result);                     
            //         }   
            //      }
            //     }
            //   } catch (error) {
            //     // Error retrieving data
            //     Alert.alert(
            //         error,
            //         'Sorry, there was an error',
            //         [
            //         { text: strings.Okay, style: 'cancel' },
            //         ]
            //     );
            //     }
            for (let j = 0; j < frequency.length; j++) {
                if (frequency[j].value === 'Daily') {
                    delete frequency[j];
                } else if (frequency[j].value === 'Weekly') {
                    delete frequency[j];
                } else if (frequency[j].value === 'Monthly') {
                    delete frequency[j];
                } else if (frequency[j].value === '3 Months') {
                    delete frequency[j];
                } else if (frequency[j].value === '5 Years') {
                    delete frequency[j];
                } else {
                    frequency = frequency.filter(Boolean);
                    const { navigate } = this.props.navigation;
                    navigate('QuestionsOptionsView', { loadButtons: true, bcOptions: frequency }); 
                }
            }           
            } else if (medExclusionQuestions[0] === strings.Did_you_have_a_baby_less_than_1_month_ago_and_you_are_breastfeeding_the_baby) {
                this.setState({ medPrompt: strings.Please_check_all_that_apply_If_none_of_these_apply_to_you_press_Next });
                medExclusionQuestions = [strings.do_you_have_a_condition_that_causes_you_to_develop_blood_clots_more_easily, strings.do_you_have_kidney_disease_do_you_have_retinal_disease_of_the_eye, strings.have_you_had_diabetes_for_over_20_years, strings.do_you_have_any_disease_of_your_blood_vessels, strings.do_you_have_numbness_tingling_and_pain_in_your_hands_or_feet, strings.do_you_have_gallbladder_disease_and_have_not_had_your_gallbladder_removed];
            } else if (medExclusionQuestions[0] === strings.do_you_have_a_condition_that_causes_you_to_develop_blood_clots_more_easily) {
                this.setState({ medPrompt: strings.Please_check_all_that_apply_If_none_of_these_apply_to_you_press_Next });
                medExclusionQuestions = [strings.do_you_have_a_history_of_a_heart_attack_or_chest_pain_due_to_heart_disease, strings.have_you_ever_been_told_that_you_have_heart_disease_or_heart_failure];
            } else if (medExclusionQuestions[0] === strings.do_you_have_a_history_of_a_heart_attack_or_chest_pain_due_to_heart_disease) {
                this.setState({ medPrompt: strings.Please_check_all_that_apply_If_none_of_these_apply_to_you_press_Next });
                medExclusionQuestions = [strings.have_you_ever_had_a_stroke, strings.do_you_have_lupus_erythematosis_with_positive_antiphospholipid_antibodies, strings.do_you_have_migraine_headaches_do_you_have_warning_signs_before_you_have_the_migraine_headache, strings.have_you_ever_had_breast_cancer, strings.do_you_have_liver_disease_a_liver_tumor_or_liver_cancer, strings.have_you_ever_been_told_that_you_have_scarring_of_the_liver];
            } else if (medExclusionQuestions[0] === strings.have_you_ever_had_a_stroke) {
                frequency = frequency.filter(Boolean);                
                const { navigate } = this.props.navigation;
                navigate('QuestionsOptionsView', { loadButtons: true, bcOptions: frequency }); 
            }
    }

    render() {
        return (
            <View style={styles.mainBackgroud}>
                <ScrollView style={styles.scrollStyle} contentContainerStyle={styles.wrapper}>
                    <View style={styles.mainScrollBackgroud}>
                        <Text style={styles.questionStyle}>
                            {this.state.medPrompt}
                        </Text> 

                        <SelectMultiple
                            items={medExclusionQuestions}
                            selectedItems={this.state.selectedExclusions}
                            onSelectionsChange={this.onSelectionsChange}
                            rowStyle={styles.rowStyle}
                            labelStyle={styles.checkLabelStyle}
                            selectedCheckboxStyle={styles.selectedCheckStyle}
                            checkboxStyle={styles.checkboxStyle}
                            style={styles.multiStyle}
                        />

                        <View style={styles.buttonBackground}>

                            <Button
                                backgroundColor='#903e32'
                                small
                                buttonStyle={styles.buttonNextStyle}
                                title={strings.Next}
                                onPress={this.onPressNext}
                            />
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default QuestionsMedView;

const styles = StyleSheet.create({
    mainBackgroud: {
      flex: 1,
      backgroundColor: '#996633',
    },

    mainScrollBackgroud: {
        flex: 1,
      },

    questionStyle: {
        textAlign: 'center',
        color: '#fff',
        fontSize: moderateScale(20),
        marginBottom: scale(8),
        marginLeft: scale(8),
        marginRight: scale(8),
        height: verticalScale(75),
        width: moderateScale(343),
        alignSelf: 'center',        
    },

    buttonNextStyle: {
        height: verticalScale(80),
        width: moderateScale(320),
        borderRadius: 5,
        marginLeft: scale(8),
        marginRight: scale(8)
    },

    buttonBackground: {
        backgroundColor: 'transparent',
        alignSelf: 'center',
        marginLeft: scale(8),
        marginRight: scale(8),
        marginBottom: scale(16)
    },

    rowStyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        backgroundColor: 'transparent',
    },

    multiStyle: {
        marginBottom: scale(8)
    },

    checkboxStyle: {
        width: moderateScale(40),
        height: moderateScale(40),
        marginRight: 5
      },

      checkLabelStyle: {
        color: '#fff',
        fontSize: moderateScale(14),
        flexWrap: 'wrap',
        flexShrink: 1
                        
      }, 

      selectedCheckStyle: {
        tintColor: '#2dc937',
      }, 

      scrollStyle: {
        flex: 1,
        padding: scale(8),        
      },

      wrapper: {
        alignItems: 'center',
        flexGrow: 1
        
    },
  });
