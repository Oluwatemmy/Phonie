const carriers = {
    mtn: {
        prefixes: ['0803', '0806', '0703', '0706', '0813', '0816', '0810', '0814', '0903', '0906', '07025', '07026', '0913', '0916'],
        src : "./mtn.jpg"
    },
    glo: {
        prefixes: ['0805', '0807', '0705', '0815', '0811', '0905', '0915'],
        src: "./glo.jpeg"
    },
    airtel: {
        prefixes: ['0701', '0708', '0802', '0808', '0812', '0902','0901', '0704', '0904', '0907', '0912'],
        src: "./airtel.jpg"
    },
    mobile9: {
        prefixes: ['0909', '0809', '0818', '0817', '0908'],
        src: "./9mobile.png"
    },
}


function checkPassword() {
    let password = document.getElementById('password').value;
    let confirm_password = document.getElementById('confirmPassword').value;
    console.log(password,confirm_password)
    let message = document.getElementById("message")
    // const submit = document.getElementsByClassName('buttton');
    // submit.addEventListener("click", validate);
    
    
    if (password.length != 0) {
        if (password == confirm_password) {
            message.style.backgroundColor = "#3ae374"
            return message.textContent = 'Passwords match'

        }
        else {
            message.textContent = "Passwords don't match"
            message.style.backgroundColor = '#ff4d4d'
            // function validate(e) {
            //     e.preventDefault();
            // }
            return false
        }
    } else if (password.length < 8 ){
        message.textContent = "Password is less than 8"
        message.style.backgroundColor = '#ff4d4d'
        }
    else {
        alert(" Password can't be empty")
        message.textContent = "";
    }
    // const submit = document.getElementsByClassName('buttton');

    // submit.addEventListener("click", validate); 
    // if (password.value !== confirm_password.value) {
    //     function validate(e) {
    //         e.preventDefault();
    //     }
    //     return false
    // } else {
    //     pass
    // }
}

const p = document.getElementById('password').value;
const cP = document.getElementById('confirmPassword').value;
const submit = document.querySelector("#button");

submit.addEventListener("click", validate) 
function validate(event) {
    if (message.textContent === "Passwords don't match") {
        event.preventDefault()
        console.log('Passwords dont match')
    }
    else {
        return true
    }
}


const addCarrierImageOnInput = () => {
    let phone = document.getElementById('phone_number').value
    let carrierLogo = document.getElementById('carrier')
    if (phone.length>= 4) {
        let phone_prefix_four = phone.slice(0, 4)
        let carriers_available = Object.keys(carriers);
        if (carriers_available.length === 0) return
        for (let i = 0; i < carriers_available.length; i++) {
            let carrier = carriers_available[i];
            if (carriers[carrier].prefixes.includes(phone_prefix_four)) {
                carrierLogo.src = carriers[carrier].src
                break
            }
        }
    }
    else {
        carrierLogo.src = ""
    }
}

// const submit = document.getElementById('buttton');

    // submit.addEventListener("click", validate);

    // function validate(e) {
    //     e.preventDefault();

    //     const confirmPasswordField = document.getElementById('confirmPassword');
    //     const passwordField = document.getElementById('password');
    //     let valid = true

    //     if (passwordField.value != confirmPasswordField.value) {
    //         const nameError = document.getElementById('message');
    //         nameError.classList.add("visible");
    //         firstNameField.classList.add("invalid");
    //         nameError.setAttribute("aria-hidden", false);
    //         nameError.setAttribute("aria-invalid", true);
    //     }
    //     return valid;
    // }


