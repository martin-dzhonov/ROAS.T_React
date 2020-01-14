class Auth {
    constructor(){
      this.isAuthenticated = false;
    }
    

    currentUser() {
        return window.sessionStorage.getItem("currUser");
    }

    login(creds){
      var promise = new Promise( (resolve, reject) => {
        if(creds["username"] == "Admin" && creds["password"] == "test1A"){
          this.isAuthenticated = true;
          window.sessionStorage.setItem("currUser", creds["username"]);
           resolve("Login Succesfull");
        }
        else {
           reject(Error("Invalid username/password"));
        }
     });
  
     return promise;
    
    }
    
    logout(cb){
      this.isAuthenticated = false;
      setTimeout(cb, 150);
    }


  }
  
  export default new Auth();