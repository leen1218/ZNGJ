import React from 'react';

import { Toolbar, BackButton } from 'react-onsenui';

const NavToolbar = ({title, navigator, hasBackButton}) => (
    <Toolbar>
        <div className='left'>
            {hasBackButton ? <BackButton onClick={() => navigator.popPage()}>Back</BackButton> : null}
        </div>

         (title ? <div className='center'>{title}</div> : null);
    </Toolbar>
);

export default NavToolbar;
