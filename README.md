# cookie-storage  
Use localStorage instead of cookie.  

## Install  
`npm install storage-as-cookie` or `yarn add storage-as-cookie`  

## Useage  
```js
import storage from 'storage-as-cookie';

storage.set('name', 'vivimee');
storage.get('name');  //  vivimee

storage.set('user', { name: 'vivimee', age: 20 }, { expires: 1000 * 60 });
storage.get('user'); // { name: 'vivimee', age: 20 }
After 60s:
storage.get('user'); // undefined

`expires` default to -1, means never expire.
```