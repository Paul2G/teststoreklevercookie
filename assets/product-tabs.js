if (!customElements.get("product-tabs-button")) {
  class ProductTabsButton extends HTMLElement {
    constructor() {
      super();
    }
  }

  customElements.define("product-tabs-button", ProductTabsButton);
}

if (!customElements.get("product-tabs-content")) {
  class ProductTabsContent extends HTMLElement {
    constructor() {
      super();
    }
  }

  customElements.define("product-tabs-content", ProductTabsContent);
}

if (!customElements.get("product-tabs")) {
  class ProductTabs extends HTMLElement {
    constructor() {
      super();

      this.buttons = this.querySelectorAll("product-tabs-button");
      this.contents = this.querySelectorAll("product-tabs-content");
    }

    connectedCallback() {
      this.buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
          this.buttons.forEach((b) => b.setAttribute("aria-selected", false));
          this.contents.forEach((c) => c.setAttribute("aria-hidden", true));

          btn.setAttribute("aria-selected", true);
          this
            .querySelector(`[aria-labelledby="${btn.getAttribute("id")}"]`)
            .setAttribute("aria-hidden", false);
        });
      });
    }
  }

  customElements.define("product-tabs", ProductTabs);
}
