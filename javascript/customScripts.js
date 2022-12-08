// printError 
function printError(errElmId, errMsg) {
    document.getElementById(errElmId).innerHTML = errMsg;
}

// checkForm
function checkForm() {
    var fullName = document.userApp.fullName.value;
    var emailAddress = document.userApp.emailAddress.value;
    var mobileNumber = document.userApp.mobileNumber.value;
    var password = document.userApp.password.value;
    var gender = document.getElementById("gender").value;
    var country = document.userApp.country.value;
    
    var skills = [];
    var skillsCheckboxes = document.getElementsByName("skills[]");
    for(let i = 0; i < skillsCheckboxes.length; i++) {
        if(skillsCheckboxes[i].checked) {
            skills.push(skillsCheckboxes[i].value);
        }
    }

    var description = document.userApp.description.value;

    // declare the error variables
    var fullNameErr = emailAddressErr = mobileNumberErr = passwordErr = genderErr = countryErr = descriptionErr = true;

    // fullName
    if(fullName == "") {
        printError("fullNameErr", "please enter fullName!");
    } else {
        var regExp = /^[a-zA-Z\s]{5,8}$/;
        if(regExp.test(fullName) === false) {
            printError("fullNameErr", "invalid fullName, please try again!");
        } else {
            printError("fullNameErr", "");
            fullNameErr = false;
        }
    }


    // emailAddress
    if(emailAddress == "") {
        printError("emailAddressErr", "please enter emailAddress!");
    } else {
        var regExp = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if(regExp.test(emailAddress) === false) {
            printError("emailAddressErr", "invalid emailAddress, please try again!");
        } else {
            printError("emailAddressErr", "");
            emailAddressErr = false;
        }
    }


    // mobileNumber
    if(mobileNumber == "") {
        printError("mobileNumberErr", "please enter mobileNumber!");
    } else {
        var regExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        if(regExp.test(mobileNumber) === false) {
            printError("mobileNumberErr", "invalid mobileNumber, please try again!");
        } else {
            printError("mobileNumberErr", "");
            mobileNumberErr = false;
        }
    }

    // password
    if(password == "") {
        printError("passwordErr", "please enter password!");
    } else {
        var regExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
        if(regExp.test(password) === false) {
            printError("passwordErr", "invalid password, please try again!");
        } else {
            printError("passwordErr", "");
            passwordErr = false;
        }
    }

    // gender
    if(gender == "") {
        printError("genderErr", "choose gender");
    } else {
        printError("genderErr", "");
        genderErr = false;
    }

    // country
    if(country == "") {
        printError("countryErr", "choose country");
    } else {
        printError("countryErr", "");
        countryErr = false;
    }


    // description
    if(description == "") {
        printError("descriptionErr", "please enter description!");
    } else {
        var regExp = /^[a-zA-Z0-9._\s]{15,}$/;
        if(regExp.test(description) === false) {
            printError("descriptionErr", "invalid description, please try again!");
        } else {
            printError("descriptionErr", "");
            descriptionErr = false;
        }
    }

    // preventing when there is true to any error variable
    if((fullNameErr || emailAddressErr || mobileNumberErr || passwordErr || genderErr || countryErr || descriptionErr) === true) {
        return false;
    } else {
        var dataPreview = `
            You've entered the details \n 
            fullName: ${fullName} \n 
            emailAddress: ${emailAddress} \n 
            mobileNumber: ${mobileNumber} \n 
            password: ${password} \n 
            gender: ${gender} \n 
            country: ${country} \n 
            description: ${description} \n 
        `;

        if(skills.length) {
            dataPreview += `
                skills: ${skills.join(", ")}
            `;
        }

        alert(dataPreview);
        return true;
    }

}