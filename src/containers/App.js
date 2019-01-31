import { connect } from 'react-redux'; 
import { bindActionCreators } from 'redux'
import * as Action from '../actions'
import App from '../components/app'  

const mapStateToProps = obj => ({
    ...obj
})

const mapDispathToProps = dispatch => ({
    ...bindActionCreators(Action, dispatch)
});

export default connect(mapStateToProps, mapDispathToProps)(App);