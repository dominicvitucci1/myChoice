import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
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
        frequency = [strings.Daily, strings.Weekly, strings.Monthly, strings.Every_Three_Months, strings.three_five_Years, strings.Ten_Years]; 
        }
    
    onSelectionsChange = (selectedFrequency) => {
        // selectedFrequency is array of { label, value }
        this.setState({ selectedFrequency });
        }

    render() {
        return (
            <View style={styles.mainBackgroud}>
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
                />

                <View style={styles.buttonBackground}>

                    <Button
                        backgroundColor='#903e32'
                        small
                        buttonStyle={styles.buttonNextStyle}
                        title={strings.Next}
                    />
                </View>
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
        position: 'absolute',
        bottom: scale(8)
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
      }
  });
