


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


var petwebDB = firebase.database().ref("Hbook");

document.getElementById("Hbook").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var HotelName = getElementVal("HotelName");
  
  var HotelLocation = getElementVal("HotelNameL");
  var HotelEmail = getElementVal("HotelNameE");
  var HotelMob = getElementVal("HotelNameM");
  var name = getElementVal("name");
  var number= getElementVal("number");
  var email= getElementVal("email");
  var date= getElementVal("date");
  var date1= getElementVal("date1");
  var pet= getElementVal("pet");
  var description = getElementVal("description");

  saveMessages(HotelName, HotelLocation, HotelEmail, HotelMob, name, number, email, date,date1, pet, description);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

//   reset the form
document.getElementById("Hbook").reset();
}

const saveMessages = (HotelName, HotelLocation, HotelEmail, HotelMob, name, number, email, date,date1, pet, description) => {
  var newAppointment = petwebDB.push();

  newAppointment.set({
    HotelEmail: HotelEmail,
    HotelName: HotelName,
    HotelLocation: HotelLocation,
    HotelMob: HotelMob,
    date1:date1,
    name: name,
    number: number,
    email: email,
    date: date,
    pet: pet,
    description: description,
  });
};
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
  



  
  
  
