import Firestore from "../firebase-functions/firebase"

const firebaseRefs = {
  usersRef: Firestore.collectionRef("users"),
}

export default firebaseRefs
