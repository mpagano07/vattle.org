import React, { PureComponent } from 'react';
import { Table } from 'react-materialize';
import PropTypes from 'prop-types';

class Users extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      users: [],
      textSearch: '',
    }
  }
  //"get" (obtiene los datos del json)
  componentDidMount() {
    const url = 'https://server-subscripcion-jsbrbnwqfv.now.sh/subscripciones'
    fetch(url)
      .then((respuesta) => respuesta.json())
      .then((json) => this.setState({ users: json }));
  }

  usersStateSearch(usersList) {
    this.state({
      users: usersList
    });
  }


  inputText(text) {
    this.setState({
      textSearch: text,
    })
  }
  //Buscador>>
  filterList() {
    const { users, textSearch } = this.state;

    if (textSearch === '') {
      return users;
    }

    const usersFilterLc = textSearch.toLocaleLowerCase();

      const encontrado = users.filter((item) => {
      const itsTipo = item.tipo.toLocaleLowerCase().indexOf(usersFilterLc) !== -1;
      const itsNombre = item.nombre.toLocaleLowerCase().indexOf(usersFilterLc) !== -1;
      const itsEmail = item.email.toLocaleLowerCase().indexOf(usersFilterLc) !== -1;
      const itsPais = item.pais.toLocaleLowerCase().indexOf(usersFilterLc) !== -1;
      return itsTipo || itsNombre || itsEmail || itsPais;
    })

    return encontrado;
  }

  /*
  <input> Campo de texto para el buscador
  users.map >> Muestra los Usuarios Subscriptos en el []
  */
  render() {

    const { users, textSearch } = this.state
    console.log(this.inputFilter)
    return (
      <div>
        <input type="text" onChange={(event) => this.inputText(event.target.value)} />
        {textSearch.length > 0 &&
          <p><b>
            {this.filterList().length}
          </b> Usuarios Encontrados</p>
        }
        <h1>Lista Usuarios:</h1>
        <Table responsive>
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Nombre y Apellido</th>
              <th>Correo Electronico</th>
              <th>Pais</th>
            </tr>
          </thead>

          {this.filterList().map(usr =>

            <tbody>
              <td>{usr.tipo}</td>
              <td>{usr.nombre}</td>
              <td>{usr.email}</td>
              <td>{usr.pais}</td>
            </tbody>
          )}
        </Table>
      </div>
    );
  }
}

export default Users;