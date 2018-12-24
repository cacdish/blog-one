import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  @Input() posts: string[];
  @Input() postLoveIts: number = 0;

  constructor() { }

  ngOnInit() {
  }


  setLoveIts(loveIt) {
    this.postLoveIts = loveIt;
  }

  @Input() getPostLoveIts() {
    return this.postLoveIts;
  }

}