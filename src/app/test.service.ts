import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {
private apiurl="https://jsonplaceholder.typicode.com/postss";
  constructor(private http:HttpClient) { }
  
  getData():Observable<any>{
    return this.http.get<any>(this.apiurl).pipe(catchError(this.handleError));
  }

  // handleError(error: HttpErrorResponse){
  //   if (error.status === 0) {
  //     // A client-side or network error occurred. Handle it accordingly.
  //   console.error('An error occurred:', error.error);
  //   }
  //  else {
  //   // The backend returned an unsuccessful response code.
  //   // The response body may contain clues as to what went wrong.
  //   console.error(
  //     `Backend returned code ${error.status}, body was: `, error.error);
  // }
  // // Return an observable with a user-facing error message.
  //   return throwError(()=> new Error('Something bad happened; please try again later.'));
    
  // }

  // handleError(err:any){
  //   if(err instanceof HttpErrorResponse ){

  //   }
  //   else{

  //   }
  //   return throwError(()=> new Error('Something bad happened; please try again later.'));
  // }

   handleError(error: HttpErrorResponse){
    if(error.status===404 ){
      return throwError(()=> new Error(`The server can not find the requested resource,Client-side error with status code ${error.status}`));
      
    }
    else{
      console.error('An error occurred:', error.error);
    }
    return throwError(()=> new Error(error.message));
  }
}
