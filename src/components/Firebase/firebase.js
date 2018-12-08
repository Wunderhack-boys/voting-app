import app from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.db = app.database();
    this.auth = app.auth();
    this.provider =  new app.auth.FacebookAuthProvider();
  }

  connectToFacebook = () => {
    this.auth.signInWithPopup(this.provider)
        .then((response) => {
          console.log(response);
        })
  }

  // *** User API ***

  user = uid => this.db.ref(`users/${uid}`);

  users = () => this.db.ref('users');

  // *** Groups API ***

  group = uid => this.db.ref(`groups/${uid}`);

  groups = () => this.db.ref('groups');

}

export default Firebase;
