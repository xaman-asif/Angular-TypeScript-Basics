import {AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {ButtonComponent} from "./button/button.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // another way of writing the template in place of templateUrl
  // template: `<h1>Hello World!</h1>`,
  styleUrls: ['./app.component.scss'],
  // another way of writing the styles in place of styleUrls
  // styles: [
  //   `
  //     h1 {
  //       color: red;
  //     }
  //   `,
  // ],
})
export class AppComponent implements AfterViewInit {

  @ViewChild('editable_div', {read: ViewContainerRef}) vcr!: ViewContainerRef;
  // this hook is called once the view has been initialized
  // access and manipulate DOM elements here
  // ex: initializing third party libraries or manipulating the dom
  ngAfterViewInit() {
      const componentRef = this.vcr.createComponent(ButtonComponent);
      // This is how you can access the instance of the component
      componentRef.instance.buttonName = 'Dumb Button';
  }
}
