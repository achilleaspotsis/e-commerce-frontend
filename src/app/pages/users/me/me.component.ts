import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
    selector: 'app-me',
    templateUrl: './me.component.html',
    styleUrls: ['./me.component.scss']
})
export class MeComponent implements OnInit {

    public user: any = {};

    constructor(
        private ls: LocalStorageService
    ) { }

    ngOnInit() {
        this.user = this.ls.retrieve('user');
    }

}
