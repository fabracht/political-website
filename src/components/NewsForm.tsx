import React, { Component } from "react";
import validator from "validator";
import ReCAPTCHA from "react-google-recaptcha";

// OPTIONS FOR HTTP REQUEST FOR SENDGRID API
const emailOptions = {
  method: "PUT",
  hostname: "api.sendgrid.com",
  port: null,
  path: "/v3/marketing/contacts",
  headers: {
    authorization: `Bearer ${process.env.REACT_APP_SENDGRID_API_KEY}`,
    "content-type": "application/json",
  },
};

const getListsOptions = {
  method: "GET",
  hostname: "api.sendgrid.com",
  port: null,
  path: "/v3/marketing/lists?page_size=100",
  headers: {
    authorization: `Bearer ${process.env.REACT_APP_SENDGRID_API_KEY}`,
  },
};

// THE FORM SENDS A FULLNAME AND AN EMAIL TO
// THE EMAILING SERVICE CONTACT LIST
interface Form {
  fullname: string;
  email: string;
}

interface Props {}
interface State extends Form {
  fullnameError: string;
  emailError: string;
  captchaError: string;
  captchaValue: string | null;
  regSuccess: boolean;
}

export class NewsForm extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      fullname: "",
      fullnameError: "",
      email: "",
      emailError: "",
      captchaValue: "",
      captchaError: "",
      regSuccess: false,
    };
    this.onChange = this.onChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  resetState() {
    this.setState({
      fullname: "",
      fullnameError: "",
      email: "",
      emailError: "",
      regSuccess: true,
    });
  }

  onChange(value: string | null) {
    this.setState({
      captchaValue: value,
    });
  }

  handleChange(ev: React.ChangeEvent<HTMLInputElement>) {
    if (ev.currentTarget.name === "fullname") {
      this.setState({
        fullname: ev.currentTarget.value,
      });
    } else if (ev.currentTarget.name === "email") {
      this.setState({
        email: ev.currentTarget.value,
      });
    }
  }

  validateForm() {
    let result = true;
    if (this.state.fullname.length === 0) {
      this.setState({
        fullnameError: "Campo Nome Inválido",
      });
      result = false;
    } else {
      this.setState({
        fullnameError: "",
      });
    }
    if (!validator.isEmail(this.state.email)) {
      this.setState({
        emailError: "Campo Email Inválido",
      });
      result = false;
    } else {
      this.setState({
        emailError: "",
      });
    }
    if (!this.state.captchaValue) {
      result = false;
      this.setState({
        captchaError: "Captcha Inválido",
      });
    } else {
      this.setState({
        captchaError: "",
      });
    }
    return result;
  }

  async addToList(listId: string) {
    let URL = `https://${emailOptions.hostname + emailOptions.path}`;
    console.log(listId);
    fetch(URL, {
      method: emailOptions.method,
      headers: emailOptions.headers,
      body: JSON.stringify({
        list_ids: [listId],
        contacts: [{ email: this.state.email, fullname: this.state.fullname }],
      }),
    });

    this.resetState();
  }

  async handleSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    if (this.validateForm()) {
      let URL = `https://${getListsOptions.hostname + getListsOptions.path}`;
      fetch(URL, {
        method: getListsOptions.method,
        headers: getListsOptions.headers,
      })
        .then((res) => res.json())
        .then((json) => this.addToList(json.result[0].id));
    }
  }

  render() {
    return (
      <div className="home__form">
        <form
          noValidate={false}
          className="home-form"
          onSubmit={this.handleSubmit}
        >
          <h2>Receba Notícias</h2>
          <label htmlFor="firstfullname" className="field">
            <span>Nome</span>
            <input
              onChange={this.handleChange}
              value={this.state.fullname}
              id="fullname"
              type="text"
              name="fullname"
              minLength={1}
            />
          </label>
          {this.state.fullnameError.length < 1 || (
            <span className="input-error">{this.state.fullnameError}</span>
          )}
          <label htmlFor="email" className="field">
            <span>Email</span>
            <input
              onChange={this.handleChange}
              value={this.state.email}
              id="email"
              type="email"
              name="email"
            />
          </label>
          {this.state.emailError.length < 1 || (
            <span className="input-error">{this.state.emailError}</span>
          )}

          <div className="recaptcha">
            <ReCAPTCHA
              sitekey={process.env.REACT_APP_RECAPTCHA_KEY!}
              onChange={this.onChange}
              size={"normal"}
            />
            {this.state.captchaError.length < 1 || (
              <span className="input-error">{this.state.captchaError}</span>
            )}
          </div>
          <button type="submit" className="form-button">
            Registre-se{" "}
            {this.state.regSuccess ? <i className="fa fa-check"></i> : ""}
          </button>
        </form>
      </div>
    );
  }
}
