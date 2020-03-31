import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { createCustomElement } from "@angular/elements";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  // bootstrap: [AppComponent],
  entryComponents: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  customElement;
  constructor(private injector: Injector) {
    this.customElement = createCustomElement(AppComponent, { injector });
    if (!customElements.get("halodoc-order-root")) {
      customElements.define("halodoc-order-root", this.customElement);
    } else {
      console.warn(`${name} has been defined twice`);
    }
  }

  ngDoBootstrap() {}
}
