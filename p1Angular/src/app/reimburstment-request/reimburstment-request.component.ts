import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reimburstment-request',
  templateUrl: './reimburstment-request.component.html',
  styleUrls: ['./reimburstment-request.component.css']
})
export class ReimburstmentRequestComponent implements OnInit {
title = "Pending Reimburstment Requests:";
  constructor() { }

  ngOnInit(): void {
  }

}
