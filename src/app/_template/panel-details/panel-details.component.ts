import { Component, OnInit, Input } from '@angular/core';
import { JobsService } from '../../_service/jobs.service';
import { IJobs } from '../../_interface/jobs';

@Component({
  selector: 'app-panel-details',
  templateUrl: './panel-details.component.html',
  styleUrls: ['./panel-details.component.scss']
})
export class PanelDetailsComponent implements OnInit {

  @Input() job: IJobs[];
  @Input() selectedJob;

  today: number = Date.now();

  constructor(private _jobsService: JobsService) { }

  ngOnInit() {
    
  }

}
