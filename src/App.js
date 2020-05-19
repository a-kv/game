import React from 'react';
import './App.css';
import Item from "./components/Item";
import logo from './assets/logo.gif'
import audio from './assets/prikolnoe-chavkane.mp3';
import Items from "./components/Items";

class App extends React.Component {
    state = {
        counter: 0,
        speed: 1000,
        items: [0, 1, 2, 3, 4, 5, 6, 7, 8],
        randomIndex: 8
    }

    onClickUp = () => {
        new Audio(audio).play()
        this.setState({
            counter: this.state.counter + 1
        })

        this.setState({
                speed: this.state.speed - 50
            }
        )
    }
    makeRandomIndex = () => {
        this.setState({randomIndex: Math.floor(Math.random() * this.state.items.length)})
    }

    // shouldComponentUpdate() {
    //     this.onClickUp()
    // }

    componentDidMount() {
        setInterval(this.makeRandomIndex, this.state.speed)
    }

    render = () => {
        // let newItems = this.state.items.map(i => <Item onClick={this.onClickUp}/> )
        return (
            <div className="App">
                <img src={logo}/>
                <span>{this.state.counter}</span>
                <div className="container">
                    <Items randomIndex={this.state.randomIndex} items={this.state.items} onClick={this.onClickUp}/>

                </div>
            </div>
        );
    }
}

export default App;
