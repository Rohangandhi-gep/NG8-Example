import {
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef,
  ComponentFactory,
  OnInit
} from '@angular/core';
import { TextboxComponent } from 'src/app/components/textbox/component/textbox.component';
import { DemoPageDirective } from '../demopage.directive';
import { TableComponent } from 'src/app/components/table/component/table.component';

@Component({
  selector: 'app-demopage',
  templateUrl: './demopage.component.html',
  styleUrls: ['./demopage.component.css']
})
export class DemopageComponent implements OnInit {


  componentRef: any;
  componentFactory: any;
  viewContainerRef:any;
  @ViewChild(DemoPageDirective, {static: true}) demoPageDirective: DemoPageDirective;

  constructor(private resolver: ComponentFactoryResolver) { }

  createDynamicComponent(componentName) {
    console.log(componentName)
    if(componentName==="TextBox")
    {
      this.componentFactory = this.resolver.resolveComponentFactory(TextboxComponent);
    }
    else if(componentName==="Table")
    {
      this.componentFactory = this.resolver.resolveComponentFactory(TableComponent);
    }

    this.viewContainerRef = this.demoPageDirective.viewContainerRef;
    this.viewContainerRef.clear();

    this.componentRef = this.viewContainerRef.createComponent(this.componentFactory);
  }
  destroyComponent() {
      this.componentRef.destroy();
  }
  ngOnInit(): void {
  }

}
