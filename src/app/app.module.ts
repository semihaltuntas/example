import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { RatingModule } from "ng-starrating";
import { FormsModule } from "@angular/forms";




@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        RatingModule,
        FormsModule
    ],
    providers:[],
    bootstrap:[AppComponent]
})
export class AppModule{}