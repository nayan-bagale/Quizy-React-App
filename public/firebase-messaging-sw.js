importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyBBkce8dlT6Y0mIEUajRkFznNmGyL4VcCI",
  authDomain: "quiz-dev-afd13.firebaseapp.com",
  projectId: "quiz-dev-afd13",
  storageBucket: "quiz-dev-afd13.appspot.com",
  messagingSenderId: "818053789460",
  appId: "1:818053789460:web:f8c56f7361bd04ec013401",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
