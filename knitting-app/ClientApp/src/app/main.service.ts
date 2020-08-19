import { Injectable } from  '@angular/core';
import { AngularFireAuth } from  "@angular/fire/auth";
import { User } from  './models/user';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { MatDialog } from "@angular/material/dialog";
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { Pattern } from './models/pattern';

@Injectable({
    providedIn: 'root'
})
export class MainService {
    
    constructor(public afAuth: AngularFireAuth, public router: Router, public dialog: MatDialog) {}

    public userPatterns: Pattern[];
    public users: User[];
    public activeUser: User; // placeholder until actual user auth is set up
    public activePattern: Pattern;

    async authenticateUser(email: string, password: string) {
        try {
            this.users.find(user => user.email == email && user.password == password);            
            this.activeUser = this.users.find(u => u.id == 1); // temporary
            this.router.navigate(['home']);
        }
        catch(e) {
            this.openErrorDialog("Unable to find user, please try again.");
        }
        
        /*firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                this.router.navigate(['home']);

                // user info stored in "currentUser" property of firebase auth
                console.log(firebase.auth().currentUser);

                // TODO: get patterns and other info pertaining to logged in user
                this.setupData();
                this.activeUser = this.users.find(u => u.id == 1);
            })
            .catch( (error) => {
                switch(error.code) {
                    case "auth/wrong-password": {
                        this.openErrorDialog("Incorrect password, please try again.");
                        break;
                    }
                    case "auth/user-not-found": {
                        this.openErrorDialog("User not found!");
                        break;
                    }
                    case "auth/invalid-email": {
                        this.openErrorDialog("Email not found, please try again.");
                        break;
                    }
                    case "auth/too-many-requests": {
                        this.openErrorDialog("Too many unsuccessful login attempts. Please try again later.");
                        break;
                    }
                }
        });*/
    }

    openErrorDialog(errorMessage: string) {
        const dialogRef = this.dialog.open(ErrorDialogComponent, {
            data: {
                errorText: errorMessage
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log(result);
        });
    }

    route(path: string) {
        this.router.navigate([path]);
    }

    // TODO: create service methods to grab table data from firebase db
    // TODO EVENTUALLY: move all front end data from fb to a controller method, throw info in objects

    setupData() {
        var today = new Date(); // temporary
    
        this.userPatterns = [{
          id: 1,
          name: "ABC Knit Baby Blanket",
          lastEdited: new Date(today.getDate()), // temporary
          steps: "",
          userId: 2
        },
        {
          id: 2,
          name: "15th Street Wrap",
          lastEdited: new Date(today.getDate() - 5), // temporary
          steps: "",
          userId: 1
        },
        {
          id: 3,
          name: "Easy PZ Socks",
          lastEdited: new Date(today.getDate() - 5), // temporary
          steps: "",
          userId: 3
        },
        {
          id: 4,
          name: "Cable Hat for Beginners",
          lastEdited: new Date(today.getDate() - 5), // temporary
          steps: "",
          userId: 1
        },
        {
          id: 5,
          name: "Simple Beauty Scarf",
          lastEdited: new Date(today.getDate() - 5), // temporary
          steps: "",
          userId: 24
        }];

        this.users = [{
                id: 1,
                email: "rsmith@gmail.com",
                firstname: "Rayleigh",
                lastname: "Smith",
                password: "password"
            },
            {
                id: 2,
                email: "trevthajohn@gmail.com",
                firstname: "Jonathon",
                lastname: "Trevorly",
                password: "password"
            },
            {
                id: 3,
                email: "ilovemykittens@comcast.net",
                firstname: "Sue",
                lastname: "Malaney",
                password: "password"
            }
        ];
    }
}