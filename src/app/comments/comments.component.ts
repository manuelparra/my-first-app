import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ns-comments',
    templateUrl: './comments.component.html',
    styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    onItemTap(x): void {
        console.dir(x);
    }
}
