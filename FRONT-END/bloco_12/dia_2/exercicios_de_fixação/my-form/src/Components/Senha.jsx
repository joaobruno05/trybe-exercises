import React from 'react';

export default class Senha extends React.Component {
  render() {
    const { handleChange } = this.props;
    

    return (
      <label className="password" htmlFor="password">
        Senha
        <input
          name="password"
          type="password"
          id="password"
          onChange={handleChange}
        />
      </label>
    );
  }
}