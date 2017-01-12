var React = require('React');
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import SearchBar from '../SearchBar';
import AddPageForm from './AddPageForm';
import AddPageImagePicker from './AddPageImagePicker';
import * as commons from '../../data/commons';

var {width, height} = Dimensions.get('window');
class AddPage extends React.Component {
  props: {
    addWord: React.PropTypes.func
  }
  state = {
    tab: commons.ADD_FORM
  }
  render() {
    var addComponent = null;
    if(this.state.tab === commons.ADD_FORM) {
      addComponent = <AddPageForm addWord={this.props.addWord}/>
    }
    else if(this.state.tab === commons.ADD_PICKER) {
      addComponent = <AddPageImagePicker/>
    }
    return (
      <View style={styles.wrapper}>
        <SearchBar onFocus={this.onFocus} onCancel={this.onCancel} onSubmit={this.onSubmit} placeholder="Find Image via Google"/>
        <View style={styles.container}>
          {addComponent}
        </View>
      </View>
    );
  }
  onFocus = () => {
    if(this.state.tab !== commons.ADD_PICKER) {
      this.setState({tab: null});
    }
  }
  onSubmit = (text) => {
    this.setState({tab: commons.ADD_PICKER})
  }
  onCancel = () => {
    this.setState({tab: commons.ADD_FORM})
  }
}

var styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
  },
  container: {
    height: height * 0.75,
    alignItems: 'center'
  },
  overlay: {
    width: width,
    height: height,
    backgroundColor: 'white',
    position: 'absolute',
    zIndex: 10
  }
});

module.exports = AddPage;
