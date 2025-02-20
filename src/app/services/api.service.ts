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
}
