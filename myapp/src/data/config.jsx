import firebase from 'firebase'

  // Initialize Firebase
const config = {
    apiKey: "AIzaSyDqYfKt0URn7vc4kYFjgk_nB7ECxARM6es",
    authDomain: "myapp-fd878.firebaseapp.com",
    databaseURL: "https://myapp-fd878.firebaseio.com",
    projectId: "myapp-fd878",
    storageBucket: "myapp-fd878.appspot.com",
    messagingSenderId: "186677289813"
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
