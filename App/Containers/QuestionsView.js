import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert, ScrollView, AsyncStorage } from 'react-native';
import { Button } from 'react-native-elements';
import SelectMultiple from 'react-native-select-multiple';
import { strings } from '../Utils/Strings';
import { scale, moderateScale, verticalScale } from '../Utils/scaling';

let frequency = [];

class QuestionsView extends Component {

    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#CCCC66',
            }
      };

    state = { selectedFrequency: [] }

    componentWillMount= () => {
        frequency = [{ label: strings.Daily, value: 'Daily' }, { label: strings.Weekly, value: 'Weekly' }, { label: strings.Monthly, value: 'Monthly' }, { label: strings.Every_Three_Months, value: '3 Months' }, { label: strings.three_five_Years, value: '5 Years' }, { label: strings.Ten_Years, value: '10 Years' }]; 
        }

    onPressNext= () => {
        if (this.state.selectedFrequency.length > 0) {
            // const selectedFrequency = this.state.selectedFrequency;
            // try {
            //     await AsyncStorage.setItem('selectedFrequency', JSON.stringify(selectedFrequency));
            //   } catch (error) {
            //     // Error saving data
            //   }

            const { navigate } = this.props.navigation;
            navigate('QuestionsMedView', { options: this.state.selectedFrequency });
        } else {
            Alert.alert(
                strings.Select_At_Least_One_Option,
                '',
                [
                  { text: strings.Okay, style: 'cancel' },
                ]
              );
            }
        }
    
    onSelectionsChange = (selectedFrequency) => {
        // selectedFrequency is array of { label, value }
        this.setState({ selectedFrequency });
        }

    render() {
        return (
            <View style={styles.mainBackgroud}>
                <ScrollView style={styles.scrollStyle} contentContainerStyle={styles.wrapper}>
                    <View style={styles.mainScrollBackgroud}>
                        <Text style={styles.questionStyle}>
                            {strings.How_often_would_you_like_to_take_receive_your_birth_control_select_all_that_apply}
                        </Text> 

                        <SelectMultiple
                            items={frequency}
                            selectedItems={this.state.selectedFrequency}
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

export default QuestionsView;

const styles = StyleSheet.create({
    mainBackgroud: {
      flex: 1,
      backgroundColor: '#996633'
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
        flexDirection: 'row',
        justifyContent: 'space-between',
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
        backgroundColor: 'transparent'
    },

    checkboxStyle: {
        width: moderateScale(40),
        height: moderateScale(40),
        marginRight: 5
      },

      checkLabelStyle: {
        color: '#fff',
        fontSize: moderateScale(14)
      }, 

      selectedCheckStyle: {
        tintColor: '#2dc937',
      },

      multiStyle: {
        marginBottom: scale(8)
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
