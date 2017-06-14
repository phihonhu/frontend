import { Component, OnDestroy, OnInit } from '@angular/core';
import { ArchiveService } from './archive.service';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/takeWhile";
import { Tile } from 'pixie';
import { Globals} from '../../core/globals/globals';

@Component({
  selector: 'section-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  tileList: Tile[] = new Array<Tile>();
  page: number = 0;
  per_page: number = 0;
  last_use_link: string = undefined;
  paging_links: any;

  // Clean up subscriptions
  private alive: boolean = true;

  constructor(private archiveService: ArchiveService, private globals: Globals) { }

  ngOnInit() {

    if (this.globals.archive_is_cached === true) {
      // Initialize with cached
      this.tileList = this.globals.archive_tileList;
      this.page = this.globals.archive_page;
      this.per_page = this.globals.archive_per_page;
      this.last_use_link = this.globals.archive_last_use_link;
      this.paging_links = this.globals.archive_paging_links;

    } else {
      // Init call (Get from scratch)
      this.setPage(1);
      this.setPerPage(100);
      this.globals.archive_is_cached = true;

      this.getTiles();
    }
  }

  setTileList(tileList: Tile[]) {
    this.tileList = tileList;
    this.globals.archive_tileList = tileList;
  }

  setPage(pageNumber:number) {
    this.page = pageNumber;
    this.globals.archive_page = pageNumber;
  }

  setPerPage(perPage:number) {
    this.per_page = perPage;
    this.globals.archive_per_page = perPage;
  }

  setLastUseLink(lastUseLink:string) {
    this.last_use_link = lastUseLink;
    this.globals.archive_last_use_link = lastUseLink;
  }

  setPagingLinks(pagingLinks:any) {
    this.paging_links = pagingLinks;
    this.globals.archive_paging_links = pagingLinks;
  }

  loadAdditionalData(isIt: boolean) {
    if (this.paging_links.next !== undefined && this.paging_links.next !== this.last_use_link) {

      this.setLastUseLink(this.paging_links.next);
      this.getTiles(this.paging_links.next);
    }
  }

  getTiles(useLink?: string) {
    if (useLink === undefined) {
      useLink = "/api/tiles?page=" + this.page + "&per_page=" + this.per_page;
    }

    this.archiveService.getTiles(useLink)
      .takeWhile(() => this.alive)
      .subscribe(tileDataArray => {
        this.addToTileListData(tileDataArray);
        this.setPagingLinks(tileDataArray.link);
    });

  }

  addToTileListData(tileDataArray: any) {

    // Build temp array
    let tempTileDataArray: Tile[] = new Array<Tile>();

    for (let tileData of tileDataArray.body) {
      let tile: Tile = {'title': tileData.title, 'image': tileData.image} as Tile;
      tempTileDataArray.push(tile);
    }

    // Merge temp array with visible data
    this.setTileList(this.tileList.concat(tempTileDataArray));
  }

  public ngOnDestroy() {
    this.alive = false;
  }
}
