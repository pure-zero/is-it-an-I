import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-i-check',
  templateUrl: './i-check.component.html',
  styleUrls: ['./i-check.component.css']
})
export class ICheckComponent implements OnInit {

  private initialText: string;
  private sub: any;
  constructor(
    private route: ActivatedRoute,
  ) {}
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.initialText = params['text'];
    });
  }
}
