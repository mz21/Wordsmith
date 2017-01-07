var React = require('React');
import {View, ListView, StyleSheet} from 'react-native';
import WordItem from '../WordItem';
import FilterTabs from '../containers/FilterTabs';
import SearchBar from '../SearchBar';

class WordsPage extends React.Component {
  props: {
    words: React.PropTypes.array
  }
  render() {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return (
      <View style={styles.container}>
        <SearchBar placeholder="Find Word"/>
        <FilterTabs />
        <View style={styles.wordItems}>
          <ListView
            dataSource={ds.cloneWithRows(this.props.words)}
            renderRow={(rowData) => <WordItem word={rowData.word} reviews={rowData.reviews} daysUntil={rowData.nextReviewTime}/>} />
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 70
  },
  wordItems: {
    alignItems: 'center'
  }
});

module.exports = WordsPage;
