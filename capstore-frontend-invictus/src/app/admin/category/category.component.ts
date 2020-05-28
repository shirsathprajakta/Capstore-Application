import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  submitted:boolean=false;
  submitted2:boolean=false;
  addCategoryForm:FormGroup
  updateCategoryForm:FormGroup
  pp=[]
  constructor(private formBuilder:FormBuilder) {
    this.pp.push(1)
    this.pp.push(1)
    this.pp.push(1)
   }

  ngOnInit() {
    this.addCategoryForm=this.formBuilder.group({
      category:['',Validators.required]
    })
    this.updateCategoryForm=this.formBuilder.group({
      category:['',Validators.required]
    })
  }
  addCategory()
  {
    this.submitted=true;
    if(this.addCategoryForm.invalid)
    return;
    console.log("added category")
  }
  updateCategory()
  {
    this.submitted2=true;
    if(this.updateCategoryForm.invalid)
    return;
    console.log("updated category")
  }
  deleteCategory()
  {
    console.log("category deleted")
  }
}
