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
            message: 'Logging in...'
        };

        const listener = (e) => {
            console.log('Login got message', e);
            if (e.detail?.type === 'auth_ok') {
                console.log('Login got message -- auth_ok');
                this.setState({isOpen: false});
                connector.removeEventListener('message', listener);
            }
            if (e.detail?.type === 'auth_fail') {
                console.log('Login got message -- auth_fail');
                this.setState({message: 'Authentication failed ' + e.detail.hint});
            }
        };

        connector.addEventListener('message', listener)

        setTimeout(() => {
            // Socket is not ready yet without this delay
            connector.login((new URLSearchParams(window.location.search)).get('secret'));
        }, 2000);
    }

    render() {
        return <Modal isOpen={this.state.isOpen}>
            {this.state.message}
        </Modal>;
    }
}

Login.propTypes = {isOpen: PropTypes.bool};
