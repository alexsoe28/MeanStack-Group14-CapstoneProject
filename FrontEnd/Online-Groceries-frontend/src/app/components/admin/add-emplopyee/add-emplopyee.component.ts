import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService, UserRole, UserStatus} from 'src/app/services/users/users.service';

@Component({
  selector: 'app-add-emplopyee',
  templateUrl: './add-emplopyee.component.html',
  styleUrls: ['./add-emplopyee.component.css']
})
export class AddEmplopyeeComponent implements OnInit {
  hidepass = true;
  constructor(public router:Router, private fb:FormBuilder, public uSer:UsersService) { }

  addEmpForm = this.fb.group({
    fname: ['', [Validators.required]],
    lname: ['', [Validators.required]],
    dob: ['', [Validators.required]],
		uname: ['', [Validators.required]],
		password: ['', [Validators.required]],
	})

  ngOnInit(): void {
  }
  registerEmp(){
    const firstname = this.addEmpForm.get("fname") as FormControl;
    const lastname = this.addEmpForm.get("lname") as FormControl;
    const dateofbirth = this.addEmpForm.get("dob") as FormControl;
    const username = this.addEmpForm.get("uname") as FormControl;
		const password = this.addEmpForm.get("password") as FormControl;
    let conatct = {
      "firstname":firstname.value.toString(),
      "lastname":lastname.value.toString(),
      "dob": dateofbirth.value
    }
    let user  = {        
      "role": "employee" as UserRole,
      "status": "normal" as UserStatus,
      "username": username.value.toString(),
      "password": password.value.toString(),
      "contact": conatct
    };
    this.uSer.addUser(user);

  }

}
