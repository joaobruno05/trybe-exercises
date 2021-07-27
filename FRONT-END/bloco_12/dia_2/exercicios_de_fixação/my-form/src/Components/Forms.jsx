import React from 'react';
import Email from './Email';
import Senha from './Senha';

export default class Forms extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      select: '',
      textarea: '',
      checkbox: false,
    };
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({ [name]: value },
  )};

  render() {
    const { email, password, select, textarea, checkbox } = this.state

    return (
      <section>
        <h1 className="title">Formulário</h1>

        <form className="form">
          <fieldset className="fieldset">
            <legend>Dados cadastrais</legend>
            <Email handleChange={ this.handleChange } />
            <Senha handleChange={this.handleChange} />
          </fieldset>

          <label className="select" htmlFor="select">
            Escolha
            <select
              name="select"
              id="select"
              onChange={this.handleChange}
            >
              <option value="1">Opção 1</option>
              <option value="2">Opção 2</option>
              <option value="3">Opção 3</option>
            </select>
          </label>

          <label className="checkbox" htmlFor="checkbox">
            Li o termo e estou de acordo
            <input
              name="checkbox"
              type="checkbox"
              id="checkbox"
              value={ checkbox }
              onChange={this.handleChange}
            />
          </label>

          <label className="file" htmlFor="file">
            Adicione um arquivo:
            <input
              type="file"
              id="file" />
          </label>

          <label className="textarea" htmlFor="textarea">
            Escreva aqui
            <textarea
              name="textarea"
              id="textarea"
              onChange={this.handleChange} 
            />
          </label>

        </form>
      </section>
    )
  }
}