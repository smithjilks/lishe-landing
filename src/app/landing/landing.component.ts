import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { Renderer2 } from '@angular/core'


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private renderer: Renderer2) {}

  


  ngOnInit(): void {

  }

}
