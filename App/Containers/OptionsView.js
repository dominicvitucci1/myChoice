import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, Alert } from 'react-native';
import { List, ListItem, SearchBar } from 'react-native-elements';
import { strings } from '../Utils/Strings';
import { data } from '../Utils/OptionsData';

class OptionsView extends Component {
    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#CCCC66',
            }
      };
      constructor(props) {
        super(props);
     
        this.state = { data };
    }
  
    onPressItem= (id, key, uri) => {
        const { navigate } = this.props.navigation;
        navigate('DetailView', { ID: id, Name: key, imageURI: uri });
    }

    renderSeparator = () => (
          <View
            style={{
              height: 1,
              width: '100%',
              backgroundColor: '#CED0CE'
            }}
          />
        );
  
  
    render() {
      return (
          <View style={styles.mainBackgroud}>
            <FlatList
                data={this.state.data}
                renderItem={({ item }) => (
                <ListItem
                    title={`${item.key}`}
                    titleStyle={styles.titleTextStyle}
                    containerStyle={styles.listItemStyle}
                    onPress={() => this.onPressItem(item.id, item.key, item.imageURI)}
                />
                )}
                keyExtractor={item => item.key}
                ItemSeparatorComponent={this.renderSeparator}
            />
          </View>
      );
    }
        }

export default OptionsView;

const styles = StyleSheet.create({
    mainBackgroud: {
      flex: 1,
      backgroundColor: '#996633'
    },

    titleTextStyle: {
        color: '#fff',
        fontSize: 18,
    },

    listItemStyle: {
        height: 70,
        borderBottomWidth: 0
    }
  });
