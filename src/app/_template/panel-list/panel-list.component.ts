import { Component, OnInit } from '@angular/core';
import { JobsService } from '../../_service/jobs.service';
import { IJobs } from '../../_interface/jobs';

@Component({
  selector: 'app-panel-list',
  templateUrl: './panel-list.component.html',
  styleUrls: ['./panel-list.component.scss'],
  host: {'class': 'panel-list row'}
})
export class PanelListComponent implements OnInit {

  public jobs = [];
  public selectedJob;
  public errorMsg;

  constructor(private _jobsService: JobsService) { }

  ngOnInit() {
    this.getJobs();
  }

  getJobs(): void {
    this._jobsService.getJobs().subscribe(
      data => this.jobs = data['body'],
      error => this.errorMsg = error
    );
  }

  onSelect(job: IJobs): void {
    this.selectedJob = job;
  }
}
