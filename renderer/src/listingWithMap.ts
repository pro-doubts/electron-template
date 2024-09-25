import {LitElement, html} from 'lit';
import {customElement, state} from 'lit/decorators.js';
import {map} from 'lit/directives/map.js';
// TODO: import map directive.

@customElement('my-element')
export class MyElement extends LitElement {
  @state()
  items = new Set(['Apple', 'Banana', 'Grape', 'Orange', 'Lime'])

  override render() {
    return html`
      <p>My unique fruits</p>
      <ul>
        <!-- TODO: Utilize map directive to render items. -->
        ${map(this.items, (item)=> html `<li>${item}</li>`)}
      </ul>
    `;
  }
}
