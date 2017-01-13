var React = require('React');
import {StyleSheet, View, Text, TextInput, Dimensions, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as commons from '../data/commons'

var {width} = Dimensions.get('window');
class SearchBar extends React.Component {
  props: {
    placeholder: React.PropTypes.string,
    autoCorrect: React.PropTypes.bool,
    onFocus: React.PropTypes.func,
    onCancel: React.PropTypes.func,
    onSubmit: React.PropTypes.func
  };
  state = {
    searchBarOffset: (100 - (this.props.placeholder.length > 100 ? 0 : this.props.placeholder.length)) * 0.003956,
    searchBarWidth: 0.86,
    active: false,
    autoCorrect: this.props.autoCorrect ? this.props.autoCorrect : false,
    text: ''
  }
  render() {
    let cancelButton = null;
    if(this.state.active) {
      cancelButton = (
        <TouchableHighlight underlayColor='pink' onPress={() => {
            this.setInactiveSearchBar();
            if(this.props.onCancel()) {
              this.props.onCancel();              
            }
          }}>
          <Text style={styles.cancelActive}>Cancel</Text>
        </TouchableHighlight>
      )
    }
    return (
      <View style={styles.container}>
        <TextInput ref='searchbar' keyboardType='url' autoCapitalize='none' autoCorrect={this.state.autoCorrect} placeholder={this.props.placeholder}
          onFocus={() => {
            this.setActiveSearchBar();
            if(this.props.onFocus) {
              this.props.onFocus();
            }
          }}
          onSubmitEditing={() => {
            if(this.props.onSubmit) {
              this.props.onSubmit(this.state.text);
            }
          }}
          onChangeText={(text) => {
            this.setState({text})
          }}
          style={[styles.searchBar, {paddingLeft: width * this.state.searchBarOffset, width: width * this.state.searchBarWidth}]} />
        <Icon name="search" size={12} color='rgb(154,154,154)' style={[styles.searchIcon, {left: width * (this.state.searchBarOffset + 0.03)}]} />
        {cancelButton}
      </View>
    );
  }
  setActiveSearchBar = function() {
    this.setState({searchBarOffset: 0.1,
      searchBarWidth: 0.72,
      active: true
    })
  }
  setInactiveSearchBar = function() {
    this.setState({
      searchBarOffset: (100 - (this.props.placeholder.length > 100 ? 0 : this.props.placeholder.length)) * 0.003956,
      searchBarWidth: 0.86,
      active: false
    })
    this.refs.searchbar.clear();
    this.refs.searchbar.blur();
  }
}

var searchBarHeight = 25;

var styles = StyleSheet.create({
  container: {
    width: width,
    height: searchBarHeight,
    marginTop: 15,
    marginBottom: 15,
    flexDirection: 'row'
  },
  searchIcon: {
    position: 'absolute',
    bottom: searchBarHeight * 0.28,
    backgroundColor: 'rgb(250,250,251)',
  },
  searchBar: {
    backgroundColor: 'rgb(250,250,251)',
    borderColor: 'rgb(216,216,216)',
    borderRadius: 5,
    borderWidth: 1,
    fontFamily: 'Avenir Next',
    fontWeight: '400',
    fontSize: 11,
    color: 'rgb(92,92,92)',
    marginLeft: 0.07 * width,
    height: searchBarHeight
  },
  cancelActive: {
    color: commons.PURPLE,
    fontFamily: 'Avenir Next',
    width: 0.21 * width,
    height: searchBarHeight,
    textAlign: 'center',
    paddingTop: 2
  }
});

module.exports = SearchBar;
