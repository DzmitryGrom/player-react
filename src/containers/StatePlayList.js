import { connect } from 'react-redux'; 
import { bindActionCreators } from 'redux'
import statePlayList from '../components/statePlayList'
import * as Action from '../actions'

const mapStateToProps = id => ({
    ...id
})

const mapDispathToProps = dispatch => ({
    ...bindActionCreators(Action, dispatch)
});

export default connect(mapStateToProps, mapDispathToProps)(statePlayList);