import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CinemaService } from '../services/cinema.service';

@Component({
  selector: 'app-my-movie-component',
  templateUrl: './my-movie-component.component.html',
  styleUrls: ['./my-movie-component.component.css']
})
export class MyMovieComponentComponent implements OnInit {
  id: number;
  movie = {};

  constructor(private route: ActivatedRoute, public moviesList: CinemaService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => this.id = Number(params['id']));
    this.movie = this.moviesList.getMovie(this.id);
  }

}
