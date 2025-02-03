import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { AnotherComponentComponent } from '../another-component/another-component.component';

@Component({
  selector: 'app-ng-template',
  templateUrl: './ng-template.component.html',
  styleUrls: ['./ng-template.component.scss'],
})
export class NgTemplateComponent implements AfterViewInit {
  @ViewChild('first', { static: true }) elementRef!: ElementRef;
  @ViewChild('second', { read: ViewContainerRef }) vcr!: ViewContainerRef;
  ngAfterViewInit(): void {
    this.elementRef.nativeElement.innerText = 'She made us fly ';

    const componentRef = this.vcr.createComponent(AnotherComponentComponent);

    setTimeout(() => {
      componentRef.instance.varToBeReplacedSoon = 'To USeffingUmerica';
    }, 3000);
  }
}
