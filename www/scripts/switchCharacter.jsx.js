/** @jsx React.DOM */
define(['react'], function(React) {

    function switchAllTo(isLeft) {
        var els = document.getElementsByClassName('switchable'),
            i,
            cl;
        for(i = 0; i < els.length; i++) {
            cl = els[i].classList;
            if (isLeft) {
               cl.add('left');
               cl.remove('right');
            } else {
               cl.remove('left');
               cl.add('right');
            }
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
            var currentClassName = this.state.isLeft ? 'switcher left' : 'switcher right';
            return (
                <div className={currentClassName}><a href="javascript:void(0)" onClick={this.handleSwitch}>Switch Character</a></div>
            );
        }
    });

    return CharacterSwitcher;
});