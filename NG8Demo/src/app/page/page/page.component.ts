import { Component, OnInit, ViewContainerRef,ViewChild, TemplateRef } from '@angular/core';
import { viewClassName } from '@angular/compiler';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  constructor() { }
  @ViewChild('selectTypeRef', {read:ViewContainerRef, static:true}) selectTypeContainerRef : ViewContainerRef;
  @ViewChild('textBox',{static:true}) textBoxTypeRef : TemplateRef<any>;
  @ViewChild('dropDown',{static:true}) dropDownTypeRef : TemplateRef<any>;
  @ViewChild('checkBox',{static:true}) checkBoxTypeRef : TemplateRef<any>;
  @ViewChild('table',{static:true}) tableTypeRef : TemplateRef<any>;

  public selectionType:any=[];
  ngOnInit() {
    this.selectionType = [{
      SelectionTypeId: 1,
      SelectionTypeName: 'TextBox',
      IsActive: false
    },{SelectionTypeId: 2,
      SelectionTypeName: 'DropDown',
      IsActive: false
    },{SelectionTypeId: 3,
      SelectionTypeName: 'CheckBox',
      IsActive: false
    },{SelectionTypeId: 4,
      SelectionTypeName: 'Table',
      IsActive: false
    }
    ];
  }

  onSelectionTypeSelect(name){
    this.selectTypeContainerRef.remove();
    switch(name){
      case "TextBox":
        this.selectTypeContainerRef.createEmbeddedView(this.textBoxTypeRef);
        break;
    case "DropDown":
      this.selectTypeContainerRef.createEmbeddedView(this.dropDownTypeRef);
      break;
    case "CheckBox":
      this.selectTypeContainerRef.createEmbeddedView(this.checkBoxTypeRef);
      break;
    case "Table":
      this.selectTypeContainerRef.createEmbeddedView(this.tableTypeRef);
      break;
    }
  }

  getTemplate(id){

  }

}
