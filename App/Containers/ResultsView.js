import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert, FlatList, ScrollView } from 'react-native';
import { Button, ListItem } from 'react-native-elements';
import { strings } from '../Utils/Strings';
import { scale, moderateScale, verticalScale } from '../Utils/scaling';

let finalOptions = [];
const data = [];

class ResultsView extends Component {

    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#CCCC66',
            }
      };

        constructor(props) {
            super(props);
            finalOptions = this.props.navigation.state.params.finalBCOptions;

            for (let j = 0; j < finalOptions.length; j++) {
                if (finalOptions[j].value === 'Daily') {
                    data.push(
                        { key: strings.Pill,
                        id: 5,
                        imageURI: 'https://firebasestorage.googleapis.com/v0/b/mychoice-f9186.appspot.com/o/Pills-min.png?alt=media&token=00d28af9-bc24-4308-867e-cafbeb85de4f',
                        questionSet: [
                          {
                          title: strings.what_are_birth_control_pills,
                          content: strings.birth_control_pills_also_known_as_oral_contraceptives_or_combined_hormonal_contraceptives_have_two_h,
                              },
                          {
                          title: strings.are_there_advantages_to_taking_birth_control_pills,
                          content: strings.birth_control_pills_work_better_than_barrier_methods_such_as_condoms_alone_you_do_not_have_to_stop_s,
                              },
                          {
                          title: strings.are_there_disadvantages_to_taking_birth_control_pills,
                          content: strings.you_have_to_take_a_pill_at_the_same_time_every_day_to_prevent_pregnancy_the_pill_does_not_protect_ag,
                              },
                          {
                          title: strings.what_is_the_possibility_of_getting_pregnant_while_using_the_pill,
                          content: strings.using_the_pill_is_a_good_method_of_birth_control_if_used_correctly_out_of_100_women_who_use_this_met,
                              },
              
                      ]
                      },
                  
                      { key: strings.Mini_Pill, 
                        id: 6,
                        imageURI: 'https://firebasestorage.googleapis.com/v0/b/mychoice-f9186.appspot.com/o/Pills-min.png?alt=media&token=00d28af9-bc24-4308-867e-cafbeb85de4f',
                        questionSet: [
                          {
                          title: strings.what_are_mini_pills_09b88bc6e84bc1998a742b11c49a7a14,
                          content: strings.mini_pills_have_a_hormone_called_progestin_in_them_they_are_different_from_regular_combination_birth,
                              },
                          {
                          title: strings.are_there_advantages_in_taking_mini_pills,
                          content: strings.mini_pills_work_better_than_barrier_methods_such_as_condoms_mini_pills_may_cause_fewer_side_effects_,
                              },
                          {
                          title: strings.are_there_disadvantages_in_taking_mini_pills,
                          content: strings.mini_pills_do_not_protect_against_stds_such_as_hiv_the_virus_that_causes_aids_or_herpes_if_you_are_n,
                              },
                          {
                          title: strings.what_is_the_possibility_of_getting_pregnant_while_using_the_mini_pill,
                          content: strings.the_mini_pill_can_be_a_good_method_of_birth_control_if_used_correctly_out_of_100_women_who_use_this_,
                              },
              
                      ]
                      }
                    );
                } else if (finalOptions[j].value === 'Weekly') {
                    data.push(
                        { key: strings.Patch, 
                        id: 4, 
                        imageURI: 'https://firebasestorage.googleapis.com/v0/b/mychoice-f9186.appspot.com/o/Patch-min.png?alt=media&token=58b495df-3f07-4d39-99c3-d30b07e708bf',
                        questionSet: [
                          {
                          title: strings.what_is_the_patch,
                          content: strings.the_patch_called_ortho_evra_transdermal_system_or_xulane_generic_is_used_to_prevent_pregnancy_it_loo,
                              },
                          {
                          title: strings.how_do_i_get_it,
                          content: strings.your_healthcare_provider_prescribes_the_patch,
                              },
                          {
                          title: strings.are_there_advantages_in_using_the_patch,
                          content: strings.the_patch_is_better_in_preventing_pregnancy_than_barrier_methods_of_birth_control_such_as_the_condom,
                              },
                          {
                          title: strings.are_there_disadvantages_in_using_the_patch,
                          content: strings.the_patch_does_not_protect_against_stds_including_hiv_the_virus_that_causes_aids_or_herpes_if_you_ar,
                              },
                          {
                          title: strings.what_is_the_possibility_of_getting_pregnant_while_using_the_patch,
                          content: strings.the_patch_can_be_a_good_method_of_birth_control_if_used_correctly_out_of_100_women_who_use_the_patch,
                              },
              
                      ]
                      }
                    );
                } else if (finalOptions[j].value === 'Monthly') {
                    data.push(
                        { key: strings.vaginal_ring, 
                        id: 3,
                        imageURI: 'https://firebasestorage.googleapis.com/v0/b/mychoice-f9186.appspot.com/o/Ring-min.png?alt=media&token=8ab1c296-6b60-4de0-bb71-4b98c336a6ba',
                        questionSet: [
                          {
                          title: strings.what_is_the_ring_5e8c08169b53b95dec2eeec1c1e3e0c6,
                          content: strings.it_is_a_soft_plastic_ring_that_is_about_2_inches_around_it_is_also_called_nuvaring_you_put_into_your,
                              },
                          {
                          title: strings.are_there_advantages_in_using_the_ring,
                          content: strings.the_ring_is_better_at_preventing_pregnancy_than_barrier_methods_of_birth_control_such_as_the_condom_,
                              },
                          {
                          title: strings.are_there_disadvantages_in_using_the_ring,
                          content: strings.the_ring_does_not_protect_against_stds_such_as_hiv_the_virus_that_causes_aids_or_herpes_if_you_are_n,
                              },
                          {
                          title: strings.how_do_i_get_the_ring,
                          content: strings.your_healthcare_provider_prescribes_the_ring,
                              },
                          {
                          title: strings.what_is_the_possibility_of_getting_pregnant_while_using_the_ring,
                          content: strings.using_the_ring_can_be_a_good_method_of_birth_control_if_used_correctly_out_of_100_women_who_use_this,
                              },
                          {
                          title: strings.what_do_i_do_if_the_ring_falls_out,
                          content: strings.it_rarely_happens_but_if_the_ring_falls_out_and_stays_out_for_more_than_3_hours_you_need_to_use_anot
                              },
              
                      ]
                      }
                    );
                } else if (finalOptions[j].value === '3 Months') {
                    data.push(
                        { 
                        key: strings.birth_control_shot,
                        id: 2,
                        imageURI: 'https://firebasestorage.googleapis.com/v0/b/mychoice-f9186.appspot.com/o/Shot-min.png?alt=media&token=c11bec1c-1a5b-42b3-89d6-3d8cc1014c1e',
                        questionSet: [
                            {
                            title: strings.what_is_the_birth_control_shot_e0b24f8f630785451bcaf4010c83d119,
                            content: strings.the_birth_control_shot_depo_provera_or_depo_is_a_shot_of_the_hormone_progestin_progestin_works_in_3_,
                                },
                           
                            {
                            title: strings.are_there_advantages_in_using_the_birth_control_shot,
                            content: strings.the_shot_is_a_very_good_method_of_birth_control_it_is_simple_you_need_to_get_a_shot_only_once_every_,
                                },
                            {
                            title: strings.are_there_disadvantages_in_using_the_birth_control_shot,
                            content: strings.the_shot_does_not_protect_against_stds_including_hiv_the_virus_that_causes_aids_or_herpes_if_you_are,
                                },
                            {
                            title: strings.how_do_i_get_the_shot,
                            content: strings.the_shot_is_prescribed_by_a_healthcare_provider_and_given_by_a_nurse_into_muscle_of_your_arm_or_hip_,
                                },
                            {
                            title: strings.what_is_the_possibility_of_getting_pregnant_while_using_the_birth_control_shot,
                            content: strings.it_is_one_of_the_best_methods_of_birth_control_available_if_taken_correctly_you_must_get_the_shot_on,
                                },
                            {
                            title: strings.what_do_i_do_if_i_am_late_getting_my_shot,
                            content: strings.when_late_for_your_shot_you_must_use_another_birth_control_method_such_as_condoms_and_a_spermicide_o,
                                },
                
                        ]
                    }
                );
                } else if (finalOptions[j].value === '5 Years') {
                    data.push(
                        { 
                        key: strings.Implant,
                        id: 1,
                        imageURI: 'https://firebasestorage.googleapis.com/v0/b/mychoice-f9186.appspot.com/o/Implant-min.png?alt=media&token=49456ba3-9ce5-42e7-82c8-702532b8b432',
                        questionSet: [
                            {
                            title: strings.what_is_it,
                            content: strings.an_implant_called_nexplanon_is_a_thin_rod_about_the_size_of_a_match_that_has_a_hormone_called_proges,
                                },
                            {
        
                            title: strings.are_there_advantages_in_using_an_implant,
                            content: strings.it_is_very_good_in_preventing_pregnancy_for_a_long_time_up_to_3_years_using_an_implant_is_easy_as_yo,
                                },
                            {
                            title: strings.are_there_disadvantages_in_using_an_implant,
                            content: strings.the_implant_does_not_protect_against_stds_including_hiv_the_virus_that_causes_aids_or_herpes_if_you_,
                                },
        
                            {
                            title: strings.what_is_the_possibility_of_getting_pregnant_while_having_an_implant,
                            content: strings.an_implant_is_a_very_good_method_of_birth_control_out_of_100_women_who_use_this_method_less_than_1_m,
                                },
                
                        ]
                    },

                    { key: strings.intrauterine_device,
                        id: 0,
                        imageURI: 'https://firebasestorage.googleapis.com/v0/b/mychoice-f9186.appspot.com/o/Hormone%20IUD-min.png?alt=media&token=4139fea0-df4e-44c9-b550-aefca38af76b',
                        questionSet: [
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
                  
                          ]
                      }
                );
                } else if (finalOptions[j].value === '10 Years') {
                    data.push(
                    { key: strings.long_acting_reversible_contraceptives_larc,
                        id: 11,                        
                        imageURI: 'https://firebasestorage.googleapis.com/v0/b/mychoice-f9186.appspot.com/o/Hormone%20IUD-min.png?alt=media&token=4139fea0-df4e-44c9-b550-aefca38af76b',
                        questionSet: [
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
            
                        ]
                    }
                );
                } else {
                    Alert.alert(
                        strings.there_were_no_birth_control_options_that_matched_your_preferences_please_reconsider_some_of_your_pre,
                        strings.press_ok_to_change_some_of_your_preferences_or_press_cancel_to_exit_the_app,
                        [
                          { text: strings.Okay, onPress: () => this.onPressOkay() },
                          { text: strings.Cancel, onPress: () => this.onPressCancel() }
                        ]
                      );
                }
            }           
            }

        state = { questionOptionPrompt: strings.Your_best_forms_of_birth_control_are };

        componentWillMount= () => {
            this.setState({ data });
            console.log(data);
            }

        onPressYes= () => {
            const { navigate } = this.props.navigation;                
            navigate('EmailView', { emailOptions: data });
        }
    
        onPressNo= () => {
            Alert.alert(
                strings.there_were_no_birth_control_options_that_matched_your_preferences_please_reconsider_some_of_your_pre,
                strings.press_ok_to_change_some_of_your_preferences_or_press_cancel_to_exit_the_app,
                [
                  { text: strings.Okay, onPress: () => this.onPressOkay() },
                  { text: strings.Cancel, onPress: () => this.onPressCancel() }
                ]
              );
        }

        onPressOkay= () => {

        }

        onPressCancel= () => {
            
        }

        onPressItem= (id, key, uri, questions) => {
            const { navigate } = this.props.navigation;
            navigate('DetailView', { ID: id, Name: key, imageURI: uri, QuestionSet: questions });
        }
    
        renderSeparator = () => (
              <View
                style={{
                  height: 1,
                  width: '100%',
                  backgroundColor: '#CED0CE'
                }}
              />
            );

    render() {
        return (
            <View style={styles.mainBackgroud}>
                <ScrollView style={styles.scrollStyle} contentContainerStyle={styles.wrapper}>
                    <View style={styles.mainScrollBackgroud}>
                        <Text style={styles.questionStyle}>
                            {this.state.questionOptionPrompt}
                        </Text> 
                        <View style={styles.wrapperBackground}>
                        <FlatList
                            data={this.state.data}
                            renderItem={({ item }) => (
                            <ListItem
                                title={`${item.key}`}
                                titleStyle={styles.titleTextStyle}
                                containerStyle={styles.listItemStyle}
                                onPress={() => this.onPressItem(item.id, item.key, item.imageURI, item.questionSet)}
                            />
                            )}
                            keyExtractor={item => item.key}
                            ItemSeparatorComponent={this.renderSeparator}
                        />
                        </View>

                        <Text style={styles.resultsQuestionStyle}>
                            {strings.Would_you_like_your_results_via_email}
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
                </ScrollView>
                </View>
        );
    }
}

