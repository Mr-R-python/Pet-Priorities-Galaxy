


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






// Appointment section database System


var petwebDB = firebase.database().ref("adoption");

document.getElementById("adoption").addEventListener("submit", submitForm);

function submitForm(e) {
e.preventDefault();

var result = getElementVal("result");
var name = getElementVal("name");
var number= getElementVal("number");
var email= getElementVal("email");
var address= getElementVal("address");
var landmark= getElementVal("landmark");
var pincode= getElementVal("pincode");


saveMessages(result,name, number, email,address,landmark, pincode);

//   enable alert
document.querySelector(".alert").style.display = "block";

//   remove the alert
setTimeout(() => {
  document.querySelector(".alert").style.display = "none";
}, 3000);

//   reset the form
document.getElementById("adoption").reset();
}

const saveMessages = (result,name, number, email, address, landmark, pincode ) => {
var newAdoption = petwebDB.push();

newAdoption.set({
  PetName:result,
  Name: name,
  Number: number,
  Email: email,
  Address:address,
  landmark:landmark,
  Pincode:pincode,
  
});
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};







