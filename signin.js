// https://github.com/sinasibil 
// const usernameInput=document.querySelector(".user-input");
// const passwordInput=document.querySelector(".pass-input");
// const usernameMsg=document.querySelector(".username-msg");
// const passwordMsg=document.querySelector(".password-msg");
// const signinMsg=document.querySelector(".signin-status");
// const signinBtn=document.querySelector(".signin-button");

// signinBtn.addEventListener("click",signIn);
// function signIn(event){
//   event.preventDefault();
//   usernameMsg.innerText="";
//   passwordMsg.innerText=""; 
//   // console.log("sign in")
//   const usernameValue=usernameInput.value;
//   const passwordValue=passwordInput.value;
//   // console.log(usernameValue,passwordValue);
//   let ifSendData=true;

//   if(usernameValue.length===0 || usernameValue.indexOf("@")===-1 || usernameValue.indexOf(".")===-1){
//     usernameMsg.innerText="please enter a valid email";
//     ifSendData=false;
//   }
//   if(passwordValue.length===0){
//     passwordMsg.innerText="please enter a valid password";
//     ifSendData=false;
//   }else if(passwordValue.length<=4){
//     passwordMsg.innerText="your password is too short";
//     ifSendData=false;
//   }
//   if(ifSendData){
//     console.log("send data to server");
//   }
//   if(ifSendData){
//     const body=JSON.stringify({
//       username:usernameValue,
//       password:passwordValue
//     })
//     const headers={
//       "Content-Type":"application/json"
//     }
//     fetch('https://jsonplaceholder.typicode.com/posts',{
//       method:"POST",
//       body:body,
//       headers:headers
//     })
//     .then(response=>{
//       if(response.ok){
//         signinMsg.innerText="you signed in successfully!"
//       }
//     })
//   }

// }




let username=document.querySelector(".user-input");
let password=document.querySelector(".pass-input");
let usernameMsg=document.querySelector(".username-msg");
let passwordMsg=document.querySelector(".password-msg");
let sendBtn=document.querySelector(".signin-button");
let sendMsg=document.querySelector(".signin-status");


sendBtn.addEventListener("click",send);
function send(event){
  event.preventDefault();
  let usernameValue=username.value;
  let passwordValue=password.value;
  usernameMsg.innerText="";
  passwordMsg.innerText="";
  sendToServer=true;
  if(usernameValue.length<=6||usernameValue.indexOf("@")===-1||usernameValue.indexOf(".")===-1){
    usernameMsg.innerText="user name is not vaddlied";
    sendToServer=false;
  }
   if(passwordValue.length<=4){
    passwordMsg.innerText="your pass is too short";
    sendToServer=false;
  }
   if(passwordValue.length==0){
    passwordMsg.innerText="please enter a pass";
    sendToServer=false;
  }

  if(sendToServer){
    const body=JSON.stringify({
      username:usernameValue,
      password:passwordValue
    })
    const headers={"content-type":"application/json"};
    fetch('https://jsonplaceholder.typicode.com/posts',{
      method:"POST",
      body:body,
      headers:headers
    })
    .then(response=>{
      if(response.ok){
        sendMsg.innerText="welcom!"
      }
    })
  }
}