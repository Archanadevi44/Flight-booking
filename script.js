document.addEventListener("DOMContentLoaded", () => { 

    const loginBtn = document.getElementById('loginBtn');
    if (loginBtn) {
        loginBtn.onclick = function () {
            let user = document.getElementById('username').value;
            let pass = document.getElementById('password').value;

            if (!user || !pass) {
                document.getElementById("loginMsg").style.color = "red";
                document.getElementById("loginMsg").textContent = "Please enter username and password!";
                return;
            }

            document.getElementById("loginMsg").style.color = "green";
            document.getElementById("loginMsg").textContent = "Login Successful! Redirecting...";

            setTimeout(() => {
                window.location.href = "booking.html"; // redirect to booking page
            }, 1500);
        };
    }


    const themeToggle = document.getElementById("themeToggle");
    if (themeToggle) {
        themeToggle.onclick = function(){
            document.body.classList.toggle("dark");
        }
    }
    
    const bookBtn = document.getElementById('bookBtn');
    if (bookBtn) {
        bookBtn.onclick = function() {
            const fromPlace = document.getElementById('fromPlace').value;
            const toPlace = document.getElementById('toPlace').value;

            if (!fromPlace || !toPlace) {
                document.getElementById('bookingMsg').style.color = "red";
                document.getElementById('bookingMsg').textContent = "Please select both From and To locations!";
                return;
            }

            if (fromPlace === toPlace) {
                document.getElementById('bookingMsg').style.color = "red";
                document.getElementById('bookingMsg').textContent = "Departure and Destination cannot be the same!";
                return;
            }

            document.getElementById('bookingMsg').style.color = "green";
            document.getElementById('bookingMsg').textContent = `Flight booked from ${fromPlace} to ${toPlace}!`;
        }
    }

});

