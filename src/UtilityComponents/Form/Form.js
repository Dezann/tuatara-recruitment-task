import React, { Component } from "react";
import "./Form.scss";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      question: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  handleFormSubmit(event) {
    event.preventDefault();

    let url = "testUrl";

    alert(
      "A form was submitted to an external URL with data:" +
        JSON.stringify(this.state)
    );
    fetch(url, {
      method: "POST",
      body: JSON.stringify(this.state),
    }).then(function (response) {
      console.log(response);
      return response.json();
    });
  }

  render() {
    return (
      <form className="contact-form" onSubmit={this.handleFormSubmit}>
        <h1>{this.props.title}</h1>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="your e-mail"
          onChange={this.handleInputChange}
        />
        <input
          type="text"
          id="question"
          name="question"
          placeholder="your question"
          onChange={this.handleInputChange}
        />
        <button
          type="submit"
          value="Submit"
          id="submitContactForm"
          name="submit"
        >
          SEND
        </button>
      </form>
    );
  }
}

export default Form;
