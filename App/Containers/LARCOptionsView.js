import React, { Component } from 'react';
import { View, StyleSheet, FlatList, ScrollView, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import Accordion from 'react-native-collapsible/Accordion';
import { strings } from '../Utils/Strings';
import { scale, moderateScale, verticalScale } from '../Utils/scaling';
//import { data } from '../Utils/OptionsData';

let LARCQuestions = [];
let titleLabelLARC = '';

class LARCOptionsView extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#CCCC66'
    }
  };
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          key: strings.intrauterine_device,
          id: 11,
          imageURI:
            'https://firebasestorage.googleapis.com/v0/b/mychoice-f9186.appspot.com/o/Hormone%20IUD-min.png?alt=media&token=4139fea0-df4e-44c9-b550-aefca38af76b',
          questionSet: [
            {
              title: strings.what_is_it,
              content:
                strings.an_iud_is_a_small_soft_flexible_t_shaped_device_that_is_wrapped_in_copper_or_contains_hormones_a_hea
            },
            {
              title: strings.there_are_two_types_of_iuds,
              content: strings.IUD_Description
            },
            {
              title: strings.what_can_i_expect_when_the_iud_is_inserted,
              content:
                strings.putting_in_an_iud_only_takes_a_few_minutes_and_can_be_done_in_the_health_care_provider_s_office_when
            },
            {
              title: strings.are_there_advantages_in_using_an_iud,
              content:
                strings.an_iud_is_very_good_in_preventing_pregnancy_for_a_long_period_of_time_having_an_iud_is_easy_as_you_d
            },
            {
              title: strings.are_there_disadvantages_in_using_an_iud,
              content:
                strings.it_may_cost_more_but_the_costs_may_be_reduced_or_free_at_a_community_clinic_or_if_you_have_health_in
            },
            {
              title: strings.how_do_i_get_an_iud,
              content:
                strings.a_health_care_provider_puts_it_into_your_uterus_during_an_office_visit_after_it_is_put_in_you_only_n
            },
            {
              title: strings.what_is_the_possibility_of_getting_pregnant_while_having_an_iud,
              content:
                strings.using_an_iud_is_one_of_the_best_methods_of_birth_control_out_of_100_women_who_use_this_method_less_t
            }
          ],
          loadButtons: true
        },

        {
          key: strings.Implant,
          id: 1,
          imageURI:
            'https://firebasestorage.googleapis.com/v0/b/mychoice-f9186.appspot.com/o/Implant-min.png?alt=media&token=49456ba3-9ce5-42e7-82c8-702532b8b432',
          questionSet: [
            {
              title: strings.what_is_it,
              content:
                strings.an_implant_called_nexplanon_is_a_thin_rod_about_the_size_of_a_match_that_has_a_hormone_called_proges
            },
            {
              title: strings.are_there_advantages_in_using_an_implant,
              content:
                strings.it_is_very_good_in_preventing_pregnancy_for_a_long_time_up_to_3_years_using_an_implant_is_easy_as_yo
            },
            {
              title: strings.are_there_disadvantages_in_using_an_implant,
              content:
                strings.the_implant_does_not_protect_against_stds_including_hiv_the_virus_that_causes_aids_or_herpes_if_you_
            },

            {
              title: strings.what_is_the_possibility_of_getting_pregnant_while_having_an_implant,
              content:
                strings.an_implant_is_a_very_good_method_of_birth_control_out_of_100_women_who_use_this_method_less_than_1_m
            }
          ],
          loadButtons: true
        }
      ]
    };
  }

  componentWillMount = () => {
    titleLabelLARC = strings.long_acting_reversible_contraceptives_larc;

    LARCQuestions = [
      {
        title: strings.what_are_LARC,
        content:
          strings.long_acting_reversible_contraceptives_larc_or_long_acting_reversible_birth_control_are_methods_of_bi
      },
      {
        title: strings.advantages_of_LARCs,
        content: strings.long_acting_reversible_contraceptives_larc_advantage
      }
    ];
  };

  onPressItem = (id, key, uri, questions, loadButtons) => {
    const { navigate } = this.props.navigation;
    navigate('DetailView', {
      ID: id,
      Name: key,
      imageURI: uri,
      QuestionSet: questions,
      loadButtons
    });
  };

  _renderHeader(section) {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{section.title}</Text>
      </View>
    );
  }

  _renderContent(section) {
    return (
      <View style={styles.content}>
        <Text style={styles.contentText}>{section.content}</Text>
      </View>
    );
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
            <Text style={styles.titleStyle}>{titleLabelLARC}</Text>

            <Accordion
              sections={LARCQuestions}
              renderHeader={this._renderHeader}
              renderContent={this._renderContent}
            />

            <View style={{ height: 30 }} />

            <Text style={styles.calloutTextStyle}>{strings.tap_below_to_learn_more}</Text>

            <View style={styles.wrapperBackground}>
              <FlatList
                data={this.state.data}
                renderItem={({ item }) => (
                  <ListItem
                    title={`${item.key}`}
                    titleStyle={styles.titleTextStyle}
                    containerStyle={styles.listItemStyle}
                    onPress={() =>
                      this.onPressItem(
                        item.id,
                        item.key,
                        item.imageURI,
                        item.questionSet,
                        item.loadButtons
                      )
                    }
                  />
                )}
                keyExtractor={item => item.key}
                ItemSeparatorComponent={this.renderSeparator}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default LARCOptionsView;

const styles = StyleSheet.create({
  mainBackgroud: {
    flex: 1,
    backgroundColor: '#996633'
  },

  titleTextStyle: {
    color: '#fff',
    fontSize: moderateScale(18)
  },

  calloutTextStyle: {
    color: '#fff',
    fontSize: moderateScale(20),
    textAlign: 'center',
    marginTop: scale(8),
    marginLeft: scale(8),
    marginRight: scale(8),
    marginBottom: scale(16)
  },

  listItemStyle: {
    height: verticalScale(70),
    borderBottomWidth: 0
  },

  titleStyle: {
    textAlign: 'center',
    color: '#fff',
    fontSize: moderateScale(32),
    marginTop: scale(8),
    marginLeft: scale(8),
    marginRight: scale(8),
    marginBottom: scale(16)
  },

  scrollStyle: {
    flex: 1,
    padding: scale(8),
    marginBottom: scale(8)
  },

  wrapper: {
    alignItems: 'center'
  },

  content: {
    padding: scale(20),
    borderColor: 'white',
    borderWidth: 1
  },

  contentText: {
    textAlign: 'left',
    fontSize: moderateScale(16),
    color: 'white'
  },

  header: {
    padding: scale(10),
    borderColor: 'white',
    borderWidth: 1
  },

  headerText: {
    textAlign: 'left',
    fontSize: moderateScale(16),
    fontWeight: '500',
    color: 'white'
  },

  questionStyle: {
    textAlign: 'center',
    color: '#fff',
    fontSize: moderateScale(16),
    marginTop: scale(8),
    marginLeft: scale(8),
    marginRight: scale(8),
    marginBottom: scale(8)
  },

  wrapperBackground: {
    flex: 1,
    marginLeft: scale(16),
    marginRight: scale(16)
  },

  mainScrollBackgroud: {
    flex: 1
  }
});