export default ResultsView;

const styles = StyleSheet.create({
    mainBackgroud: {
      flex: 1,
      backgroundColor: '#996633'
    },

    mainScrollBackgroud: {
        flex: 1,
      },

      scrollStyle: {
        flex: 1,
        padding: scale(8),        
      },

      wrapper: {
        alignItems: 'center',
        flexGrow: 1,        
    },

    wrapperBackground: {
        flex: 1,
        marginLeft: scale(16),
        marginRight: scale(16),
    },

    questionStyle: {
        textAlign: 'center',
        color: '#fff',
        fontSize: moderateScale(20),
        marginLeft: scale(8),
        marginRight: scale(8),
        height: verticalScale(75),
        width: moderateScale(343),
        alignSelf: 'center'
    },

    resultsQuestionStyle: {
        textAlign: 'center',
        color: '#fff',
        fontSize: moderateScale(18),
        //marginBottom: scale(8),
        marginLeft: scale(8),
        marginRight: scale(8),
        height: verticalScale(45),
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
        marginBottom: scale(16),        
        // position: 'absolute',
        // bottom: scale(8)
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

    titleTextStyle: {
        color: '#fff',
        fontSize: moderateScale(18),
    },

    listItemStyle: {
        height: verticalScale(70),
        borderBottomWidth: 0
    }
  });
