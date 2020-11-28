import React from 'react';
import opggLogo from './opgg-logo.png';
import './OPGGButton.css'

class OPGGButton extends React.Component{
    constructor(props){
        super(props);
        this.state{link: 'https://op.gg'};
    }

    openLink = () => {window.open(props.link);}

    render(){
        return(
            <div>
                <img src={ opggLogo } alt="OP.GG Logo" onClick={ this.openLink }/>
            </div>
          );
    }
}

OPGGButton.defaultProps={ link: 'https://google.com' };

export default OPGGButton;