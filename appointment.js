


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


var petwebDB = firebase.database().ref("appointment");

document.getElementById("appointment").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var DrName = getElementVal("drname");
  var ShopName = getElementVal("drnameS");
  var ShopLocation = getElementVal("drnameL");
  var DrEmail = getElementVal("drnameE");
  var DrMob = getElementVal("drnameM");
  var name = getElementVal("name");
  var number= getElementVal("number");
  var email= getElementVal("email");
  var date= getElementVal("date");
  var time= getElementVal("time");
  var description = getElementVal("description");

  saveMessages(DrName,ShopName,ShopLocation,DrEmail,DrMob,name, number, email, date, time, description);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

//   reset the form
document.getElementById("appointment").reset();
}

const saveMessages = (DrName,ShopLocation,ShopName,DrEmail,DrMob, name, number, email, date, time, description) => {
  var newAppointment = petwebDB.push();

  newAppointment.set({
    DrEmail: DrEmail,
    DrName: DrName,
    ShopName: ShopName,
    ShopLocation: ShopLocation,
    DrMob: DrMob,
    name: name,
    number: number,
    email: email,
    date: date,
    time: time,
    description: description,
  });
};
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
  



  
  
  
