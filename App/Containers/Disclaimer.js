import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { strings } from '../Utils/Strings';


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
        fontSize: 32,
        marginBottom: 15,
        marginLeft: 8,
        marginRight: 8
    },

    disclaimerStyle: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 18,
        marginBottom: 8,
        marginLeft: 8,
        marginRight: 8
    },

    scrollStyle: {
        flex: 1,
        padding: 8
    }
  });
