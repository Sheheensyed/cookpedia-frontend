import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrl: './download.component.css'
})
export class DownloadComponent {
  allDownload: any = []

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getAllDownloadList()
  }

  getAllDownloadList() {
    this.api.allDownloadListApi().subscribe((res: any) => {
      this.allDownload = res
      console.log(this.allDownload);
    })
  }
}