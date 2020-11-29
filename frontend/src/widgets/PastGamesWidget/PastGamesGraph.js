import React from 'react';
import './PastGamesGraph.css'

class PastGamesGraph extends React.Component {
    constructor(props) {
        super(props);
        this.openLink = () => { window.open(this.props.link); }
    }

    render() {
        return (
            <div>
            </div>

        );
    }
}

PastGamesGraph.defaultProps = { };

export default PastGamesGraph;