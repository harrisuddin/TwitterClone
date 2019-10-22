class Username {

    constructor(string) { // creates a constructor with a string parameter
        this.username = string;
    }

    isValid() {
        if (this.username.length > 50) { //an error message will appear to the player if the user name is longer than 20 characters.
            return "Error, the username is too long, please try again.";
        } else if (this.username.length < 1) { //a error message will appear to the player if the user name is smaller than 1 character.
            return "Error, the username is empty, please try again.";
        }
        return true;
    }
}

// exports the class to a differnt location
module.exports = Username;
