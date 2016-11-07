import React from 'react';

import { Toolbar, BackButton, Icon, ToolbarButton } from 'react-onsenui';

const NavToolbar = ({title, navigator, hasBackButton, fwdIcon, fwdImageIcon, fwdCallback}) => (
    <Toolbar>
        hasBackButton ? (
        <div className='left'>
             <BackButton onClick={() => navigator.popPage()}>Back</BackButton>
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
                    <Icon icon={fwdImageIcon}> </Icon> //todo FixME use image.
                </ToolbarButton>
            </div>
        ) : null;

        
    </Toolbar>
);

export default NavToolbar;
