var React = require('React');
import {View, ListView, StyleSheet} from 'react-native';
import WordItem from '../WordItem';
import FilterTabs from '../containers/FilterTabs';
import SearchBar from '../SearchBar';

class WordsPage extends React.Component {
  props: {
    words: React.PropTypes.array
  }
  state = {
    searchText: ''
  }
  render() {
    let words = this.filterWords(this.props.words);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return (
      <View style={styles.container}>
        <SearchBar onChangeText={this.searchOnChangeText} placeholder="Find Word"/>
        <FilterTabs />
        <View style={styles.wordItems}>
          <ListView
            enableEmptySections={false}
            dataSource={ds.cloneWithRows(words)}
            renderRow={(rowData) => <WordItem word={rowData.word} reviews={rowData.reviews} daysUntil={rowData.nextReviewTime}/>} />
        </View>
      </View>
    );
  }
  filterWords = (words) => {
    return words.filter((word) => {
      let text = word.word;
      return text.toLowerCase().startsWith(this.state.searchText)
    })
  }
  searchOnChangeText = (text) => {
    this.setState({searchText: text})
  }
  searchOnCancel = () => {
    this.setState({searchText: ''})
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
