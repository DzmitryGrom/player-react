import React from 'react';


import StateCover from '../stateCover'
import StatePlayListBottom from '../../containers/StatePlayListBottom'
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
      <StatePlayListBottom
        isOpenListBottom={isOpenListBottom}
        isOpenListTop={isOpenListTop}
        onToggleListBottom={onToggleListBottom}
      />
      </>
    );
};

export default AppComponent;
