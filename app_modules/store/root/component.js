import Store from "../model.js";
import template from "./template.js";

export default class StoreRoot extends HTMLDivElement {

  static get route() { return ""; }
  static get is() { return "store-root"; }

  constructor() {
    super()
  }

  async connectedCallback() {
    const {products, colors} = await Store.findAllAsync();
    const templateEl = document.createElement("template");
    templateEl.innerHTML = template({ list: products, colors });
    this.appendChild(templateEl.content.cloneNode(true));
  }

}