import React from 'react';

export default class Email extends React.Component {
  render() {
    const { handleChange, email } = this.props;

    return (
      <label className="email" htmlFor="email">
      Email
        <input
          name="email"
          type="email"
          id="email"
          value={ email }
          onChange={handleChange} 
        />
      </label>
    );
  }
}
