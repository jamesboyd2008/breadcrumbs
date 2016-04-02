var React = require('react-native')
var Main = require('./app/Components/Main')


var {
  NavigatorIOS,
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} = React;

class breadcrumbs extends Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          title: "Breadcrumbs",
          component: Main,
        }} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('breadcrumbs', () => breadcrumbs);
