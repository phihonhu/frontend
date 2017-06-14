import { Component, OnInit, OnDestroy } from '@angular/core';

import { environment } from '../../../environments/environment';
import { PxStreamItem } from 'pixie';
import { CockpitService } from './cockpit.service';

@Component({
  selector: 'section-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss']
})
export class CockpitComponent implements OnInit, OnDestroy {

  version: string = environment.version;
  streamItems: PxStreamItem[] = new Array<PxStreamItem>();
  groupBy = 'streamDatetime';
  private alive = true;

  constructor(private cockpitService: CockpitService) {
  }

  ngOnInit() {
    this.getStreams();
  }

  getStreams(useLink?: string) {
    if ([null, undefined, ''].indexOf(useLink) === 1) {
      useLink = '/api/streams';
    }

    // this.cockpitService.getStreams(useLink)
    //   .takeWhile(() => this.alive)
    //   .map(response => response.json() as PxStreamItem[])
    //   .subscribe(result => {
    //     this.streamItems = result;
    //   },
    //   error => {
    //     console.log(error)
    //   });

    // init dummy data
    if (this.streamItems === undefined || this.streamItems.length === 0) {
      this.streamsDummy();
    }
  }

  public ngOnDestroy() {
    this.alive = false;
  }

  private streamsDummy() {
    const iconUrl = 'http://www.sky-aims.com/wp-content/uploads/2016/07/icon-user.png';
    this.streamItems.push(new PxStreamItem(
      iconUrl,
      'Contact Request',
      'Fabian Portmann has sent you a contact request.',
      '27.03.2017 18:02 Uhr', '27.03.2017', 'contact'));

    this.streamItems.push(new PxStreamItem(
      iconUrl,
      'Contact Request',
      'Fabian Portmann has sent you a contact request.',
      '27.03.2017 18:02 Uhr', '27.03.2017', 'contact'));

    this.streamItems.push(new PxStreamItem(
      iconUrl,
      'You have a new Document in PEAX:',
      'Your payments from 28.03.2017 from PEAX AG.',
      '28.03.2017 18:02 Uhr', '28.03.2017', 'document'));

    this.streamItems.push(new PxStreamItem(
      iconUrl,
      'Contact Request',
      'Fabian Portmann has sent you a contact request.',
      '28.03.2017 18:02 Uhr', '28.03.2017', 'contact'));

    this.streamItems.push(new PxStreamItem(
      iconUrl,
      'Contact Request',
      'Fabian Portmann has sent you a contact request.',
      '27.03.2017 18:02 Uhr', '27.03.2017', 'contact'));

    this.streamItems.push(new PxStreamItem(
      iconUrl,
      'Contact Request',
      'Fabian Portmann has sent you a contact request.',
      '27.03.2017 18:02 Uhr', '27.03.2017', 'contact'));

    this.streamItems.push(new PxStreamItem(
      iconUrl,
      'You have a new Document in PEAX:',
      'Your payments from 28.03.2017 from PEAX AG.',
      '28.03.2017 18:02 Uhr', '28.03.2017', 'document'));

    this.streamItems.push(new PxStreamItem(
      iconUrl,
      'Contact Request',
      'Fabian Portmann has sent you a contact request.',
      '28.03.2017 18:02 Uhr', '28.03.2017', 'contact'));
  }

}
