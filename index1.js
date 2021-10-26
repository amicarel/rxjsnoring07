// Import stylesheets
import './style.css';
import Rx from 'rxjs';
// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

/*const stream0$ = Rx.Observable.interval(1000).take(3);

// subscriber 1 emits 0, 1, 2
stream0$.subscribe(data => console.log('s0',data));

// subscriber 2, emits 0, 1, 2
stream0$.subscribe(data => console.log('s1',data));

// subscriber 3, emits 0, 1, 2, after 2 seconds
setTimeout(() => {
stream0$.subscribe(data => console.log('s2',data));
}, 2000);
*/
// 
/*let start = new Date();
console.log('start=',start)
let stream$ = Rx.Observable
.interval(1000)
.take(5)
.publish();
setTimeout(() => {
  stream$.subscribe(data => {
  console.log(`subOut ${new Date() - start}`, data);
  });
  }, 2000);
stream$.subscribe(data=>{console.log(`sub-1 ${new Date() - start}`, data)})
stream$.connect();*/
console.log('index.js')