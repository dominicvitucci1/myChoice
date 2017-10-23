import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { strings } from '../Utils/Strings';
import { scale, moderateScale, verticalScale } from '../Utils/scaling';

class ForMeView extends Component {

    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#CCCC66',
            }
      };

    onPressYes= () => {
        const { navigate } = this.props.navigation;
        navigate('QuestionsView');
        }

    onPressNo= () => {
        const { navigate } = this.props.navigation;
        navigate('LARCView');
        }
    

    render() {
        return (
            <View style={styles.mainBackgroud}>
                <Text style={styles.questionStyle}>
                    {strings.Are_you_planning_to_get_pregnant_within_the_next_1_3_years}
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

export default ForMeView;

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
