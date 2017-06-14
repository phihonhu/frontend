import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Tile } from 'pixie';

@Injectable()
export class Globals {
  archive_is_cached = false;
  archive_tileList: Tile[] = new Array<Tile>();
  archive_page: number = 0;
  archive_per_page: number = 0;
  archive_last_use_link: string = undefined;
  archive_paging_links: any;
}