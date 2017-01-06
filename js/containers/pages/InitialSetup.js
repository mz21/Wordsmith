import { connect } from 'react-redux'
import { setTodosRequest, setUpdatedTime, setWordListRequest} from '../../../data/actions'
import {default as DumbInitialSetup} from '../../pages/InitialSetup'
import {database} from '../../../data/firebaseSetup';

const mapStateToProps = (state) => {
  return {
    timeOfLastUpdate: state.todos.timeOfLastUpdate
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setTodos: (updated) => {
      dispatch(setTodosRequest(updated));
    },
    setUpdatedTime: () => {
      return database.ref('/users/' + 'test/lastUpdatedTime/').once('value').then((snapshot) => {
        var updatedTime = snapshot.val().time;
        dispatch(setUpdatedTime(updatedTime));
      });
    },
    setWordList: () => {
      dispatch(setWordListRequest());
    }
  }
}

const InitialSetup = connect(
  mapStateToProps,
  mapDispatchToProps
)(DumbInitialSetup)

export default InitialSetup
