import app from "firebase";
// import "firebase/analytics";
// import "firebase/auth";
// import "firebase/firestore";
// import "firebase/performance";

const firebaseConfig = {
	apiKey: "AIzaSyB_RVjUaHqmnNz5o-5A2430FsZ49LiuDLY",
	authDomain: "moviecave-app.firebaseapp.com",
	databaseURL: "https://moviecave-app.firebaseio.com",
	projectId: "moviecave-app",
	storageBucket: "moviecave-app.appspot.com",
	messagingSenderId: "558523982008",
	appId: "1:558523982008:web:48bdde52119e1f82f1544d",
	measurementId: "G-NNSYC0K8ZD",
};

class Firebase {
	constructor() {
		try {
			app.initializeApp(firebaseConfig);
			app.analytics();
			this.auth = app.auth();
			this.db = app.firestore();
			this.app = app;
			this.perf = app.performance();
		} catch (err) {
			console.log(err.message);
		}
	}

	login(email, password) {
		return this.auth.signInWithEmailAndPassword(email, password);
	}

	async loginWithGoogle() {
		const provider = app.auth.GoogleAuthProvider();
		const result = await this.auth.signInWithPopup(provider);
		const name = result.user.displayName;
		this.auth.currentUser.updateProfile({
			displayName: name,
		});
		return result;
	}

	get documentId() {
		return app.firestore.FieldPath.documentId();
	}

	logout() {
		return this.auth.signOut();
	}

	async register(name, email, password) {
		await this.auth.createUserWithEmailAndPassword(email, password);
		this.auth.currentUser.updateProfile({
			displayName: name,
		});
		return this.auth.currentUser;
	}

	isInitialized() {
		return new Promise(resolve => {
			this.auth.onAuthStateChanged(resolve);
		});
	}

	getCurrentUsername() {
		return this.auth.currentUser.displayName;
	}
}

export default new Firebase();
