import React from 'react';
import opggLogo from './opgg-logo.svg';
import './OPGGButton.css'

class OPGGButton extends React.Component {
    constructor(props) {
        super(props);
        this.openLink = () => { window.open(this.props.link); }
    }

    render() {
        return (
            <div>
                <button onClick={this.openLink}>
                    <img src={opggLogo} alt="OP.GG Logo" />
                </button>
            </div>

        );
    }
}

OPGGButton.defaultProps = { link: '//euw.op.gg' };

export default OPGGButton;

