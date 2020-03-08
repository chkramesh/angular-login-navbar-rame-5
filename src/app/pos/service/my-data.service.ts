import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';
// import { HttpClient } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable, throwError as observableThrowError } from 'rxjs'

import { Member } from '../members/member.model';

const httpOptions = { headers: new HttpHeaders({ 'Content-type': 'application/json' }) }

@Injectable({
  providedIn: 'root'
})
export class MyDataService {

    private messageSource = new BehaviorSubject('default message');
    currentMessage = this.messageSource.asObservable();

    //constructor() { }
    constructor(
        private httpClient: HttpClient
    ) {
    }

    changeMessage(message: string) {
        this.messageSource.next(message)
    }

    //@GetMapping("/api/test/members")
    //  let serviceUrl = 'http://localhost:8080/api/auth/signin';

    getMembers(): Observable<any> {
        //console.log('UserService getUser id ===== ' + id);

        //let serviceUrl = 'http://localhost:8080/api/auth/getUserTest';
        //let serviceUrl = 'http://localhost:8080/api/auth/members';
        let serviceUrl = 'http://localhost:8080/api/test/members';

        // const resObj = this.httpClient.get<IUser>(`${serviceUrl}/${id}`);
        const resObj = this.httpClient.get<any>(`${serviceUrl}`);
        console.dir(resObj);
        return resObj;

        //return this.httpClient.get<IUser>(`${serviceUrl}/${id}`);
        //return IUser;
    }

    /*
    getMembers(): Observable<Member> {
        console.log('test call getMembers');
        const userObservable = this.getMembersTest().pipe(
            //catchError(transformError)
        )

        //console.log('UserServicegetCurrentUser userObservable= ' + userObservable);
        //console.dir(userObservable);

        userObservable.subscribe(
            //user => this.currentUser.next(user),
            err => observableThrowError(err)
        )

        console.dir(userObservable);
        return userObservable
    }
    */

    getMembers_notWorking() {
        console.log("test call getMembers 0");
        
        //return this.httpClient.get<Member[]>('http://localhost:8080/api/auth/members');
        //return this.httpClient.get<Member[]>('http://localhost:8080/api/test/members');

       // let serviceUrl = 'http://localhost:8080/api/auth/members';

        let serviceUrl = 'http://localhost:8080/api/auth/getUserTest';

        // const resObj = this.httpClient.get<IUser>(`${serviceUrl}/${id}`);
        const resObj = this.httpClient.get<any>(`${serviceUrl}`);
        console.dir(resObj);
        return resObj;

        /*

        return this.httpClient.get<Member>(serviceUrl, httpOptions).pipe(map(data => {
            console.log("test call getMembers 1");
            // this.httpClient.post<any>(serviceUrl, credentials, httpOptions).pipe(map(data => {
            // console.log('AuthService login 3 user == ' + data);

           
            console.log('AuthService login BEFORE 4 - 1 user.accesstoken == ' + data.accessToken);
            console.dir(data);
            console.log('AuthService login AFTER 4 - 2 user.accesstoken == ' + data.accessToken);

            if (data && data.accessToken) {
                // console.dir(data.authorities);   
                // console.dir(data.authorities[0]); 
                // console.log("AuthService Login resp 4 - 3 authorities = " + data.authorities + ' username = ' + data.username); 
                console.log("AuthService Login resp 4 - 3 - 1 authorities = " + data.authorities[0].authority);
                console.log("AuthService Login resp 4 - 4 email = " + data.userDo.email + ' username = ' + data.userDo.username + ' firstName = ' + data.userDo.name.first);

                this.saveToken(data.accessToken);
                this.saveUsername(data.username);
                this.saveAuthorities(data.authorities);

                myAuthStatus = this.buildIAuthStatus({
                    isAuthenticated: true,
                    // userRole: data.authorities[0].authority,
                    userRole: data.authorities[0].authority.toLowerCase().includes('cashier') ? Role.Cashier
                        : data.authorities[0].authority.toLowerCase().includes('clerk') ? Role.Clerk
                            : data.authorities[0].authority.toLowerCase().includes('manager') ? Role.Manager
                                : data.authorities[0].authority.toLowerCase().includes('user') ? Role.User
                                    : data.authorities[0].authority.toLowerCase().includes('admin') ? Role.Admin
                                        : Role.None,
                    //userRole: this.getAuthorities[0],
                    //userRole: this.getAuthorities,
                    userId: data.userDo.username
                });

                window.sessionStorage.setItem('currentMyAuthStatus', JSON.stringify(myAuthStatus));
                //this.saveCurrentMyAuthStatus(myAuthStatus);                          
                this.currentAuthStatusSubject.next(myAuthStatus);

            } else {
                //return false;
                return myAuthStatus as IAuthStatus;
            }
            //return user;
            return myAuthStatus as IAuthStatus;
        }),
            // catchError(transformError))
            catchError(transformError))
        */
      //}
    }

}
