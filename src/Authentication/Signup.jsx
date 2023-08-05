import React from "react";
import styles from "../Authentication/Signup.module.css"


class SignUp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      gender: '',
      school: '',
      birthday: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch('https://initiare-clone-a22c10683333.herokuapp.com/api/v1/auth/register', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json',
      },
      body: JSON.stringify({
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        password: this.state.password,
        gender: this.state.gender,
        school: this.state.school,
        birthday: this.state.birthday
      }),
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error))
  }
  render() {
    return (
      <form id="register_form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          id="first_name"
          name="first_name"
          className="first_name"
          placeholder="First Name"
          onChange={this.handleChange} />
        <input
          type="text"
          id="last_name"
          name="last_name"
          className="last_name"
          placeholder="Last Name"
          onChange={this.handleChange} />
        <input
          type="email"
          id="email"
          name="email"
          className="email"
          placeholder="Email"
          onChange={this.handleChange} />
        <input
          type="password"
          id="password"
          name="password"
          className="password"
          placeholder="Password"
          onChange={this.handleChange} />
          <input
          type="radio"
          id="female"
          name="gender"
          value="Female"
          onChange={this.handleChange} />

        <input
          type="radio"
          id="male"
          name="gender"
          value="Male"
          onChange={this.handleChange} />
        <input
          type="text"
          id="school"
          name="school"
          className="school"
          placeholder="School"
          onChange={this.handleChange} />
        <input
          type="date"
          id="birthday"
          name="birthday"
          className="birthday"
          placeholder="Birthday"
          onChange={this.handleChange} />
        <button type="submit" form="register_form" >Submit</button>
        <h1>First Name Submitted: {this.state.first_name}</h1>
      </form>
    )
  }


}

export default SignUp;
