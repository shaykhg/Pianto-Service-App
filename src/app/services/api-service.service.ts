import {Injectable} from '@angular/core';
import {catchError} from 'rxjs/operators';
import {LoginResponse} from '../models/LoginResponse';
import {Observable, throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {AppConstants} from '../AppConstants';
import {SessionService} from './session.service';
import {User} from '../models/UserDetail';
import {Order, Orders} from '../models/Orders';
import {Extra, Extras} from '../models/Extras';
import {Review} from '../models/Reviews';

@Injectable({
    providedIn: 'root'
})
export class ApiServiceService {

    private headers: HttpHeaders;

    constructor(private http: HttpClient, private session: SessionService) {
        this.setHeaders();
    }

     setHeaders() {
         this.headers = new HttpHeaders();
         this.headers = this.headers.set('Authorization', 'Bearer ' + this.session.getToken());
         console.log('these are headers ', this.headers, 'Authorization', 'Bearer ' + this.session.getToken());
    }

    setToken(token: string) {
        this.headers = new HttpHeaders();
        this.headers = this.headers.set('Authorization', 'Bearer ' + token);
    }

    getOrder(id): Observable<Order> {
        return this.http.get<Order>(AppConstants.API.All_ORDERS + '/' + id, {headers: this.headers});
    }

    getAllOrders(user): Observable<Orders> {
        return this.http.get<Orders>(AppConstants.API.All_ORDERS  + '?user=' + user, {headers: this.headers});
    }


    login(body: any): Observable<LoginResponse> {
        return this.http.post<LoginResponse>(AppConstants.API.LOGIN, body).pipe(catchError(this.handleError));
    }


    getUser(id): Observable<User> {
        console.log('Headers in users api',  this.headers);
        return this.http.get<User>(AppConstants.API.All_USERS + '/' + id, {headers: this.headers});
    }

    updateUser(id, body): Observable<User> {
        return this.http.put<User>(AppConstants.API.All_USERS + '/' + id, body, {headers: this.headers});
    }

    getOrdersByDate(start, end, user): Observable<Order[]> {
        return this.http.get<Order[]>(AppConstants.API.All_ORDERS_BY_DATE + '?lte=' + end + '&gte=' + start + '&user=' + user, {headers: this.headers});

    }

    getReviewsByDate(start, end, user): Observable<Review[]> {
        return this.http.get<Review[]>(AppConstants.API.All_REVIEWS_BY_DATE + '?lte=' + end + '&gte=' + start + '&user=' + user, {headers: this.headers});

    }

    getPayoutByUser(user): Observable<any> {
        return this.http.get<any>(AppConstants.API.PAYOUT + '?user=' + user, {headers: this.headers});
    }

    postPayout(body): Observable<any> {
        return this.http.post<any>(AppConstants.API.PAYOUT + '/' , body, {headers: this.headers});
    }

    updatePayout(user, body): Observable<any> {
        return this.http.put<any>(AppConstants.API.PAYOUT + '/' + user, body , {headers: this.headers});
    }



    updateOrderStatus(id, body): Observable<Order> {
        return this.http.put<Order>(AppConstants.API.All_ORDERS + '/' + id, body, {headers: this.headers});

    }

    markAvailable(id, body): Observable<User> {
        return this.http.put<User>(AppConstants.API.All_USERS + '/' + id, body, {headers: this.headers});

    }


    getAllSearchInExtras(body): Observable<Extra[]> {
        return this.http.post<Extra[]>(AppConstants.API.All_EXTRAS + '/search', body);
    }

    getQuestionsFromExtras(): Observable<Extras> {
        return this.http.get<Extras>(AppConstants.API.All_EXTRAS + '?type=question');
    }

    // Api call to update service man slot automatically
    updateOrderStat(body): Observable<any> {
        return this.http.post<Order>(AppConstants.API.UPDATE_ORDER_STATUS , body, {headers: this.headers});

    }
    updateOrder(body, id): Observable<any> {
        return this.http.post<Order>(AppConstants.API.All_ORDERS + '/' + id , body, {headers: this.headers});

    }

    /**
     * Used to set the token for FCM Notifications
     * @param id UserId
     * @param token FCM Token
     */
    setFCMToken(id, token) {
        console.log('URL : ' + AppConstants.API.UPDATE_TOKEN + id);
        console.log('Boy : ' + token);
        return this.http.post<any>(AppConstants.API.UPDATE_TOKEN + id, {fcmToken: token}, {headers: this.headers});
    }

    // Error Handling
    handleError(error: HttpErrorResponse) {
        let errorMessage;
        if (error.error instanceof ErrorEvent) {
            // Client-side errors
            errorMessage = `Error: ${error.error.message}`;
        } else {
            // Server-side errors
            if (error.status === 401) {
                errorMessage = 'Your password id incorrect or you do not have access to this resource!';
                // Now you can show error if you know about it already!
            } else {
                errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
            }
        }
        return throwError(errorMessage);
    }

}
