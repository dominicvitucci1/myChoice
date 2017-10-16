import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { strings } from '../Utils/Strings';
import { scale, moderateScale, verticalScale } from '../Utils/scaling';


class Disclaimer extends Component {

    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#CCCC66',
            }
      };

    render() {
        return (
            <View style={styles.mainBackgroud}>
                <ScrollView tyle={styles.scrollStyle}>
                    <Text style={styles.titleStyle}>
                        { strings.Disclaimer }
                    </Text> 
                    <Text style={styles.disclaimerStyle}>
                        { strings.this_application_app_does_not_provide_specific_medical_advice_and_does_not_endorse_any_medical_or_pr }
                    </Text>
                </ScrollView>
            </View>
            
        );
    }
}

export default Disclaimer;

const styles = StyleSheet.create({
    mainBackgroud: {
      flex: 1,
      backgroundColor: '#996633'
    },

    titleStyle: {
        textAlign: 'center',
        color: '#fff',
        fontSize: moderateScale(32),
        marginBottom: scale(15),
        marginLeft: scale(8),
        marginRight: scale(8)
    },

    disclaimerStyle: {
        textAlign: 'center',
        color: '#fff',
        fontSize: moderateScale(18),
        marginBottom: scale(8),
        marginLeft: scale(8),
        marginRight: scale(8)
    },

    scrollStyle: {
        flex: 1,
        padding: scale(8)
    }
  });
