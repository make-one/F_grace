import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';

// Components
import LoginForm from './components/LoginForm';
import WelcomeMessage from './components/WelcomeMessage';
import Navigator from '@/utils/router';

import { onLoadBookingList } from './redux/actions';

const container = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: '#607d8b',
};

const button = {
  width: '100px',
  height: '40px',
  display: 'flex',
  border: '1px solid #ccc',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

class LoginPage extends Component {
  isTokenSource = axios.CancelToken.source();

  state = {
    form: {
      username: '',
      password: '',
    },
    isLoading: false,
  };

  componentWillUnmount() {
    this.isTokenSource.cancel('API Cancel');
  }

  componentDidMount() {
    console.log(this.props);
  }

  onHandleChangeForm = event => {
    const { form } = this.state;
    form[event.target.name] = event.target.value;
    this.setState({ form });
  };

  onHandleSubmitForm = async event => {
    event.preventDefault();
    const { form } = this.state;

    const isFormEmpty = Object.values(form).every(item => item === '');
    if (isFormEmpty) {
      return;
    }
    try {
      this.setState({ isLoading: true });
      // const result = await AuthenticationAPI.onLogin({
      //   cancelToken: this.isTokenSource.token,
      //   username: form.username,
      //   password: form.password,
      // });
      this.setState({ isLoading: false });

      Navigator.push('/auth');
    } catch (error) {
      if (axios.isCancel(error)) {
        // console.log('Request canceled', error.message);
      } else {
        const { message, errorCode } = error.response.data;
        if (errorCode === '401') {
          this.onToggleSnackbar({ message });
        }
        this.setState({ isLoading: false });
      }
    }
  };

  render() {
    const { form, isLoading } = this.state;
    const { list } = this.props.use;
    return (
      <div style={container}>
        {list.length && list.map(item => <span key={item.id}>{item.name}</span>)}
        <div
          style={button}
          onClick={() => this.props.onLoadBookingList({
            shopId: 16,
            shop_id: 16,
            userId: 'oTz7TwrjCXVlwFfhDFW-SB9lLOxY',
            user_id: 'oTz7TwrjCXVlwFfhDFW-SB9lLOxY',
          })
          }
        >
          点击
        </div>
        <WelcomeMessage />
        <LoginForm
          value={form}
          isLoading={isLoading}
          onChange={this.onHandleChangeForm}
          onSubmit={this.onHandleSubmitForm}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    use: state.user,
  };
};

const mapDispathToProps = {
  onLoadBookingList,
};

export default connect(
  mapStateToProps,
  mapDispathToProps,
)(LoginPage);
