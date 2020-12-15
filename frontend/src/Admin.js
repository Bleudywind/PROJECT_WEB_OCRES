import React from 'react';
import './Admin.css'
import axios from 'axios'

class AllMatches extends React.Component {
    render() {
        return (
            <div className='ap'>
                <p className='match idmatch'>{this.props.matches._id}</p>
                <p className='match opponentmatch'>{this.props.matches.opponent}</p>
                <p className='match datematch'>{this.props.matches.date}</p>
            </div>
        );
    }
}

class Admin extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            matches: [],
            date: new Date(),
            opponent: "",
            _id: 0
        };
        
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeOpponent = this.onChangeOpponent.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:5000/matches/')
            .then(response => {
                this.setState({ matches: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    matchList() {
        return this.state.matches.map(currentmatches => {
            return <AllMatches matches={currentmatches}/>
        })
    }

    onChangeDate(date) {
        this.setState({
            date: date
        });
    }

    onChangeOpponent(e) {
        this.setState({
            opponent: e.target.value
        });
    }

    onChangeID(e) {
        this.setState({
            _id: e.target.value
        })
    }

    addMatch(e) {
        e.preventDefault();
        const match = {
            date: new Date(),
            opponent: this.state.opponent
        }
        console.log(match);
    }

    render() {
        return (
            <div className='global'>
                <div className='bloc'>
                    <form onSubmit={this.addMatch} className='form'>
                        <label className='form'>ADD Match</label>
                        <input onChange={this.onChangeOpponent} placeholder='opponent' className='form' type='text' />
                        <input onChange={this.onChangeDate} placeholder='date' className='form' type='date' />
                        <input type="submit" value="Add" />
                    </form>

                    <form className='form'>
                        <label className='form'>UPDATE Match</label>
                        <input onChange={this.onChangeOpponent} placeholder='match id' className='form' type='text' />
                        <input onChange={this.onChangeDate} placeholder='new date' className='form' type='date' />
                        <input type="submit" value="Update" />
                    </form>

                    <form className='form'>
                        <label className='form'>DELETE Match</label>
                        <input onChange={this.onChangeID} placeholder='match id' className='form' type='text' />
                        <input type="submit" value="Delete" />
                    </form>
                </div>
                <div className='bloc matchlist'>
                    {this.matchList()}
                </div>
            </div>
        );
    }
}

export default Admin;