import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { strings } from '../Utils/Strings';
import { scale, moderateScale, verticalScale } from '../Utils/scaling';
//import { data } from '../Utils/OptionsData';

class OptionsView extends Component {
    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#CCCC66',
            }
      };
      constructor(props) {
        super(props);
     
        this.state = { data: [
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
            },
        
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
            },
        
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
            },
        
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
            },
        
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
            },
        
            { key: strings.condom_male_and_female,
              id: 7, 
              imageURI: 'https://firebasestorage.googleapis.com/v0/b/mychoice-f9186.appspot.com/o/Condom-min.png?alt=media&token=2670b555-4126-49e9-9f64-9919345c244a',
              questionSet: [
                {
                title: strings.what_are_barrier_methods,
                content: strings.Barrier_Methods_Are,
                    },
                {
                title: strings.which_barrier_methods_protect_me_from_sexually_transmitted_infections_stis,
                content: strings.Male_or_female_condoms_are,
                    },
                {
                title: strings.how_do_i_get_a_barrier_method,
                content: strings.bought_at_drug_stores,
                    },
                {
                title: strings.are_there_advantages_in_using_barrier_methods,
                content: strings.protect_against_STDs,
                    },
                {
                title: strings.are_there_disadvantages_in_using_barrier_methods,
                content: strings.highest_pregnancy_rates,
                    },
                {
                title: strings.what_is_the_possibility_of_getting_pregnant_while_using_barrier_methods,
                content: strings.vary_in_their_ability,
                    },
    
            ]
            },
        
            { key: strings.Spermicide,
              id: 8,
              imageURI: 'https://firebasestorage.googleapis.com/v0/b/mychoice-f9186.appspot.com/o/Foam-min.png?alt=media&token=bc99feb4-c6ff-47ff-b47c-63b889887438',
              questionSet: [
                {
                    title: strings.what_are_barrier_methods,
                    content: strings.Barrier_Methods_Are,
                        },
                    {
                    title: strings.which_barrier_methods_protect_me_from_sexually_transmitted_infections_stis,
                    content: strings.Male_or_female_condoms_are,
                        },
                    {
                    title: strings.how_do_i_get_a_barrier_method,
                    content: strings.bought_at_drug_stores,
                        },
                    {
                    title: strings.are_there_advantages_in_using_barrier_methods,
                    content: strings.protect_against_STDs,
                        },
                    {
                    title: strings.are_there_disadvantages_in_using_barrier_methods,
                    content: strings.highest_pregnancy_rates,
                        },
                    {
                    title: strings.what_is_the_possibility_of_getting_pregnant_while_using_barrier_methods,
                    content: strings.vary_in_their_ability,
                        },
    
            ]
            },
        
            { key: strings.sponge_with_spermicide,
              id: 9,
              imageURI: 'https://firebasestorage.googleapis.com/v0/b/mychoice-f9186.appspot.com/o/Sponge-min.png?alt=media&token=a3504a30-e744-4d0e-a70b-c94564e4a6dd',
              questionSet: [
                {
                    title: strings.what_are_barrier_methods,
                    content: strings.Barrier_Methods_Are,
                        },
                    {
                    title: strings.which_barrier_methods_protect_me_from_sexually_transmitted_infections_stis,
                    content: strings.Male_or_female_condoms_are,
                        },
                    {
                    title: strings.how_do_i_get_a_barrier_method,
                    content: strings.bought_at_drug_stores,
                        },
                    {
                    title: strings.are_there_advantages_in_using_barrier_methods,
                    content: strings.protect_against_STDs,
                        },
                    {
                    title: strings.are_there_disadvantages_in_using_barrier_methods,
                    content: strings.highest_pregnancy_rates,
                        },
                    {
                    title: strings.what_is_the_possibility_of_getting_pregnant_while_using_barrier_methods,
                    content: strings.vary_in_their_ability,
                        },
    
            ]
            },
        
            { key: strings.emergency_contraception,
              id: 10,
              imageURI: 'https://firebasestorage.googleapis.com/v0/b/mychoice-f9186.appspot.com/o/Plan%20B-min.png?alt=media&token=aae868c1-4574-4c53-9da8-0f3f9136b6e8',
              questionSet: [
                {
                title: strings.what_is_emergency_birth_control,
                content: strings.emergency_birth_control_is_what_you_use_after_you_have_had_unprotected_sex_if_you_did_not_use_birth_,
                    },
                {
                title: strings.how_do_i_get_the_emergency_birth_control,
                content: strings.one_type_of_progestin_only_pill_plan_b_one_step_can_be_bought_at_a_pharmacy_without_a_prescription_t,
                    },
                {
                title: strings.if_you_do_use_emergency_birth_control_be_sure_to_follow_up_with_your_healthcare_provider_to_find_an_,
                content: strings.emergency_birth_control_does_not_protect_you_for_the_rest_of_your_cycle_regular_use_of_this_method_i,
                    },
                {
                title: strings.are_there_advantages_in_using_emergency_birth_control,
                content: strings.it_is_safe_and_effective_in_reducing_the_risk_of_pregnancy_after_unprotected_sex_it_is_available_at_,
                    },
                {
                title: strings.are_there_disadvantages_in_using_emergency_birth_control,
                content: strings.it_only_works_if_taken_within_5_days_of_unprotected_sex_but_works_best_if_used_within_3_days_but_eve,
                    },
                {
                title: strings.what_is_the_possibility_of_getting_pregnant_while_using_emergency_birth_control,
                content: strings.emergency_contraception_works_well_as_a_backup_plan_the_sooner_you_use_it_after_unprotected_sex_or_b,
                    },
    
            ]
            }
        ] };
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
      );
    }
        }

export default OptionsView;

const styles = StyleSheet.create({
    mainBackgroud: {
      flex: 1,
      backgroundColor: '#996633'
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
