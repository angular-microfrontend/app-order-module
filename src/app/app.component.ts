import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  @Input() value;

  @Output() changed: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  updateParent() {
    console.log(this.value, "value updated");
    this.changed.emit(this.value);
  }
}
