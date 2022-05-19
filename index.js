document.getElementById("loginForm").addEventListener("submit",(event)=>{
    event.preventDefault()
})

firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        location.replace("home1.html")
    }
})

function login(){
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    firebase.auth().signInWithEmailAndPassword(email, password)
    .catch((error)=>{
        document.getElementById("error").innerHTML = error.message
    })
}

function signUp(){
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch((error) => {
        document.getElementById("error").innerHTML = error.message
    });
}

function forgotPass(){
    const email = document.getElementById("email").value
    firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
        alert("Reset link sent to your email id")
    })
    .catch((error) => {
        document.getElementById("error").innerHTML = error.message
    });
}




window.onload = setup;


function myFunction() {
  var checkBox = document.getElementById("show");
  var text = document.getElementById("text");
  if (checkBox.checked == true){
    text.style.display="block";
  } else {
     text.style.display = "none";
  }
}






firebase.auth().onAuthStateChanged((user)=>{
  if(!user){
      location.replace("home1.html")
  }else{
      document.getElementById("user").innerHTML = user.email
  }
})


function logout(){
  firebase.auth().signOut()
}




