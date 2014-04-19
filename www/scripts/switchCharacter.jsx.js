/** @jsx React.DOM */
define(['react'], function(React) {

    function switchAllTo(isLeft) {
        var cl = document.getElementsByClassName('characters')[0].classList;
        if (isLeft) {
           cl.add('left');
           cl.remove('right');
        } else {
           cl.remove('left');
           cl.add('right');
       }
    }

    var CharacterSwitcher = React.createClass({
        getInitialState: function() {
            return { 
                isLeft: true 
            };
        },
        componentDidUpdate: function() {
            switchAllTo(this.state.isLeft);
        },
        handleSwitch: function() {
            this.setState({
                isLeft: !this.state.isLeft
            });
        },
        render: function() {
            return (
                <div><a href="javascript:void(0)" onClick={this.handleSwitch}>Switch Character</a></div>
            );
        }
    });

    return CharacterSwitcher;
});