var React = require('React');
import {StyleSheet, View, Text, Dimensions, ScrollView} from 'react-native';
import SearchBar from '../SearchBar';
import AddPageForm from '../containers/pages/AddPageForm';
import EditPageForm from '../containers/pages/EditPageForm';
import AddPageImagePicker from '../containers/pages/AddPageImagePicker';
import * as commons from '../../data/commons';

var {width, height} = Dimensions.get('window');
class AddPage extends React.Component {
  props: {
    addWord: React.PropTypes.func,
    fetchImages: React.PropTypes.func,
    goBack: React.PropTypes.func,
    editMode: React.PropTypes.bool
  }
  state = {
    tab: commons.ADD_FORM
  }
  render() {
    var addComponent = null;
    if(this.state.tab === commons.ADD_FORM) {
      if(this.props.editMode) {
        addComponent = <EditPageForm goBack={this.props.goBack}/>
      }
      else {
        addComponent = <AddPageForm/>
      }
    }
    else if(this.state.tab === commons.ADD_PICKER) {
      addComponent = <AddPageImagePicker editMode={this.props.editMode} onSubmit={this.navToForm}/>
    }
    // else addComponent is null
    return (
      <ScrollView keyboardShouldPersistTaps={true} contentContainerStyle={styles.wrapper}>
        <SearchBar onFocus={this.onFocus} onCancel={this.onCancel} onSubmit={this.onSubmit} placeholder="Find Image via Bing"/>
        <View style={styles.container}>
          {addComponent}
        </View>
      </ScrollView>
    );
  }
  onFocus = () => {
    if(this.state.tab !== commons.ADD_PICKER) {
      this.setState({tab: null});
    }
  }
  onSubmit = (text) => {
    this.setState({tab: commons.ADD_PICKER})
    this.props.fetchImages(text, this.props.editMode);
  }
  onCancel = () => {
    this.setState({tab: commons.ADD_FORM})
  }
  navToForm = () => {
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
