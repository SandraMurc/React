import { Component } from "react";

class Interruptor extends Component {
  state = { 
    position: 'on',
    message: 'Prendido'
  }
  
  render() { 

    const estilosCSS = {
      textDecoration: 'underline',
      padding: '1rem 3rem'
    }
    
    const cambiar  = () => {
      console.log("ESTADO")
      console.log(this.state)
      if (this.state.position == 'on') {
        this.setState({
          position: 'off',
          message: 'Apagado'
        })
      }
      else {
        this.setState({
          position: 'on',
          message: 'Encendido'
        })
      }
    }

    return (
      <div>
        <p>
          El botón está {this.state.message}
          <button
            style={estilosCSS}
            onClick={cambiar}
            className="btn btn-primary">
              {this.state.position}
          </button>
          </p>
      </div>
    );
  }
}

export default Interruptor;