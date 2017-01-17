var React = require('React');
var removeDiacritics = require('diacritics').remove;
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
    let wordsList = null;
    if(words.length) {
      wordsList = <ListView
        dataSource={ds.cloneWithRows(words)}
        renderRow={(rowData) => <WordItem word={rowData.word} reviews={rowData.reviews} daysUntil={rowData.nextReviewTime}/>} />
    }
    return (
      <View style={styles.container}>
        <SearchBar onChangeText={this.searchOnChangeText} onCancel={this.searchOnCancel} placeholder="Find Word"/>
        <FilterTabs />
        <View style={styles.wordItems}>
          {wordsList}
        </View>
      </View>
    );
  }
  filterWords = (words) => {
    return words.filter((word) => {
      let text = removeDiacritics(word.word);
      return text.toLowerCase().startsWith(removeDiacritics(this.state.searchText))
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
