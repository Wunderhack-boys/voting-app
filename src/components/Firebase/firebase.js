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
    return new Promise((resolve, reject) => {
      this.auth.signInWithPopup(this.provider).then(resolve);
    })
    
  }

  // *** User API ***

  user = uid => this.db.ref(`users/${uid}`);

  users = () => this.db.ref('users');

  // *** Groups API ***

  group = uid => this.db.ref(`groups/${uid}`);

  groups = () => this.db.ref('groups');

  currentGroup = () => this.db.ref('currentGroup');

  heartGroup = () => this.db.ref('Heartgroups');

}

export default Firebase;
