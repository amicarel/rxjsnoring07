import Rx from 'rxjs';
let subject = new Rx.Subject();

// emits 1
subject.subscribe(data => console.log(data));

subject.next(1);
console.log('subject.js')