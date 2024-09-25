import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import {
  provideFASTDesignSystem,
  fastDivider,
  fastAnchor,
  fastTextField,
  fastButton,
  fastAccordion,
  fastAccordionItem,
  fastAvatar,
  fastBadge,
} from "../../node_modules/@microsoft/fast-components/dist/fast-components.js";

@customElement("event-element")
export class EventElement extends LitElement {
  constructor() {
    super();
    provideFASTDesignSystem().register(
      fastDivider(),
      fastAnchor(),
      fastTextField(),
      fastButton(),
      fastAccordion(),
      fastAccordionItem(),
      fastAvatar(),
      fastBadge()
    );
  }

  hadleButtonClick() {
    alert("Fast Button Clicked");
  }
  handleAnchorClick() {
    alert("Anchor is clicked");
  }

  static override styles = css`
    .accordions {
      margin-top: 20px;
      color: black;
      font-size: 10px;
    }
    fast-badge {
      --badge-fill-primary: rgba(255, 0, 0, 1);
      --badge-fill-secondary: #00ff00;
      --badge-fill-transparent: transparent;
      --badge-color-black: #000000;
      --badge-color-white: #ffffff;
    }
  `;
  @property()
  name = "Login";

  override render() {
    return html`
      <div>
        <fast-button href="#" @click=${this.hadleButtonClick}
          >Click here</fast-button
        >
        <fast-anchor href="#" @click=${this.handleAnchorClick}
          >This is anchor</fast-anchor
        >
        <div class="accordions">
          <fast-accordion>
            <fast-accordion-item
              >Accordion one content
              <div slot="heading">Accordion one</div>
            </fast-accordion-item>
          </fast-accordion>
        </div>
        <fast-avatar
          src="./image/loginLogo.png"
          alt="image"
        >
        </fast-avatar>
        <fast-badge fill="danger" color="white">Badge</fast-badge>
      </div>
    `;
  }
}
