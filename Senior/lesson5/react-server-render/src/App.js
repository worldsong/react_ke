const React = require('react')
class App extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            warn: false
        }
    }
    render () {
        const self = this
        return React.createElement('div', {
            onClick: function () {
                self.setState({
                    warn: !self.state.warn
                })
            },
            style: {
                color: this.state.warn ? 'red' : 'black'
            }
        }, 'hello react.js')
    }
}
module.exports = App