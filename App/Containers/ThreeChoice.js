import React, { Component } from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import Swiper from 'react-native-swiper';
import { strings } from '../Utils/Strings';

let bubbleOptions = '';
let bubbleHS = '';
let bubbleForMe = '';

class ThreeChoice extends Component {

    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#CCCC66',
            }
      };

      onPressForMe= () => {
        const { navigate } = this.props.navigation;
        navigate('ForMeView');
      }

      onPressHighSchool= () => {
        const { navigate } = this.props.navigation;
        navigate('HighSchoolView');
      }

      onPressOptions= () => {
        const { navigate } = this.props.navigation;
        navigate('OptionsView');
      }

      componentWillMount= () => {
        if (strings.getLanguage() === 'en') {
                bubbleOptions = require('../../resources/Bubbles-Options.png');
                bubbleHS = require('../../resources/Bubbles-HS.png');
                bubbleForMe = require('../../resources/Bubbles-For-Me.png');
            } else {
                bubbleOptions = require('../../resources/Bubbles-Options-Span.png');
                bubbleHS = require('../../resources/Bubbles-HS-Span.png');
                bubbleForMe = require('../../resources/Bubbles-For-Me-Span.png');
            }
        }

    render() {
        return (

            <Swiper 
            style={styles.wrapper}
            showsButtons
            dot={
                <View
                    style={styles.dotStyle}
                />}
            activeDot={
                <View
                    style={styles.activeDotStyle}
                />}
            >
                <View style={styles.slide1}>
                    <TouchableHighlight onPress={this.onPressOptions}>
                                <Image
                                style={styles.button}
                                source={bubbleOptions}
                                />
                            </TouchableHighlight>
                        <Image
                        style={styles.modelImageStyle}
                        source={require('../../resources/mex.png')}
                        />
                </View>
                <View style={styles.slide2}>
                    <TouchableHighlight onPress={this.onPressHighSchool}>
                                <Image
                                style={styles.button}
                                source={bubbleHS}
                                />
                            </TouchableHighlight>
                        <Image
                        style={styles.modelImageStyle}
                        source={require('../../resources/Black.png')}
                        />
                </View>
                <View style={styles.slide3}>
                    <TouchableHighlight onPress={this.onPressForMe}>
                                <Image
                                style={styles.button}
                                source={bubbleForMe}
                                />
                            </TouchableHighlight>
                        <Image
                        style={styles.modelImageStyle}
                        source={require('../../resources/White.png')}
                        />
                </View>
            </Swiper>

        );
    }
}

export default ThreeChoice;

const styles = StyleSheet.create({
    mainBackgroud: {
      flex: 1,
      backgroundColor: '#996633'
    },

    modelImageStyle: {
        resizeMode: 'contain',
        alignSelf: 'center',
        justifyContent: 'center',
        flex: 1
    },
    titleViewStyle: {
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center'
    },

    button: {
        alignSelf: 'center',
        justifyContent: 'center',
        width: 200,
        height: 200,
    },

    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#996633'
        },
      slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#996633'
        },
      slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#996633',
      },

      dotStyle: {
        backgroundColor: 'rgba(255,255,255,.3)',
        width: 13,
        height: 13,
        borderRadius: 7,
        marginLeft: 7,
        marginRight: 7 
      },

      activeDotStyle: {
        backgroundColor: '#fff',
        width: 13,
        height: 13,
        borderRadius: 7,
        marginLeft: 7,
        marginRight: 7
      },

      buttonWrapperStyle: {
        backgroundColor: 'transparent',
        flexDirection: 'row',
        position: 'absolute',
        top: 0,
        left: 0,
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
      }
  });
