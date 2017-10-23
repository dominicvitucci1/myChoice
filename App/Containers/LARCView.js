import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { strings } from '../Utils/Strings';
import { scale, moderateScale, verticalScale } from '../Utils/scaling';

class LARCView extends Component {

    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#CCCC66',
            }
      };

      constructor(props) {
        super(props);

        this.state = { questionPrompt: strings.Do_you_know_there_are_long_acting_reversible_contraceptives };
      }

      componentWillMount= () => {
        }

        onPressYes= () => {
            if (this.state.questionPrompt === strings.Do_you_know_there_are_long_acting_reversible_contraceptives) {
                this.setState({ questionPrompt: strings.do_you_want_to_know_more_about_them });
                } else if (this.state.questionPrompt === strings.do_you_want_to_know_more_about_them) {
                    const { navigate } = this.props.navigation;
                    navigate('DetailView', { ID: 11,
                        Name: strings.long_acting_reversible_contraceptives_larc,
                        imageURI: 'https://firebasestorage.googleapis.com/v0/b/mychoice-f9186.appspot.com/o/Hormone%20IUD-min.png?alt=media&token=4139fea0-df4e-44c9-b550-aefca38af76b',
                        QuestionSet:
                        [
                        {
                        title: strings.what_is_it,
                        content: strings.an_iud_is_a_small_soft_flexible_t_shaped_device_that_is_wrapped_in_copper_or_contains_hormones_a_hea,
                            },
                        {
                        title: strings.there_are_two_types_of_iuds,
                        content: strings.IUD_Description,
                            },
                        {
                        title: strings.what_can_i_expect_when_the_iud_is_inserted,
                        content: strings.putting_in_an_iud_only_takes_a_few_minutes_and_can_be_done_in_the_health_care_provider_s_office_when,
                            },
                        {
                        title: strings.are_there_advantages_in_using_an_iud,
                        content: strings.an_iud_is_very_good_in_preventing_pregnancy_for_a_long_period_of_time_having_an_iud_is_easy_as_you_d,
                            },
                        {
                        title: strings.are_there_disadvantages_in_using_an_iud,
                        content: strings.it_may_cost_more_but_the_costs_may_be_reduced_or_free_at_a_community_clinic_or_if_you_have_health_in,
                            },
                        {
                        title: strings.how_do_i_get_an_iud,
                        content: strings.a_health_care_provider_puts_it_into_your_uterus_during_an_office_visit_after_it_is_put_in_you_only_n,
                            },
                        {
                        title: strings.what_is_the_possibility_of_getting_pregnant_while_having_an_iud,
                        content: strings.using_an_iud_is_one_of_the_best_methods_of_birth_control_out_of_100_women_who_use_this_method_less_t,
                            },
            
                        ],
                        loadButtons: true });
                }
            }
    
        onPressNo= () => {
            if (this.state.questionPrompt === strings.Do_you_know_there_are_long_acting_reversible_contraceptives) {
                this.setState({ questionPrompt: strings.do_you_want_to_know_more_about_them });
                } else if (this.state.questionPrompt === strings.do_you_want_to_know_more_about_them) {
                const { navigate } = this.props.navigation;
                navigate('QuestionsView');
                }
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
        fontSize: moderateScale(20),
        marginBottom: scale(8),
        marginLeft: scale(8),
        marginRight: scale(8),
        height: verticalScale(75),
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
