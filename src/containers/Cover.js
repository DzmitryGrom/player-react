import { connect } from 'react-redux'; 
import { bindActionCreators } from 'redux'
import stateCover from '../components/stateCover'
import * as Action from '../actions'

const mapStateToProps = obj => ({
    ...obj
})

const mapDispathToProps = dispatch => ({
    ...bindActionCreators(Action, dispatch)
});

export default connect(mapStateToProps, mapDispathToProps)(stateCover);