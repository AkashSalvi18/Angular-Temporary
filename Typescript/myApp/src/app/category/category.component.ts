import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  imports: [],
  templateUrl: './category.component.html',
  styles: ``
})
export class CategoryComponent {
  id:number | undefined;
  name:string | undefined;

  constructor(private route : ActivatedRoute){}

  ngOnInit(){
    this.route.queryParams.subscribe((p)=>{
      this.id = p['id'];
      this.name = p['name'];
    }
    )
  }
}
