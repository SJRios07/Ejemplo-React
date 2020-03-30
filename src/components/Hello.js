import React from 'react'

var nuCurrentTime = 3;
var stMessage;
function Hello(){
    var d = new Date();
    var nuCurrentTime = d.getHours() + ":0" + d.getMinutes();
    stMessage="Hello World! " + nuCurrentTime;
    return React.createElement(
        'div',
        {id:"hello", class:'o-title-container'},
        React.createElement('h1', {id:"title"}, stMessage)
    )
}

export default Hello;