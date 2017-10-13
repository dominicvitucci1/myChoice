import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { strings } from '../Utils/Strings';


class HighSchoolView extends Component {

    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#CCCC66',
            }
      };

    render() {
        return (
            <View style={styles.mainBackgroud}>
                <ScrollView style={styles.scrollStyle}>
                    <Text style={styles.titleStyle}>
                        { strings.HS_Question }
                    </Text> 
                    <Text style={styles.titleStyle}>
                        { strings.thinking_about_having_sex_you_may_feel_curious_interested_or_even_pressured_how_do_you_know_what_is_ }
                    </Text>
                </ScrollView>
            </View>
            
        );
    }
}

export default HighSchoolView;

const styles = StyleSheet.create({
    mainBackgroud: {
      flex: 1,
      backgroundColor: '#996633'
    },

    titleStyle: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 18,
        paddingTop: 10,
        paddingBottom: 8
    },

    bodyStyle: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 14,
    },

    scrollStyle: {
        flex: 1,
        padding: 8
    }
  });