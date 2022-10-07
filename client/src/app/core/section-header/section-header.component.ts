import { Component, OnInit } from '@angular/core';
import {BreadcrumbService} from "xng-breadcrumb";
import {Observable} from "rxjs";

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss']
})
export class SectionHeaderComponent implements OnInit {
  brandcrumb$: Observable<any[]>;
  constructor(private bcService:BreadcrumbService) { }

  ngOnInit(){
    this.brandcrumb$ = this.bcService.breadcrumbs$;
  }

}
