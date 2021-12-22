import { Component } from '@angular/core';
import { MyServiceService } from './my-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  alluser: object;
  nm:any;
  em:any;
  ps:any;
  cps:any;
  cpss:any;
  wrong:boolean;
  chklen:boolean;
  len:any
  // name:any;
  // email:any;
  // password:any;
  // cpassword:any;
  constructor(private myser:MyServiceService) { }
 userobj = {
    name: '',
    email: '',
    password: '',
    cpassword: ''
  }

  onSubmit(form) {
  //   if(this.name && this.email && this.password.length>0 && this.cpassword.length>0){
   this.chklen=false;
   this.wrong=false;
    if(this.userobj.name=='' && this.userobj.email== '' && this.userobj.password=='' && this.userobj.cpassword==''){
    
      alert("Please fill all the detail");
    }
    if(this.userobj.name==''){
      this.nm ="name is required!!";
    }
    if(this.userobj.email==''){
      this.em="email required!!";
    }
    if(this.userobj.password==''){
      this.ps="password required!!";
    }
  if(this.userobj.password.length<8){
    this.chklen=true;
   this.len= "minimum 8 character is required"
  }
    if(this.userobj.cpassword==''){
      this.cps="confirm password required!!";
    }
    if(this.userobj.password!=this.userobj.cpassword){
      this.wrong=true;
     this.cpss="Password not matched!!";
    }
    if(this.chklen==false && this.wrong==false){  
      console.log(form);
      this.addUser(form);
      alert("Data added successfully")
    }
   else{
     console.log("error")
   } 
  }
  //  }
  //  else if(this.name==null){
  //   this.nm=("Name is required");
  //  }
  //  else if(this.email==null){
  //   this.em=("Email is required");
  //  }
  //  else if(this.password==null){
  //   this.ps=("Password is required");
  //  }
  //  else if(this.cpassword==null){
  //   this.cps=("Confirm Password is required");
  //  }
  //  else{
  //    alert("field is required")
  //  }
     
  

  addUser(form) {
    this.myser.createUser(form).subscribe((response) => {
      console.log("Data added sucessfully")
    })
  }
  view() {
  if(this.chklen==false && this.wrong==false){
    if(this.userobj.name!='' && this.userobj.email!= '' && this.userobj.password!='' && this.userobj.cpassword!=''){
      this.myser.getUsers().subscribe((response) => {
        this.alluser = response;
        console.log(this.alluser);
      }
      )
    }
     else{
       alert("Please fill all the detail")
     }
  }
  
  }
  edit(user) {
    this.userobj = user;
    this.myser.update(this.userobj).subscribe(() => {
      this.view();
    })
    
  }
  delete(user) {
    alert("Are you sure you want to delete!!");
    this.myser.removeUser(user).subscribe(() => {

      this.view();
    })
  }

}
