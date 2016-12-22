var React = require('React');
import {StyleSheet, Navigator} from 'react-native';
import TodoPage from './pages/TodoPage';

export default class WordsmithNavigator extends React.Component {
  render() {
    return (
      <Navigator
        initialRoute={{ name: 'Main' }}
        style={styles.container}
        renderScene={this.renderScene}>
      </Navigator>
    )
  }
  renderScene(route, navigator) {
    if (route.name == 'Main') {
      return <TodoPage />;
    }
    // if (route.notices) {
    //   return <ThirdPartyNotices navigator={navigator} />;
    // }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
