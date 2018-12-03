import { Component, OnInit, Input } from '@angular/core';
import { IJobs } from '../_interface/jobs';

@Component({
  selector: 'app-job-overview',
  templateUrl: './job-overview.component.html',
  styleUrls: ['./job-overview.component.scss']
})
export class JobOverviewComponent implements OnInit {

  @Input() job: IJobs[];

  jobOverviewTitle = 'Aufträge für Handwerker und Dienstleister';

  constructor() { }

  ngOnInit() {
  }

}
