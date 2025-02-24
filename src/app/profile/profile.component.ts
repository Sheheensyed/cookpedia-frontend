import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  profileImage: string = 'https://cdn.dummyjson.com/recipe-images/9.webp'

  allUserDownloadList: any = []
  ngOnInit() {
    this.getUserDownloads()
    const user = JSON.parse(sessionStorage.getItem('user') || "")
    if (user.profileImage) {
      this.profileImage = user.profileImage
    }
  }

  constructor(private api: ApiService) { }



  getUserDownloads() {
    this.api.getDownloadListApi().subscribe((res: any) => {
      this.allUserDownloadList = res
      console.log(this.allUserDownloadList);

    })
  }

  getFile(event: any) {
    let uploadFile = event.target.files[0]
    // convert file into url
    let fr = new FileReader()
    fr.readAsDataURL(uploadFile)
    fr.onload = (event: any) => {
      console.log(event.target.result);
      this.profileImage = event.target.result
    }
  }

  updateProfile() {
    this.api.editUserApi({ profileImage: this.profileImage }).subscribe((res: any) => {
      sessionStorage.setItem('user', JSON.stringify(res))
      this.profileImage = res.profileImage
      alert('Profile updated successfully')
    })
  }
}
