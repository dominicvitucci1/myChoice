import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import Image from 'react-native-image-progress';
import ProgressBar from 'react-native-progress/Bar';
import { scale, moderateScale, verticalScale } from '../Utils/scaling';


let Questions = [];
let titleLabel = '';
let imageURI = '';

class DetailView extends Component {
    
        static navigationOptions = {
            headerStyle: {
                backgroundColor: '#CCCC66',
                }
          };

          componentWillMount= () => {
                if (this.props.navigation.state.params.ID === 0) {
                    titleLabel = this.props.navigation.state.params.Name;
                    imageURI = this.props.navigation.state.params.imageURI;
                    Questions = this.props.navigation.state.params.QuestionSet;
                } else if (this.props.navigation.state.params.ID === 1) {
                titleLabel = this.props.navigation.state.params.Name;
                imageURI = this.props.navigation.state.params.imageURI;
                Questions = this.props.navigation.state.params.QuestionSet;
                } else if (this.props.navigation.state.params.ID === 2) {
                    titleLabel = this.props.navigation.state.params.Name;
                    imageURI = this.props.navigation.state.params.imageURI;
                    Questions = this.props.navigation.state.params.QuestionSet;
                } else if (this.props.navigation.state.params.ID === 3) {
                    titleLabel = this.props.navigation.state.params.Name;
                    imageURI = this.props.navigation.state.params.imageURI;
                    Questions = this.props.navigation.state.params.QuestionSet;
                } else if (this.props.navigation.state.params.ID === 4) {
                    titleLabel = this.props.navigation.state.params.Name;
                    imageURI = this.props.navigation.state.params.imageURI;
                    Questions = this.props.navigation.state.params.QuestionSet;
                } else if (this.props.navigation.state.params.ID === 5) {
                    titleLabel = this.props.navigation.state.params.Name;
                    imageURI = this.props.navigation.state.params.imageURI;
                    Questions = this.props.navigation.state.params.QuestionSet;
                } else if (this.props.navigation.state.params.ID === 6) {
                    titleLabel = this.props.navigation.state.params.Name;
                    imageURI = this.props.navigation.state.params.imageURI;
                    Questions = this.props.navigation.state.params.QuestionSet;
                } else if (this.props.navigation.state.params.ID === 7) {
                    titleLabel = this.props.navigation.state.params.Name;
                    imageURI = this.props.navigation.state.params.imageURI;
                    Questions = this.props.navigation.state.params.QuestionSet;
                } else if (this.props.navigation.state.params.ID === 8) {
                    titleLabel = this.props.navigation.state.params.Name;
                    imageURI = this.props.navigation.state.params.imageURI;
                    Questions = this.props.navigation.state.params.QuestionSet;
                } else if (this.props.navigation.state.params.ID === 9) {
                    titleLabel = this.props.navigation.state.params.Name;
                    imageURI = this.props.navigation.state.params.imageURI;
                    Questions = this.props.navigation.state.params.QuestionSet;
                } else if (this.props.navigation.state.params.ID === 10) {
                    titleLabel = this.props.navigation.state.params.Name;
                    imageURI = this.props.navigation.state.params.imageURI;
                    Questions = this.props.navigation.state.params.QuestionSet;
                }
            }

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
    
        render() {
            return (
                <View style={styles.mainBackgroud}>
                    <ScrollView style={styles.scrollStyle} contentContainerStyle={styles.wrapper}>
                        <Text style={styles.titleStyle}>
                            {titleLabel}
                        </Text>

                        <Image
                            style={styles.imageStyle}
                            source={{ uri: imageURI }}
                            indicator={ProgressBar}
                        />

                        <Accordion
                            sections={Questions}
                            renderHeader={this._renderHeader}
                            renderContent={this._renderContent}
                        />
                    </ScrollView>
                </View>
                
            );
        }
    }
    
    export default DetailView;
    
    const styles = StyleSheet.create({
        mainBackgroud: {
          flex: 1,
          backgroundColor: '#996633',
          alignItems: 'center'
        },
    
        titleStyle: {
            textAlign: 'center',
            color: '#fff',
            fontSize: moderateScale(32),
            marginTop: scale(8),
            marginLeft: scale(8),
            marginRight: scale(8),
            marginBottom: scale(8)
        },

        imageStyle: {
            width: moderateScale(300),
            height: verticalScale(300),
            marginBottom: scale(8),
            alignItems: 'center'
        },
    
        scrollStyle: {
            flex: 1,
            padding: scale(8),
            marginBottom: scale(8),
            
        },

        wrapper: {
            alignItems: 'center'
            
        },

        content: {
            padding: scale(20),
            //backgroundColor: '#fff',
            borderColor: 'white',
            borderWidth: 1,
          },

          contentText: {
            textAlign: 'left',
            fontSize: moderateScale(16),
            color: 'white'            
          },

          header: {
            //backgroundColor: '#F5FCFF',
            padding: scale(10),
            borderColor: 'white',
            borderWidth: 1,
          },

          headerText: {
            textAlign: 'left',
            fontSize: moderateScale(16),
            fontWeight: '500',
            color: 'white'
          },
      });
