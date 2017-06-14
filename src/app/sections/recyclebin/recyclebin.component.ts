import { Component, OnInit } from '@angular/core';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'section-recyclebin',
  templateUrl: './recyclebin.component.html',
  styleUrls: ['./recyclebin.component.scss']
})
export class RecyclebinComponent implements OnInit {

  version: string = environment.version;

  constructor() { }

  ngOnInit() { }

}
