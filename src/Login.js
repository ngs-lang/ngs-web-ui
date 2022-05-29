import Modal from "react-modal";
import {Component} from "react";
import PropTypes from "prop-types";
import connector from './Connector';

Modal.setAppElement('#root');

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: true,
            code: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        const listener = (e) => {
            console.log('Login got message', e);
            if (e.detail && e.detail.type === 'auth_ok') {
                console.log('Login got message -- auth_ok');
                this.setState({isOpen: false});
                // this.state.isOpen = false;
                connector.removeEventListener('message', listener);
            }
        };

        connector.addEventListener('message', listener)
    }

    handleChange(event) {
        this.setState({code: event.target.value});
    }

    handleSubmit(event) {
        console.log('Login handleSubmit');
        event.preventDefault();
        connector.login(this.state.code);
    }

    render() {
        return <Modal isOpen={this.state.isOpen}>
            <h1>Log in</h1>
            Please enter per-connection code given by the proxy server (<code>ngs-web-ui-proxy</code> project).
            <br/>
            <br/>
            <form onSubmit={this.handleSubmit}>
                <label>Code: <input type="text" value={this.state.value} onChange={this.handleChange} autoFocus/></label>
                <input type="submit" value="Go!" />
            </form>
        </Modal>;
    }
}

Login.propTypes = {isOpen: PropTypes.bool};
