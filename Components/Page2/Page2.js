import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Page2Screen extends React.Component {
  static navigationOptions = function(props) {
    return {
      title: 'Page 2',
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
        <Text>Hello Page 2</Text>
        <Button title='Go to Page 1 Screen' onPress={()=> this.props.navigation.navigate('Page1Stack')} />
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
