import React from 'react';
import { View, Text, Button, StyleSheet } from "react-native";

export default class Page1Screen extends React.Component {
  static navigationOptions = function(props) {
    return {
      title: 'Page 1',
      headerTitleStyle: {
        color: 'white'
      },
      headerStyle: {
        backgroundColor: '#418558',
      },
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello Page 1</Text>
        <Button title='Go to Detail Screen' onPress={()=> this.props.navigation.navigate('Detail')} />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
