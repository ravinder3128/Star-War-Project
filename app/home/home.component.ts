import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable}  from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/observable/fromEvent';


import { User, Planet } from '../_models/index';
import { PlanetService, OrderByPipe } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html',
    pipes: [OrderByPipe]  
})

export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    planets: Planet[] = [];
    column: string = 'population';
    direction: number = 1;
    planetNameControl = new FormControl();
    debounceTime: number = 1000 ;


    constructor(private planetService: PlanetService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        let loggedInUser = this.currentUser ;
        if(loggedInUser.name == 'Luke Skywalker'){
            this.debounceTime = 400 ;
        } 
    }

    ngOnInit() {
        this.loadAllPlanets();
       // debounce keystroke events
       this.planetNameControl.valueChanges
         .debounceTime(this.debounceTime)
         .subscribe(newValue => { this.searchPlanet(newValue) });
    }

    private loadAllPlanets() {
        this.planetService.getAll().subscribe(planets => { 
            this.planets = planets.results; 
        });
    }

    private customClass(number: number, population: string) {
        let a = [ 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
    'ten'];
        return (population != 'unknown')? a[number] : 'basic' ;
    }
    private searchPlanet(planet: string) {
        this.planetService.searchPlanet(planet).subscribe(planets => { 
            this.planets = planets.results; 
        }); 
    }
}