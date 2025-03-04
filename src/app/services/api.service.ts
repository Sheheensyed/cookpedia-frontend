import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipeModel } from '../admin/model/recipeModel';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  server_url = "https://cookpedia-server-jufa.onrender.com"
  constructor(private http: HttpClient) { }



  getAllRecipeApi() {
    return this.http.get(`${this.server_url}/all-recipes`)
  }

  // api to add testimony
  addTestimonyApi(reqBody: any) {
    return this.http.post(`${this.server_url}/add-testimonial`, reqBody)
  }

  // api to register user
  addUserApi(reqBody: any) {
    return this.http.post(`${this.server_url}/register`, reqBody)
  }

  // api to login user
  loginApi(reqBody: any) {
    return this.http.post(`${this.server_url}/login`, reqBody)
  }

  appendToken() {
    let headers = new HttpHeaders()
    const token = sessionStorage.getItem('token')
    if (token) {
      headers = headers.append('Authorization', `Bearer ${token}`)
    }
    return { headers }
  }

  // api to get a single recipe
  singleRecipeApi(recipeId: string) {
    return this.http.get(`${this.server_url}/recipe/${recipeId}/view`, this.appendToken())
  }

  // api to get similar recipe
  similarRecipeApi(cuisine: any) {
    return this.http.get(`${this.server_url}/related-recipes?cuisine=${cuisine}`, this.appendToken())
  }

  // api to download recipe
  downloadRecipeApi(recipeId: any, reqBody: any) {
    return this.http.post(`${this.server_url}/recipe/${recipeId}/download`, reqBody, this.appendToken())
  }
  // api to save recipe
  saveRecipeApi(recipeId: any, reqBody: any) {
    return this.http.post(`${this.server_url}/recipe/${recipeId}/save`, reqBody, this.appendToken())
  }

  // api to get user saved recipe
  getUserSavedRecipesApi() {
    return this.http.get(`${this.server_url}/get-save-recipes`, this.appendToken())
  }

  // delete saved recipe
  deleteSavedRecipeApi(id: string) {
    return this.http.delete(`${this.server_url}/save-recipes/${id}/remove`, this.appendToken())
  }

  // api to get user recipe download list
  getDownloadListApi() {
    return this.http.get(`${this.server_url}/user-downloads`, this.appendToken())
  }

  // api to user-edit
  editUserApi(reqBody: any) {
    return this.http.post(`${this.server_url}/user/edit`, reqBody, this.appendToken())
  }

  // api to get all users
  allUserApi() {
    return this.http.get(`${this.server_url}/all-users`, this.appendToken())
  }

  // api to get all users
  allDownloadListApi() {
    return this.http.get(`${this.server_url}/download-list`, this.appendToken())
  }

  // api to get all feedback
  allFeedbackApi() {
    return this.http.get(`${this.server_url}/testimonials`, this.appendToken())
  }

  //http://localhost:4000/feedback/67addaa394e64bea63dad1a3/update?status=Approved
  updateFeedBackStatusApi(feedbackId: string, status: string) {
    return this.http.get(`${this.server_url}/feedback/${feedbackId}/update?status=${status}`, this.appendToken())
  }

  // api to get approved feedback
  approvedFeedbackApi() {
    return this.http.get(`${this.server_url}/approved-feedback`)
  }

  // Api to add recipe
  addRecipeApi(reqBody: any) {
    return this.http.post(`${this.server_url}/add-recipe`, reqBody, this.appendToken())
  }

  editRecipeApi(id: string, reqBody: RecipeModel) {
    return this.http.put(`${this.server_url}/recipe/${id}/edit`, reqBody, this.appendToken())
  }

  deleteRecipeApi(id: string) {
    return this.http.delete(`${this.server_url}/recipe/${id}/delete`, this.appendToken())
  }

  getChartDataApi() {
    this.allDownloadListApi().subscribe((res: any) => {
      console.log(res);

      // input : [{recipeCount,count}]
      // output : [{name:cuisine,y:totalCount}]

      let downloadArrayList: any = []
      let output: any = {}
      res.forEach((item: any) => {
        // item = {recipeCuisine:"Mexican",count:4}
        let cuisine = item.recipeCuisine // cuisine=mexican
        let currentCount = item.count // currentCount=4
        if (output.hasOwnProperty(cuisine)) {
          output[cuisine] += currentCount
        } else {
          output[cuisine] = currentCount // output = {mexican = 4}
        }
      })
      for (let cuisine in output) {
        downloadArrayList.push({ name: cuisine, y: output[cuisine] })
      }
      console.log(downloadArrayList);
      localStorage.setItem('chart', JSON.stringify(downloadArrayList))
    })
  }
}
