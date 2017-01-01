var React = require('React');
var StyleSheet = require('StyleSheet');
var View = require('View');
var Text = require('Text');
import WordItem from '../WordItem';
import FilterTabs from '../FilterTabs';
import SearchBar from '../SearchBar';

class WordsPage extends React.Component {
  props: {
  };
  render() {
    return (
      <View style={styles.container}>
        <FilterTabs />
        <SearchBar text="Find Word"/>
        <View style={styles.wordItems}>
        <WordItem />
        <WordItem />
        <WordItem />
        <WordItem />
        <WordItem />
        <WordItem />
        <WordItem />
        <WordItem />
        <WordItem />
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20
  },
  wordItems: {
    alignItems: 'center'
  }
});

module.exports = WordsPage;
