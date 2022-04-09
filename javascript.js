
    var openInbox = document.getElementById("myBtn");
    var emailsSent = 0;
    openInbox.click();
    
    function w3_open() {
      document.getElementById("mySidebar").style.display = "block";
      document.getElementById("myOverlay").style.display = "block";
    }
    
    function w3_close() {
      document.getElementById("mySidebar").style.display = "none";
      document.getElementById("myOverlay").style.display = "none";
    }
    
    function myFunc(id) {
      var x = document.getElementById(id);
      if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show"; 
        x.previousElementSibling.className += " w3-red";
      } else { 
        x.className = x.className.replace(" w3-show", "");
        x.previousElementSibling.className = 
        x.previousElementSibling.className.replace(" w3-red", "");
      }
    }
    
    openMail("Borge")
    function openMail(personName) {
      var i;
      var x = document.getElementsByClassName("person");
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      x = document.getElementsByClassName("test");
      for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" w3-light-grey", "");
      }
      document.getElementById(personName).style.display = "block";
      event.currentTarget.className += " w3-light-grey";
    }

 
  

    function countSentEmails()
    {
      emailsSent++;
      console.log(emailsSent);
      alert("You have send a total of " + emailsSent + " Emails");
      document.getElementById(limit); 
      checkLimit(emailsSent);
    }
