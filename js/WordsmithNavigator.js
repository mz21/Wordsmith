var React = require('React');
import {StyleSheet, Navigator} from 'react-native';

export default class WordsmithNavigator extends React.Component {
  render() {
    return (
      <Navigator
        initialRoute={{}}
        renderScene={this.renderScene}>
      </Navigator>
    )
  }
  renderScene(route, navigator) {
    // if (route.rate) {
    //   return <RatingScreen navigator={navigator} surveys={route.surveys} />;
    // }
    // if (route.notices) {
    //   return <ThirdPartyNotices navigator={navigator} />;
    // }
  }
}

const styles = StyleSheet.create({
});
