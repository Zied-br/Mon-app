import{Component} from '@angular/core';
import{Ihotel} from './hotel';
@Component(
    {   selector:'app-hotel-list',
        templateUrl:'./hotel-list.component.html'
    }
)

export class HotelListComponent {
    titl='Hotel List';
    hotels:Ihotel[]=[
        {
            id:1,
            name:'mahdia',
            price:250.52,
            description: 'tres belle vue',
            imageUrl:'assets/img/1.jpg',
            rating:2.5
        },
        {
            id:2,
            name:'tunis',
            price:150,
            description: 'vue en mer',
            imageUrl:'assets/img/2.jpg',
            rating:4
        },
        {
            id:3,
            name:'monastir',
            price:322.54,
            description: 'cinq etoiles',
            imageUrl:'assets/img/3.jpg',
            rating:3.5
        },
        {
            id:4,
            name:'hammamet',
            price:140.26,
            description: 'vue de mer',
            imageUrl:'assets/img/4.jpg' ,
            rating:1.5
        },
        {
            id:5,
            name:'sousse',
            price:220.3,
            description: 'plage',
            imageUrl:'assets/img/5.jpg',
            rating:2
        }
    ];

private _hotelfilter="";
public filteredhotels:Ihotel[]=[];
ngOnInit(){
    this.filteredhotels=this.hotels;
    this.hotelFilter="";
}
    public show :boolean;
    public showing():void{
        this.show=!this.show;



    }
    public afficher(show):string{
        if (!show)
        return("afficher");
        else
        return("cacher");
    }
    public get hotelFilter(){
        return this._hotelfilter;

    }
    public set hotelFilter(filter:string){
        this._hotelfilter=filter;
      this.filteredhotels=this.hotelFilter?this.filterHotels(this.hotelFilter):this.hotels;
    }
    private filterHotels(criteria :string):Ihotel[]{
criteria=criteria.toLocaleLowerCase();
const res=this.hotels.filter(
   ( hotel:Ihotel)=>hotel.name.toLocaleLowerCase().indexOf(criteria) !>-1
);
return res;
    }
}
