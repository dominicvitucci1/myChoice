import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, Alert } from 'react-native';
import { List, ListItem, SearchBar } from 'react-native-elements';
import { strings } from '../Utils/Strings';

class OptionsView extends Component {
    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#CCCC66',
            }
      };
      constructor(props) {
        super(props);
     
        this.state = {
            data: [
                { key: strings.intrauterine_device, id: 0 },
                { key: strings.Implant, id: 1 },
                { key: strings.birth_control_shot, id: 2 },
                { key: strings.vaginal_ring, id: 3 },
                { key: strings.Patch, id: 4 },
                { key: strings.Pill, id: 5 },
                { key: strings.Mini_Pill, id: 6 },
                { key: strings.condom_male_and_female, id: 7 },
                { key: strings.Spermicide, id: 8 },
                { key: strings.sponge_with_spermicide, id: 9 },
                { key: strings.emergency_contraception, id: 10 }
            ]
        };
    }
  
    onPressItem= (id) => {
        const { navigate } = this.props.navigation;
        navigate('DetailView', { ID: id });
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
                    onPress={() => this.onPressItem(item.id)}
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
