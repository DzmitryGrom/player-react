import { connect } from 'react-redux'; 
import { bindActionCreators } from 'redux'
import statePlayListTop from '../components/statePlayListTop'
import * as Action from '../features/common/actions/actions'

const mapStateToProps = id => ({
    ...id
})

const mapDispathToProps = dispatch => ({
    ...bindActionCreators(Action, dispatch)
});

export default connect(mapStateToProps, mapDispathToProps)(statePlayListTop);