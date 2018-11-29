import React, { Component } from 'react';

export default class LoginFormView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  //    handleUsernameChange(e){
  //         this.setState({
  //             username:e.target.value
  //         })
  //     }

  //     handlePasswordChange(e){
  //         this.setState({
  //             password:e.target.value
  //         })
  //     }
  handleFieldChange(e, name) {
    this.setState({
      [name]: e.target.value,
    });
  }

  handleLoginButtonClick() {
    const { username, password } = this.state;
    const { onLogin } = this.props;
    onLogin(username, password);
  }

  render() {
    const { username, password } = this.state;
    return (
      <div>
        <input
          value={username}
          onChange={e => this.handleFieldChange(e, 'username')}
          type="text"
        />
        <input
          value={password}
          onChange={e => this.handleFieldChange(e, 'password')}
          type="password"
        />
        <button onClick={() => this.handleLoginButtonClick()}>로그인</button>
      </div>
    );
  }
}
