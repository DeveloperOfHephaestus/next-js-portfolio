// import "firebase/firestore";
import { _storeData } from "./AsyncFuncs";
import { initializeApp } from "firebase/app";
// import * as firebase from 'firebase';
import { getAnalytics } from "@firebase/analytics";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCr_pVSM5U9tKmBOC_j2WSBrp2CO88PYJg",
  authDomain: "next-dev-saif-63f29.firebaseapp.com",
  projectId: "next-dev-saif-63f29",
  storageBucket: "next-dev-saif-63f29.appspot.com",
  messagingSenderId: "689848904128",
  appId: "1:689848904128:web:4df39a5a451154317e4025"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export async function getAllFriends(collection, key, value) {
  let querySnapshot = await firebase
    .firestore()
    .collection(collection)
    .where(key, "array-contains", value)
    .get();
  let data = await querySnapshot?.docs?.map((doc) => {
    return { ...doc.data() };
  });
  return data;
}

export async function getAllOfCollection(collection) {
  let data = [];
  let querySnapshot = await firebase.firestore().collection(collection).get();
  querySnapshot.forEach(function (doc) {
    if (doc.exists) {
      //console.log(doc.data());
      data.push(doc.data());
    } else {
      return false;
    }
  });
  return data;
}

export const deleteData = (collection, doc) => {
  firebase.firestore().collection(collection).doc(doc).delete();
};

export function getData(collection, doc, objectKey) {
  // check if data exists on the given path
  if (objectKey === undefined) {
    return firebase
      .firestore()
      .collection(collection)
      .doc(doc)
      .get()
      .then(function (doc) {
        if (doc.exists) {
          return doc.data();
        } else {
          return false;
        }
      });
  } else {
    return firebase
      .firestore()
      .collection(collection)
      .doc(doc)
      .get()
      .then(function (doc) {
        if (doc.exists && doc.data()[objectKey] != undefined) {
          return doc.data()[objectKey];
        } else {
          return false;
        }
      });
  }
}

export async function getDocRefByKeyValue(collection, key, value) {
  return firebase
    .firestore()
    .collection(collection)
    .where(key, "==", value)
    .get()
    .then(function (querySnapshot) {
      return querySnapshot.docs[0];
    });
}

export async function getDocByKeyValue(collection, key, value) {
  let data = [];
  let querySnapshot = await firebase
    .firestore()
    .collection(collection)
    .where(key, "==", value)
    .get();
  await querySnapshot.forEach(function (doc) {
    data.push(doc.data());
  });
  return data;
}

export async function getDocWithinRange(collection, doc, strSearch) {
  let strlength = strSearch.length;
  let strFrontCode = strSearch.slice(0, strlength - 1);
  let strEndCode = strSearch.slice(strlength - 1, strSearch.length);

  let startcode = strSearch;
  let endcode =
    strFrontCode + String.fromCharCode(strEndCode.charCodeAt(0) + 1);

  return firebase
    .firestore()
    .collection(collection)
    .where(doc, ">=", startcode)
    .where(doc, "<", endcode)
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        console.log(doc.data());
      });
    });
}

export async function saveData(collection, doc, jsonObject) {
  var success = true;
  await firebase
    .firestore()
    .collection(collection)
    .doc(doc)
    .set(jsonObject, { merge: true })
    .catch(function (error) {
      console.error("Error writing document: ", error);
      success = false;
    });

  return success;
  //console.log("Document successfully written!");
}

export async function saveDataWithoutDocId(collection, jsonObject) {
  let docRef = await firebase.firestore().collection(collection).doc();
  docRef.set(jsonObject);
  return docRef;
}

export async function addToArray(collection, doc, array, value) {
  let docRef = await firebase.firestore().collection(collection).doc(doc);
  let docData = await docRef.get();
  if (docData.exists && docData.data()[array] != undefined) {
    docRef.update({
      [array]: firebase.firestore.FieldValue.arrayUnion(value),
    });
  } else {
    saveData(collection, doc, { [array]: [value] });
  }
}
export async function updateData(collection, doc, array, value) {
  firebase
    .firestore()
    .collection(collection)
    .doc(doc)
    .update({
      [array]: value,
    });
}

export async function addToArrayUpdate(collection, doc, array, value) {
  let docRef = await firebase.firestore().collection(collection).doc(doc);
  let docData = await docRef.get();
  if (docData.exists && docData.data()[array] != undefined) {
    docRef.set({
      [array]: firebase.firestore.FieldValue.arrayUnion(value),
    });
  }
}
export function uniqueID() {
  function chr4() {
    return Math.random().toString(16).slice(-4);
  }
  return (
    chr4() +
    chr4() +
    "-" +
    chr4() +
    "-" +
    chr4() +
    "-" +
    chr4() +
    "-" +
    chr4() +
    chr4() +
    chr4()
  );
}

export async function addToArrayCustom(collection, doc, array, value) {
  let success = true;
  let docRef = await firebase.firestore().collection(collection).doc(doc);
  let docData = await docRef.get();

  if (docData.exists && docData.data()[array] != undefined) {
    docRef.update({
      [array]: firebase.firestore.FieldValue.arrayUnion(value),
      last_message_time: value.createdAt,
    });
    success = true;
  } else {
    success = false;
  }
  return success;
}
export async function uploadImage(img, folderName, progressListener) {
  return new Promise((resolve, reject) => {
    const uploadTask = firebase
      .storage()
      .ref(`${folderName}/${img?.name}`)
      .put(img);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        if (progressListener) {
          progressListener(progress);
        }
      },
      (error) => {
        alert(error.message);
        reject(error.message);
      },
      async () => {
        try {
          const url = await firebase
            .storage()
            .ref(`${folderName}`)
            .child(img?.name)
            .getDownloadURL();
          resolve(url);
        } catch (error) {
          console.error("Error getting download URL:", error);
          reject(error);
        }
      }
    );
  });
}


