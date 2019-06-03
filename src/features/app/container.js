import { connect } from 'react-redux';
import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux'
import * as Action from '../common/actions/index'
import AppComponent from './component'
import { getTracks } from '../common/utils';

class AppContainer extends PureComponent {
  state = {
    isOpenListBottom: false,
    isOpenListTop: false
  };

  async componentWillMount() {
    const { setTracks } = this.props;
    const { data } = await getTracks();
    setTracks(data);
  }

  toggleListBottom = isOpenListBottom => this.setState({ isOpenListBottom: !this.state.isOpenListBottom });

  toggleListTop = isOpenListTop => this.setState({ isOpenListTop: !this.state.isOpenListTop });

  render() {
    const { isOpenListBottom, isOpenListTop } = this.state;
    return (
      <AppComponent
        onButtonClick={this.toggleListTop.bind(this)}
        isOpenListBottom={isOpenListBottom}
        isOpenListTop={isOpenListTop}
        onToggleListBottom={this.toggleListBottom.bind(this)}
      />
    );
  }
}

const mapStateToProps = obj => ({
  ...obj
});

const mapDispathToProps = dispatch => ({
  ...bindActionCreators(Action, dispatch)
});

export default connect(mapStateToProps, mapDispathToProps)(AppContainer);