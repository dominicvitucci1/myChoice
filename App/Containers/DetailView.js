import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import * as firebase from 'firebase';
import Image from 'react-native-image-progress';
import ProgressBar from 'react-native-progress/Bar';
import { strings } from '../Utils/Strings';

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
                <Text>{section.content}</Text>
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
            fontSize: 32,
            marginTop: 8,
            marginLeft: 8,
            marginRight: 8,
            marginBottom: 8
        },

        imageStyle: {
            width: 300,
            height: 300,
            marginBottom: 8,
            alignItems: 'center'
        },
    
        scrollStyle: {
            flex: 1,
            padding: 8,
            marginBottom: 8,
            
        },

        wrapper: {
            alignItems: 'center'
            
        },

        content: {
            padding: 20,
            backgroundColor: '#fff',
          },

          header: {
            backgroundColor: '#F5FCFF',
            padding: 10,
          },

          headerText: {
            textAlign: 'left',
            fontSize: 16,
            fontWeight: '500',
          },
      });
