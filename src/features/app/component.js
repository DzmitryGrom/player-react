import React from 'react';


import StateCover from '../state-cover'
import StateBottom from '../../features/state-bottom'
import StatePlayListTop from '../../containers/StatePlayListTop'

const AppComponent = ({onButtonClick, isOpenListBottom, isOpenListTop, onToggleListBottom}) => {
    return (
      <>
      <span className="panel-side-settings" onClick={onButtonClick}><i className="i i_settings"/></span>
      <StateCover
        isOpenListBottom={isOpenListBottom}
        isOpenListTop={isOpenListTop}
      />
      <StatePlayListTop
        isOpenListTop={isOpenListTop}
      />
      <StateBottom
        isOpenListBottom={isOpenListBottom}
        onToggleListBottom={onToggleListBottom}
      />
      </>
    );
};

export default AppComponent;
