import React from 'react';

import { Toolbar, BackButton, Icon, ToolbarButton } from 'react-onsenui';

const NavToolbar = ({title, navigator, hasBackButton, fwdIcon, fwdImageIcon, fwdCallback}) => (
    <Toolbar>
        hasBackButton ? (
        <div className='left'>
             <BackButton onClick={
                () => navigator.popPage()
                }>
                 回退
             </BackButton>
        </div>
        ) : null;

        title ? (<div className='center'>{title}</div>) : null;

        fwdIcon ? (
            <div className="right">
                <ToolbarButton onClick={fwdCallback}>
                    <Icon icon={fwdIcon}> </Icon>
                </ToolbarButton>
            </div>
        ) : null;

        fwdImageIcon ? (
            <div className="right">
                <ToolbarButton onClick={fwdCallback}>
                    <img src={fwdImageIcon}/>
                </ToolbarButton>
            </div>
        ) : null;

        
    </Toolbar>
);

export default NavToolbar;
