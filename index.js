function validateform(){  
    var nam=document.myform.name.value;  
    var pwd=document.myform.password.value;  
      
    if (nam==null && nam==""){  
      alert("Name can't be blank");  
      return false;  
    }else if(pwd.length<6){  
      alert("Password must be at least 6 characters long.");  
      return false;  
      }  
    }  