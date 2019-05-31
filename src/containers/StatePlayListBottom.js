import { connect } from 'react-redux'; 
import { bindActionCreators } from 'redux'
import statePlayListBottom from '../shared/statePlayList'
import * as Action from '../features/common/actions/actions'

const mapStateToProps = id => ({
    ...id
})

const mapDispathToProps = dispatch => ({
    ...bindActionCreators(Action, dispatch)
});

export default connect(mapStateToProps, mapDispathToProps)(statePlayListBottom);