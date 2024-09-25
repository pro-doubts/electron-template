import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import {
  provideFASTDesignSystem,
  fastDivider,
  fastAnchor,
  fastTextField,
  fastButton,
} from "../../node_modules/@microsoft/fast-components/dist/fast-components.js";

@customElement("login-element")
export class LoginElement extends LitElement {
  constructor() {
    super();
    provideFASTDesignSystem().register(
      fastDivider(),
      fastAnchor(),
      fastTextField(),
      fastButton()
    );
  }

  static override styles = css`
    :not() {
      display: none;
    }
    .main {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 90vh;
      width: 90vw;
    }
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50vh;
      width: 40vw;
      flex-direction: column;
      border: 1px solid black;
      border-radius: 20px;
    }
    .gap {
      margin-top: 20px;
    }
    fast-divider {
      color: blue;
    }
  `;

  @property()
  name = "Login";

  @property()
  username: string = "john";
  @property()
  password: string = "123456";
  hadleLoginClick() {
    let uname = document.getElementById("uname")?.innerText;
    let pass = document.getElementById("pass")?.innerText;
    if (uname === this.username) {
      if (pass === this.password) {
        alert("login successfully");
      } else {
        alert("invalid password");
      }
    } else {
      alert("invalid username");
    }
  }

  override render() {
    return html`
      <div class="main">
        <div class="container">
          <div>Login</h1></div>
          <div><fast-divider></fast-divider></div>
          <div class="gap">
            <div>Username</div>
            <fast-text-field id='uname' placeholder="Enter username"></fast-text-field>
          </div>
          <div class="gap">
            <div>Password</div>
            <fast-text-field id='pass' type="password" placeholder="Enter password"></fast-text-field>
          </div>
          <div class="gap">
            <fast-button @click=${this.hadleLoginClick} href="#">Login</fast-button>
          </div>
          <div class="gap">
            <fast-anchor href="">Don't have an account</fast-anchor>
          </div>
        </div>
      </div>
    `;
  }
}
