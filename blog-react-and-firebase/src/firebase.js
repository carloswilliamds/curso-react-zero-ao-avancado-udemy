import firebaseApp from 'firebase/app';
import "firebase/database";
import "firebase/auth";
import "firebase/storage"

let firebaseConfig = {
    apiKey: "AIzaSyB8317QGp6RW5bBfavGAwSWWISfVx3DNrM",
    authDomain: "blog-react-f951a.firebaseapp.com",
    databaseURL: "https://blog-react-f951a.firebaseio.com",
    projectId: "blog-react-f951a",
    storageBucket: "blog-react-f951a.appspot.com",
    messagingSenderId: "417280465281",
    appId: "1:417280465281:web:b5cdcfeb8b2e2f88b0b080"
  };

class Firebase {
    constructor(){

        firebaseApp.initializeApp(firebaseConfig);
        this.firebaseApp = firebaseApp.database();
        this.auth = firebaseApp.auth();
        this.storage = firebaseApp.storage();


    }

    login(email, password){
        return (
            firebaseApp.auth().signInWithEmailAndPassword(email, password)
        )
    }

    async register(name, email, password){
       await firebaseApp.auth().createUserWithEmailAndPassword(email, password)

       const uid = firebaseApp.auth().currentUser.uid;

       return firebaseApp.database().ref("usuarios").child(uid).set({nome: name, email, email })
    
    }



    isInitialized(){
        return new Promise(resolve =>{
           console.log(resolve, "resolve")
            firebaseApp.auth().onAuthStateChanged(resolve);
        })
    }


    signOut(){
        return firebaseApp.auth().signOut()
    }

    getCurrent(){
        console.log(firebaseApp.auth().currentUser && firebaseApp.auth().currentUser.email)
        return firebaseApp.auth().currentUser && firebaseApp.auth().currentUser.uid
    }

    getUserUid(){
        return firebaseApp.auth().currentUser && firebaseApp.auth().currentUser.uid
    }

    async getUserName(callback){
        if(!firebaseApp.auth().currentUser){
            return null;
        }

        const uid = firebaseApp.auth().currentUser.uid;
        await firebaseApp.database().ref("usuarios").child(uid).once("value").then(callback)
    }
}

export default new Firebase();