import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { saveData } from './utility';



export async function usersSignUp(email, password,object){
  firebase.auth().createUserWithEmailAndPassword(email, password).
    then(function(user) {

      saveData('Users', user.user.uid,  {fullName:object.fullName,category:object.category,email:object.email,flag:object.flag, uid:user.user.uid });

    }).catch(function(error) {
    alert(error.code + ': ' + error.message);
  });
}

export async function merchantsSignUp(email, password,object){
  firebase.auth().createUserWithEmailAndPassword(email, password).
    then(function(user) {

      saveData('Restaurants', user.user.uid,  {
        
        email:object.email,
        address:object.address,
        location:object.location,
        restaurantName: object.restaurantName,
        mobileNumber : object.mobileNumber,
        category:object.category,
        restaurantId:user.user.uid,
        flag:object.flag,
        priceLevel:object.priceLevel,
        rating:object.rating,
      
      });

    }).catch(function(error) {
    alert(error.code + ': ' + error.message);
  });
}

export async function signIn(email, password){
  let success = true;
  await firebase.auth().signInWithEmailAndPassword(email, password)
  .then(res =>{
    console.log('res',res)
    success= res.user.uid
  })
  .catch(function(error) {
    success = false;
    alert(error.code + ': ' + error.message);
  });
  return success;
}

export async function getCurrentUserId(){
  var user = firebase.auth().currentUser;

  if (user != null) {
    return user.uid;
  }
  else{
    return false
  }
}

export async function logout() {
  await firebase.auth().signOut().catch(error => console.log(error.code, ' ', error.message));
}
