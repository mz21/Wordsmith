import { connect } from 'react-redux'
import { setTodosRequest, setUpdatedTime, setWordListRequest} from '../../../data/actions'
import {default as DumbInitialSetup} from '../../pages/InitialSetup'
import {database} from '../../../data/firebaseSetup';
import * as commons from '../../../data/commons';

const mapStateToProps = (state) => {
  console.log(state);
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
      let updatedTimeRef = database.ref('/users/' + commons.getAuth() + '/lastUpdatedTime/')
      return updatedTimeRef.once('value').then((snapshot) => {
        let value = snapshot.val();
        let updatedTime = null
        if(!value) {
          updatedTime = Date.now()
          updatedTimeRef.set({
            time: updatedTime
          })
        }
        else {
          updatedTime = snapshot.val().time;
        }
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
