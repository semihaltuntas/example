
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { RouterModule } from "@angular/router";
@Component({
    selector: "app",
    standalone: true,
    templateUrl: "app.component.html",
    styleUrls: ["app.component.css"],
    imports: [CommonModule, HeaderComponent,RouterModule]
})
export class AppComponent {

}