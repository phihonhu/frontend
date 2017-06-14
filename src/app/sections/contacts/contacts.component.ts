import { Component, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../../environments/environment';
import { Post } from 'pixie';

@Component({
  selector: 'section-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

    posts: Post[];

    constructor(private _http: Http) { }

    ngOnInit() { 
        
        /*
        this.getPostsByBlogger()
            .subscribe(x => this.posts = x);
        */

        let myPosts: Post[] = new Array();

        let entry1: Post = { "title": "Learn Angular", "category": "tech" };
        let entry2: Post = { "title": "Forrest Gump Reviews", "category": "movie" };
        let entry3: Post = { "title": "Yoga Meditation", "category": "lifestyle" };
        let entry4: Post = { "title": "What is Promises?", "category": "tech" };
        let entry5: Post = { "title": "Star Wars Reviews", "category": "movie" };
        let entry6: Post = { "title": "Diving in Komodo", "category": "lifestyle" };

        myPosts.push(entry1);
        myPosts.push(entry2);
        myPosts.push(entry3);
        myPosts.push(entry4);
        myPosts.push(entry5);
        myPosts.push(entry6);

        this.posts = myPosts;
    }

    changeData() {
        
        let myPosts: Post[] = new Array();

        let entry1: Post = { "title": "Learn Raspberry PI", "category": "tech" };
        let entry2: Post = { "title": "X-MEN Reviews", "category": "movie" };
        let entry3: Post = { "title": "Taichi Meditation", "category": "lifestyle" };
        let entry4: Post = { "title": "What is Observables?", "category": "tech" };
        let entry5: Post = { "title": "Star Wars Trilogy", "category": "movie" };
        let entry6: Post = { "title": "Diving in Antarctica", "category": "lifestyle" };

        myPosts.push(entry1);
        myPosts.push(entry2);
        myPosts.push(entry3);
        myPosts.push(entry4);
        myPosts.push(entry5);
        myPosts.push(entry6);

        this.posts = myPosts;
    }

    /*
    getPostsByBlogger() {
        
        const url = '/mock-posts.json';
        return this._http.get(url)
            .map(x => x.json());
        
    }
    */

}
