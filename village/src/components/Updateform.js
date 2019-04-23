import React from 'react';

export default class UpdateForm extends React.Component {

  constructor() {

    super();

    this.state = {

      name: '',
      age: '',
      height: ''

    }

  }

  componentDidMount() {

    const {name, age, height} = this.props.smurf;

    this.setState({

      name: name,
      age: age,
      height: height

    });

  }

  submitHandler = e => {

    e.preventDefault();
    this.props.updateFunc(this.props.smurf.id, {...this.state, id: this.props.smurf.id});
    this.props.turnOff();

  }

  handleChange = e => {

    this.setState({

      [e.target.name]: e.target.value

    });

  }

  render() {

    return (

      <div className='update-form'>

        <form onSubmit={this.submitHandler}>

          <input type='text' name='name' onChange={this.handleChange} value={this.state.name} />
          <input type='text' name='age' onChange={this.handleChange} value={this.state.age} />
          <input type='text' name='height' onChange={this.handleChange} value={this.state.height} />
          <button>Update</button>

        </form>

      </div>

    );

  }

}