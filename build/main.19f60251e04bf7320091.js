(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(e,t,n){},QfWi:function(e,t,n){"use strict";n.r(t);const o={signUpForm:document.forms.signUpForm,signInForm:document.forms.signInForm,logoutButton:document.querySelector(".logoutButton"),loader:document.querySelector(".loader"),errorIn:document.querySelector(".errorIn"),content:document.querySelector(".content"),navigation:document.querySelector(".list")};var r=n("czhI"),a=n.n(r);const s={auth:{idToken:"",isAuth:!1,localId:""},data:{users:[],products:[],cart:[]},isLoading:!1,error:""},i="https://authorization-module-13-default-rtdb.firebaseio.com",l=async(e,t)=>{try{await a.a.post(`${i}/users.json?auth=${t}`,e)}catch(e){console.dir(e)}},c=()=>{if(localStorage.getItem("idToken")){const e=JSON.parse(localStorage.getItem("idToken"));console.log("token",e),a.a.get(`${i}/users.json?auth=${e}`).then(e=>console.log(e.data))}else console.log("no token")};n("L1EO");const g=()=>{const e={email:"",password:""},t=()=>{e.email="",e.password="",o.signUpForm.reset()};o.content.innerHTML='<h2>Sign Up Form</h2>\n        <form name="signUpForm">\n          <input type="text" name="email" />\n          <input type="text" name="password" />\n          <span class="error"></span>\n          <button type="submit">SignUp</button>\n        </form>',o.signUpForm=document.forms.signUpForm;o.signUpForm.addEventListener("input",t=>{s.error&&(document.querySelector(".error").textContent="",o.errorIn.textContent="",s.error="");const{name:n,value:r}=t.target;e[n]=r}),o.signUpForm.addEventListener("submit",n=>{n.preventDefault(),(async e=>{o.loader.classList.toggle("loader");try{const t=await a.a.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAMdD72P8Xm-i8RlkhfB7TjQfnZz6jGzfY",{...e,returnSecureToken:!0}),n={email:t.data.email,localId:t.data.localId},r=t.data.idToken;l(n,r)}catch(e){s.error=e.response.data.error.message,document.querySelector(".error").textContent=e.response.data.error.message}finally{o.loader.classList.toggle("loader")}})(e).then(t)})},d=()=>{const e={email:"",password:""},t=()=>{e.email="",e.password="",o.signInForm.reset()};o.content.innerHTML='<h2>Sign In Form</h2>\n    <form name="signInForm">\n      <input type="text" name="email" />\n      <input type="text" name="password" />\n      <span class="errorIn"></span>\n      <button type="submit">SignIn</button>\n    </form>',o.signInForm=document.forms.signInForm;o.signInForm.addEventListener("input",t=>{s.error&&(document.querySelector(".error").textContent="",o.errorIn.textContent="",s.error="");const{name:n,value:r}=t.target;e[n]=r}),o.signInForm.addEventListener("submit",async n=>{n.preventDefault(),(async e=>{o.loader.classList.toggle("loader");try{const t=await a.a.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAMdD72P8Xm-i8RlkhfB7TjQfnZz6jGzfY",{...e,returnSecureToken:!0});localStorage.setItem("idToken",JSON.stringify(t.data.idToken)),c()}catch(e){throw o.errorIn.textContent=e.response.data.error.message,s.error=e.response.data.error.message,new Error(s.error)}finally{o.loader.classList.toggle("loader")}})(e).then(t).then(()=>{o.navigation.querySelector('[data-page="signUp"]').classList.toggle("hidden"),o.navigation.querySelector('[data-page="signIn"]').classList.toggle("hidden"),o.navigation.querySelector('[data-page="logOut"]').classList.toggle("hidden")})})},u=()=>{o.content.innerHTML="<h2>Homepage</h2>"};u();o.navigation.addEventListener("click",e=>{if(e.target!==e.currentTarget)switch(e.target.dataset.page){case"signUp":g();break;case"signIn":d();break;case"home":case"logOut":default:u()}});o.navigation.querySelector('[data-page="logOut"]').addEventListener("click",()=>{localStorage.clear(),o.navigation.querySelector('[data-page="signUp"]').classList.toggle("hidden"),o.navigation.querySelector('[data-page="signIn"]').classList.toggle("hidden"),o.navigation.querySelector('[data-page="logOut"]').classList.toggle("hidden")})}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.19f60251e04bf7320091.js.map