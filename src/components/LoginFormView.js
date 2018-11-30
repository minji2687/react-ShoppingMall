import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class LoginFormView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      success: false,
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

  async handleLoginButtonClick() {
    const { username, password } = this.state;
    const { onLogin } = this.props;
    await onLogin(username, password);
    this.setState({
      success: true,
    });
  }

  //로그인이 성공적으로 끝났을 때
  //Redirect 컴포넌트 렌더링 -->주소표시줄의 상태가 바뀜

  render() {
    const { username, password, success } = this.state;
    if (success) {
      return <Redirect to="/" />;
    }
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
