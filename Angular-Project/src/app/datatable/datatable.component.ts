import {Component} from "@angular/core";
import {Http} from "@angular/http";

@Component({
    selector: 'datatable',
    template: `
	  <div >
		<create-transaction></create-transaction>
		<router-outlet></router-outlet>
		<table-details></table-details>
	  </div>
	  `,
	
})
export class DatatableComponent implements OnInit {

    public data:any;
    public filterQuery = "";
    public rowsOnPage = 10;
    
    public sortOrder = "asc";

    constructor(private http: Http) {
    }

    ngOnInit(): void {
        this.http.get("app/datatable/datatable.json")
            .subscribe((data)=> {
                setTimeout(()=> {
                    this.data = data.json();
                }, 1000);
            });
    }

    public toInt(num: string) {
        return +num;
    }

    public sortByWordLength = (a: any) => {
        return a.city.length;
    }
  
}