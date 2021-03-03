import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { NEVER } from 'rxjs';

@Component({
  selector: 'app-push-and-splice',
  templateUrl: './push-and-splice.component.html',
  styleUrls: ['./push-and-splice.component.css'],
})
export class PushAndSpliceComponent implements OnInit {
  user = [];
  addData(uname: any) {
    this.user.push({
      name: uname.value,
    });
  }

  constructor() {}

  ngOnInit(): void {}
}
