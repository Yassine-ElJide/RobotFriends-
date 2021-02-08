import React, {Component} from 'react';
import {SearchBox} from './Components/SearchBox';
import {CardList} from './Components/CardList';
import {Scroll} from './Components/Scroll';

class App extends Component{
    constructor(){
        super();
        this.state = {
            robots: [],
            searchField: ''
        };
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => this.setState({robots: users}))
    }

    onSearchChange = (e) => {
        this.setState({searchField: e.target.value})
    }

    render() {
        const {robots, searchField} = this.state;
        const filteredRobots = robots.filter(
            robot => robot.name.toLowerCase().includes(searchField.toLowerCase()))
        if(!robots.length){
            return <h1 className="tc">Loading...</h1>
        }
        return (
            <div className="tc">
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
        )
    }
}


export default App;