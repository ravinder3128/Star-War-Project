import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    constructor(private http: Http) { }

    login(username: string, password: string) {
        return this.http.get('http://swapi.co/api/people/?search='+username)
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                let currentUser = (user.results[0])? user.results[0] : null; 
                if (user.count > 0 && currentUser.birth_year == password) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(currentUser));
                } else {
                    return 'error' ;
                }
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}