import { Component, OnInit, Input } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { MainService } from '../main.service';
import { CreateAccountDialogComponent } from '../create-account-dialog/create-account-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public username: string;
  public password: string;


  constructor(public afAuth: AngularFireAuth, private service: MainService, public dialog: MatDialog) { }

  ngOnInit() {
    this.service.setupData();
  }

  login() {
    // MIGHT NOT USE FIREBASE TBH!!!
    //this.service.authenticateUser("admin@admin.com", "admin123");
    
    this.service.authenticateUser(this.username, this.password);
    
    // COMMENTED TO MAKE DEVELOPMENT EASIER, UNCOMMENT AFTER ACTIVE USER SETTINGS PUT IN
    //this.service.authenticateUser(this.username, this.password);

  }

  openCreateAccountDialog() {
    const dialogRef = this.dialog.open(CreateAccountDialogComponent, {
        data: {
            username: this.username,
            password: this.password
        }
    });

    dialogRef.afterClosed().subscribe(result => {
        console.log(result);
    });
}

}
