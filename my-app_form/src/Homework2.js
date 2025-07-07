import React from "react";
import "./Homework2.css";

function Homework2() {
  return (
    <div className="right">
      <div className="input-block">
        <label className="email">
          Електронна пошта або мобільний номер
        </label>
        <input type="text" className="input-field" />

        <p className="input-info-text">
          By entering your mobile number and one-time code sign-in option,<br />
          you agree to receive a one-time verification code via SMS from IKEA.<br />
          Message and data rates may apply.
        </p>

        <a href="#" className="privacy-link">
          More info about Privacy Policy
        </a>

        <div className="input-block">
          <label className="password-label">Пароль</label>
          <div className="password-container">
            <input type="password" className="input-field password-input" />
            <span className="material-symbols-outlined eye-icon">
              visibility
            </span>
          </div>
          <a href="#" className="forgot-password">
            Забули свій пароль?
          </a>
        </div>

        <div className="checkbox-block">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Зберегти інформацію</label>
          <span className="info-icon">i</span>
        </div>

        <button className="submit-button">ПРОДОВЖИТИ</button>

        <div className="create-account-block">
          <p className="acc">
            У вас ще немає облікового запису? Створіть його:
          </p>
          <button className="create-account-button">СТВОРИТИ АККАУНТ</button>
        </div>
      </div>
    </div>
  );
}

export default Homework2;
