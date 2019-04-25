import React from 'react';
import PropTypes from 'prop-types';

const LoginForm = ({ value, onChange, onSubmit }) => {
  const isFormEnabled = Object.values(value).every(item => item !== '');
  return (
    <form onSubmit={onSubmit}>
      <input
        label="Username"
        value={value.username}
        name="username"
        onChange={onChange}
        margin="normal"
        type="text"
        autoComplete="off"
      />
      <input
        label="Password"
        value={value.password}
        name="password"
        onChange={onChange}
        margin="normal"
        type="password"
      />
      <div>
        <button
          onClick={onSubmit}
          variant="outlined"
          color="primary"
          disabled={!isFormEnabled}
          type="submit"
        >
          登陆
        </button>
      </div>
    </form>
  );
};

LoginForm.propTypes = {
  value: PropTypes.object,
  isLoading: PropTypes.bool,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default LoginForm;
