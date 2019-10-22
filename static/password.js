class Password {

    constructor(str) {
        this.password = str;
    }

    isValid() {
        if (this.password.length < 8) {
            return "Error, the password is less than 8 characters, please try again.";
        } else if (!containsNumber(this.password)) {
            return "Error, the password does not have a number, please try again.";
        } else if (!containsUpperCase(this.password)) {
            return "Error, the password does not have a capital letter, please try again.";
        } else if (!containsLowerCase(this.password)) {
            return "Error, the password does not have a lower case letter, please try again.";
        } else {
            return true;
        }
    }
}

// implement functions to check certain conditions here

// return true if s contains a number
function containsNumber(s) {
    return s.match(/[1-9]/);
}

// return true if s contains a capital letter
function containsUpperCase(s) {
    return s != s.toLowerCase();
}

// return true if s contains a lower case
function containsLowerCase(s) {
    return s != s.toUpperCase();
}

// export the class for use elsewhere
module.exports = Password;
