import React from 'react';
import opggLogo from './opgg-logo.svg';
import './OPGGButton.css'

class OPGGButton extends React.Component {
  
    openLink = () => { window.open(this.props.link); }

    render() {
        return (
                <button className="OPGGbutton" onClick={this.openLink}>
                    <img className="OPGGimg" src={opggLogo} alt="OP.GG Logo" />
                </button>
        );
    }
}

OPGGButton.defaultProps = { link: '//euw.op.gg' };

export default OPGGButton;

