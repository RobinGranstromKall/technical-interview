import Store from "../model.js";
import template from "./template.js";

export default class StoreOne extends HTMLDivElement {

  static get route() { return "/(\\d+)"; }
  static get is() { return "store-item"; }

  constructor() {
    super()
  }

  connectedCallback() {
    const item = Store.findById(this.params[0]);
    const colors = Store.getColors();
    const templateEl = document.createElement("template");
    templateEl.innerHTML = template({item, colors});
    this.appendChild(templateEl.content.cloneNode(true));
  }

}