import React from 'react';
import './Tracks.css';

function Title(props){
    return(
        <h4 id="title">
            {props.value}
        </h4>
    );
}

function Description(props){
    return(
        <div id="description">
            {props.value}
        </div>
    );
}

class Information extends React.Component{
    render(){
        return(
            <div id="information">
                <Title value="Title!!!" />
                <Description value="Fooo" />
            </div>
        );
    }
}

class QA extends React.Component{
    render(){
        return(
            <div id="qa">
                <input type="text" />
            </div>
        );
    }
}

class Player extends React.Component{
    render(){
        return(
            <div id="player">
                Player!
            </div>
        );
    }
}

class Talk extends React.Component{
    render(){
        return(
            <div id="talk">
                <Player />
                <Information />
                <QA />
            </div>
        );
    }
}

class Tracks extends React.Component{
    render() {
        return(
            <div id="tracks">
                <Talk />
            </div>
        );
    }
}

export default Tracks;
