/**
 * Created by ptmbr012 on 2016/01/29.
 */

var CountDown = React.createClass({
    displayName: 'CountDown',
    getInitialState: function(){
        return {
            timeRemaining: 10
        }
    },
    tick: function(){
        if (this.state.timeRemaining == 1){
            this.setState({timeRemaining: 'Boom'})
            clearInterval(this.interval)
        } else {

            this.setState({timeRemaining: this.state.timeRemaining - 1})
        }
    },
    componentDidMount: function(){
        this.interval = setInterval(this.tick, 1000);
    },
    render: function () {
        if (this.state.timeRemaining === 'Boom'){
            return (<p><img src="images/firework_icon.gif"/></p>);
        } else {
            return (<p id="txt">{this.state.timeRemaining}</p>);
        }


    }
});

var CommentBox = React.createClass({
    render: function() {
        return (
            <div className="commentBox">
            Hello, world! I am a CommentBox.
        </div>
        );
    }
});

ReactDOM.render(
    <CountDown />,
    document.getElementById('content')
);