import { Component, OnInit } from '@angular/core';
import {User} from "../../interfaces/User";
import {ActivatedRoute, Router} from "@angular/router";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: User

  constructor(private userService: UsersService, private activatedRoute : ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      this.userService.getUser(params.id).subscribe(value => this.user =value)
    })
  }

  ngOnInit(): void {
  }

}
