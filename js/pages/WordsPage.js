var React = require('React');
var removeDiacritics = require('diacritics').remove;
import {View, ListView, StyleSheet} from 'react-native';
import WordItem from '../WordItem';
import FilterTabs from '../containers/FilterTabs';
import SearchBar from '../SearchBar';
import AddPage from '../containers/pages/AddPage'

class WordsPage extends React.Component {
  props: {
    editWord: React.PropTypes.func,
    words: React.PropTypes.array,
    isEditing: React.PropTypes.bool
  }
  state = {
    searchText: '',
    isEditing: false
  }
  render() {
    let words = this.filterWords(this.props.words);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    let wordsList = null;
    if(words.length) {
      wordsList = <ListView contentContainerStyle={{paddingBottom: 50}}
        dataSource={ds.cloneWithRows(words)}
        renderRow={(rowData) => <WordItem id={rowData.id} key={rowData.id} thumbnail={rowData.thumbnailUrl} word={rowData.word} reviews={rowData.reviews} daysUntil={rowData.nextReviewTime} onPress={this.onPress}/>} />
    }

    if(this.state.isEditing) {
      return (
        <AddPage editMode={true} goBack={() => {this.setState({isEditing: false})}}/>
      )
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
  onPress = (id) => {
    this.props.editWord(this.props.words, id)
    this.setState({isEditing: true})
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
