


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCGzDEgwljxs92U-0HaWA67Ti0l52Rc4o4",
  authDomain: "pet-priorities-galaxy.firebaseapp.com",
  databaseURL: "https://pet-priorities-galaxy-default-rtdb.firebaseio.com",
  projectId: "pet-priorities-galaxy",
  storageBucket: "pet-priorities-galaxy.appspot.com",
  messagingSenderId: "600114058410",
  appId: "1:600114058410:web:dddea9a0ea9538e1c3acd3",
  measurementId: "G-FHC9QYRKSW"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);





// database contact-us in local.html


// reference your database
var petwebDB = firebase.database().ref("contactus");

document.getElementById("contactus").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var number= getElementVal("number");
  var email= getElementVal("email");
  var message = getElementVal("message");

  saveMessages(name, number, email, message);

    //   enable alert
    document.querySelector(".alert").style.display = "block";

    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);

  //   reset the form
document.getElementById("contactus").reset();

}
const saveMessages = (name, number, email, message) => {
  var newContactus = petwebDB.push();

  newContactus.set({
    name: name,
    number: number,
    email: email,
    message: message,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};



