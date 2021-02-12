import React from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import emoji from 'remark-emoji';
import './AnnoncesGL.css';
import axios from 'axios'

const Markdown = props => (
    <ReactMarkdown plugins={[emoji, gfm]} renderers={emojiInit()} children={props.Text.message} className="text scrollbar scrollbar-primary">

    </ReactMarkdown>
)

function emojiInit() { return { code: ({ language, value }) => { return <ReactMarkdown language={language} children={value} plugins={[emoji, gfm]} /> } } }

class AnnoncesGL extends React.Component {

    constructor(props) {
        super(props);

        this.state = { text: [] };
    }



    componentDidMount() {
        axios.get('http://localhost:5000/annonces/mostRecent')
            .then(response => {
                this.setState({ text: response.data });
            })
            .catch((error) => {
                console.log(error);
            });

    }

    teamsText() {
        console.log(this.state.text);
        console.log("cc");
        return this.state.text.map(currentteams => {
            return <Markdown Text={currentteams} />;
        });

    }

    render() {
        return (
            <div className="textBlock widgetContainer">
                {this.teamsText()}
            </div>
        );
    }
}
export default AnnoncesGL;