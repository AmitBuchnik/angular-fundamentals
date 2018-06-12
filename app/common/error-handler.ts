import { Observable } from 'rxjs/Observable';

export function handleError<T>(opertaion = 'operation', result?: T) {
    return (error: any): Observable<T> => {
        console.error(error);
        return Observable.of(result as T);
    };
}
        