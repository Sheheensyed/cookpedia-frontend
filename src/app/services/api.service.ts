import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  server_url = "http://localhost:4000"
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
  editUserApi(reqBody:any){
    return this.http.post(`${this.server_url}/user/edit`,reqBody,this.appendToken())
  }

}
