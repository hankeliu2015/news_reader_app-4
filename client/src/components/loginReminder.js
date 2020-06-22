import React from 'react';

export default function LoginReminder() {
  return (
    <div className="login-reminder">
      <p>Please <em>Sign-up</em> or <em>Login</em> to post your comments</p>
      <a className="login-reminder-button" href="/users/sign_up">User Sign-Up</a>
    </div>
  )
}
