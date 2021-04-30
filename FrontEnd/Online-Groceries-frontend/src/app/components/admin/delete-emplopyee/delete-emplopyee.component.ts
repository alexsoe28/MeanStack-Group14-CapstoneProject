import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-delete-emplopyee',
  templateUrl: './delete-emplopyee.component.html',
  styleUrls: ['./delete-emplopyee.component.css']
})
export class DeleteEmplopyeeComponent implements OnInit {

  constructor(public router:Router, private fb:FormBuilder, public uSer:UsersService) { }
  deleteEmpForm = this.fb.group({
    userId: ['', [Validators.required]]
	})

  ngOnInit(): void {
  }

  deleteEmp(){
    const userId = this.deleteEmpForm.get("userId") as FormControl;
    let user = { "userId": userId.value.toString()};
    this.uSer.deleteUserByID(user);
  }

}
