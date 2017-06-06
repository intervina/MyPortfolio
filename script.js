 var output = document.getElementById("output");
        document.getElementById("submit").onclick = checkForm;
        document.getElementById("formValid").onsubmit = function () {
            var myName = document.getElementById("name");
            var myPassword = document.getElementById("password");
            var myEmail = document.getElementById("mail");
            var rMessage = "";
            if (myName.value === '') {
                rMessage = "name not filled out<br>";
            }
            if (myEmail.value === '') {
                rMessage = rMessage + "Email not filled out<br>";
            }
            if (!vEmail(myEmail.value)) {
                rMessage = rMessage + "NOT VALID Email<br>";
            }
            if (myMes.value === '') {
                rMessage = rMessage + "Message not filled out<br>";
            }
            if (rMessage.length > 0) {
                output.innerHTML = rMessage;
                return false;
            } else {
                return true;
            }

        }
        
        function checkForm(){
          
          outpur.innerHTML = "clicked";
        }
         
        function vEmail(email) {
            var myCk = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return myCk.test(email);
        }

        