import { Component } from "react";

class Persona extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: this.props.age,
      hairColor: this.props.hairColor
    };
  }

  render() {
    const { firstName, lastName, age, hairColor } = this.props

    return (
      <div className="persona">
        <h3>{lastName}, {firstName}</h3>
        <p>Age: {age}</p>
        <p>Hair Color: {hairColor}</p>
        <button className="boton-verde">Cumplir años</button>
      </div>
    );
  }

  componentDidMount () {
    const nombre = this.props.firstName + ' ' + this.props.lastName
    console.log("Se acaba de escribir el HTML de la persona " + nombre)
  }
}

export default Persona;