import React from 'react';
import opggLogo from './opgg-logo.svg';
import './OPGGButton.css'

class OPGGButton extends React.Component {
  
    openLink = () => { window.open(this.props.link); }

    render() {
        return (
            <div className='widgetContainer1'>
                <button className="OPGGbutton" onClick={this.openLink}>
                    <img className="OPGGimg" src={opggLogo} alt="OP.GG Logo" />
                </button>
            </div>
        );
    }
}

OPGGButton.defaultProps = { link: '//euw.op.gg' };

export default OPGGButton;