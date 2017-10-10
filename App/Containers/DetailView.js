import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import * as firebase from 'firebase';
import Image from 'react-native-image-progress';
import ProgressBar from 'react-native-progress/Bar';
import { strings } from '../Utils/Strings';

let Questions = [
    {
    title: 'First',
    content: 'Lorem ipsum...',
  },
  {
    title: 'Second',
    content: 'Lorem ipsum...',
  }
];

let testPath = 'gs://mychoice-f9186.appspot.com/Condom-min.png';

class DetailView extends Component {
    
        static navigationOptions = {
            headerStyle: {
                backgroundColor: '#CCCC66',
                }
          };

          componentWillMount= () => {
            }


            getImage(path) {
                firebase.storage().refFromURL(path).getDownloadURL().then((url) => {
                    this.setState({ img: { uri: url } });
                });
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
                    <ScrollView style={styles.scrollStyle}>
                        <Text style={styles.titleStyle}>
                            LABEL
                        </Text>

                        <Image
                            style={styles.imageStyle}
                            source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/mychoice-f9186.appspot.com/o/Condom-min.png?alt=media&token=2670b555-4126-49e9-9f64-9919345c244a' }}
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
            // resizeMode: 'contain',
            // alignSelf: 'center',
            width: 300,
            height: 300
        },
    
        scrollStyle: {
            flex: 1,
            padding: 8
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
