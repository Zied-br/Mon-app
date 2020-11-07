import { Component, Input, OnChanges } from '@angular/core';


@Component({
selector:'app-star-rating',
templateUrl:'./start-rating-component.html',
styleUrls :['./start-rating-component.css']
})

export class StartRatComponent implements OnChanges{
    public starWidth:number;
    @Input()
    public rating:number=5;
ngOnChanges(){
    this.starWidth=this.rating * 125 / 5;
}
}
