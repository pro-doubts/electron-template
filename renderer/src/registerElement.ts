import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import {
  provideFASTDesignSystem,
  fastDivider,
  fastAnchor,
  fastTextField,
  fastButton,
} from "../../node_modules/@microsoft/fast-components/dist/fast-components.js";

@customElement("register-element")
export class RegisterElement extends LitElement {
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
      width : 90vw;
    }
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 90vh;
      width: 40vw;
      flex-direction: column;
      border: 1px solid black;
      border-radius: 20px;
      margin-top : 10px
    }
    .gap{
        margin-top: 20px;
    }
    fast-divider {
      color: blue;
    }
  `;

  @property()
  name = "Login";

  override render() {
    return html`
      <div class="main">
        <div class="container">
          <div><h1>Register</h1></div>
          <div><fast-divider></fast-divider></div>
          <div class="gap">
            <div>Name</div>
            <fast-text-field placeholder="Enter username"></fast-text-field>
          </div>
          <div class="gap">
            <div>Mobile</div>
            <fast-text-field type="number" placeholder="Enter username"></fast-text-field>
          </div>
          <div class="gap">
            <div>Email</div>
            <fast-text-field type="email" placeholder="Enter username"></fast-text-field>
          </div>
          <div class="gap">
            <div>Password</div>
            <fast-text-field type="password" placeholder="Enter password"></fast-text-field>
          </div>
          <div class="gap">
            <div>Confirm password</div>
            <fast-text-field type="password" placeholder="Enter username"></fast-text-field>
          </div>
          <div class="gap">
            <fast-button href="#">Login</fast-button>
          </div>
          <div class="gap">
            <fast-anchor>Already an account</fast-anchor>
          </div>
        </div>
      </div>
    `;
  }
}
