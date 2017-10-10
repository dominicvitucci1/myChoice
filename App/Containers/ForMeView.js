import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


class ForMeView extends Component {

    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#CCCC66',
            }
      };

    render() {
        return (
            <View style={styles.mainBackgroud}>
                <Text style={styles.titleStyle}>
                    For Me View
                </Text> 
            </View>
        );
    }
}

export default ForMeView;

const styles = StyleSheet.create({
    mainBackgroud: {
      flex: 1,
      backgroundColor: '#996633'
    },

    disclaimerStyle: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 18,
        marginBottom: 8,
        marginLeft: 8,
        marginRight: 8
    }
  });
