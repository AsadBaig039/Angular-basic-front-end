import { Component } from "@angular/core";
import { ApiService } from "./APIdata.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private apiService: ApiService) {}
  name = "";
  error = "";
  updatedTime = "";
  displayUpdatedTime = "";
  onKey(event) {
    this.name = event.target.value;
    console.log(this.name);
  }

  onKeyTime(event) {
    this.updatedTime = event.target.value;
    console.log(this.updatedTime);
  }

  updateDoctorTiming() {
    this.apiService
      .updateDoctorTiming(this.name, this.updatedTime)
      .subscribe(data => {
        if (!data) {
          return (this.error = data.data);
        }
        this.displayUpdatedTime = data.timing;
        console.log(data);
      });
  }
}
