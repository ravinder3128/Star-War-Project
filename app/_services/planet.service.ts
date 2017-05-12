import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User } from '../_models/index';

@Injectable()
export class PlanetService {
    constructor(private http: Http) { }

    getAll() {
        return this.http.get('http://swapi.co/api/planets').map((response: Response) => response.json());
    }

    searchPlanet(planet: string) {
        return this.http.get('http://swapi.co/api/planets?search='+planet).map((response: Response) => response.json());
    }

}