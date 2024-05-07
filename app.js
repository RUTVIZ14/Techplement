
var firebaseConfig = {
        apiKey: "AIzaSyCRjNqCAfdario6ZFtbtMgar9igYkGetEY",
    authDomain: "quotes-847cb.firebaseapp.com",
    projectId: "quotes-847cb",
    storageBucket: "quotes-847cb.appspot.com",
    messagingSenderId: "854970573037",
    appId: "1:854970573037:web:c8a4f709afd2cfd3a7ece4",
    measurementId: "G-FMP5GRWP50"
};


firebase.initializeApp(firebaseConfig);


var auth = firebase.auth();


document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    var email = document.getElementById('login-email').value;
    var password = document.getElementById('login-password').value;

    auth.signInWithEmailAndPassword(email, password)
        .then(function (userCredential) {
            
            window.location.href = 'homepage.html';
        })
        .catch(function (error) {
            
            console.error('Login failed:', error.message);
        });
});


document.getElementById('signup-form').addEventListener('submit', function (e) {
    e.preventDefault();
    var email = document.getElementById('signup-email').value;
    var password = document.getElementById('signup-password').value;

    auth.createUserWithEmailAndPassword(email, password)
        .then(function (userCredential) {
            
            window.location.href = 'homepage.html';
        })
        .catch(function (error) {
            
            console.error('Sign up failed:', error.message);
        });
});

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        
        var userProfile = document.getElementById('user-profile');
        if (userProfile) {
            userProfile.innerHTML = '<p>Welcome, ' + user.email + '</p>';
        } else {
            console.error('User profile element not found');
        }
    } else {
        
        console.log('User is signed out');

        if (window.location.pathname !== '/index12.html') {
            window.location.href = 'index12.html'; 
        }
    }
});
