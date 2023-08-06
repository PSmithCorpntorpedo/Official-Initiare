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
      .then(data => console.log(data.status))
      .catch(error => console.error(error.status))
  }
  render() {
    return (
      
      <div className={styles[`sign-up-wrapper`]}>
        
      <form id="register_form" onSubmit={this.handleSubmit} className={styles[`register-form`]}>
      <div className={styles[`form-header`]}>
          <h1>Create, Rate, Initiate</h1>
          <h3>Initialize your glorious journey here</h3>
        </div>
        <input
          type="text"
          id="first_name"
          name="first_name"
          className={styles[`info-box`]}
          placeholder="First Name"
          onChange={this.handleChange} />
        <input
          type="text"
          id="last_name"
          name="last_name"
          className={styles[`info-box`]}
          placeholder="Last Name"
          onChange={this.handleChange} />
        <input
          type="email"
          id="email"
          name="email"
          className={styles[`info-box`]}
          placeholder="Email"
          onChange={this.handleChange} />
        <input
          type="password"
          id="password"
          name="password"
          className={styles[`info-box`]}
          placeholder="Password"
          onChange={this.handleChange} />
          
        <input
          type="text"
          id="school"
          name="school"
          className={styles[`info-box`]}
          placeholder="School"
          onChange={this.handleChange} />
          <div className={styles[`gender-wrapper`]}>
          <label for="male">
          <input
          type="radio"
          id="male"
          name="gender"
          value="Male"
          onChange={this.handleChange} />
          Male
          </label>

        <label for="female">
          <input
          type="radio"
          id="female"
          name="gender"
          value="Female"
          onChange={this.handleChange} />
          Female
          </label>
          </div>
          <div className={styles[`birthdate-wrapper`]}>
        <label for="birthday">
        Birthdate:
        <input
          type="date"
          id="birthday"
          name="birthday"
          className="birthday"
          placeholder="Birthday"
          onChange={this.handleChange}/>
          </label>
          </div>
          
        <button type="submit" form="register_form" className={styles[`submit-button`]}>Submit</button>
      </form>
    </div>
    )
  }


}

export default SignUp;
