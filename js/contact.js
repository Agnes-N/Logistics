 $(document).ready(function() {
     $("#send").click(function(event) {
         var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
         var firstname = $("#inputFirstname").val();
         var lastname = $("#inputFirstname").val();
         var email = $("#inputEmail").val();
         var subject = $("#inputSubject").val();
         var message = $("#inputMessage").val();
         if ((firstname === "") || (lastname === "") || (email === "") || (subject === "") || (message === "")) {
             alert("Please, fill the required fields!");
         } else if (email.match(mailformat)) {
             alert(firstname + ", we have received your message. Thank you for reaching out to us!");
             document.myForm.text1.focus();
             return true
         } else {
             alert("You have entered an invalid email address!");
             document.myForm.text1.focus();
             return false

         }
         event.preventDefault();
     });

 });