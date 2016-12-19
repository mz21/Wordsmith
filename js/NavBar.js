var React = require('React');
var StyleSheet = require('StyleSheet');
var View = require('View');
var NavigationIcon = require('./NavigationIcon');

class NavBar extends React.Component {
  render() {
    let icons_map = [
      {
        image: require('../img/todo.png'),
        name: 'Todo'
      },
      {
        image: require('../img/add.png'),
        name: 'Add'
      },
      {
        image: require('../img/words.png'),
        name: 'Words'
      },
      {
        image: require('../img/calendar.png'),
        name: 'Calendar'
      },
      {
        image: require('../img/profile.png'),
        name: 'Profile'
      },
    ];
    const icons = icons_map.map((icon) =>
      <NavigationIcon key={icon.name} image={icon.image} name={icon.name} />
    )
    return (
      <View style={{height: 60, flexDirection: 'row', justifyContent: 'space-between'}}>
        {icons}
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
  }
});

module.exports = NavBar;
