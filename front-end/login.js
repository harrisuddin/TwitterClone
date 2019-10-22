// Control whether or not the user is logging in or signing up

// when the button to change whether the user is logging in or signing up is clicked
$("#toggleLogin").click(function () {

    // if loginActive is 1 (Login)
    if ($("#loginActive").val() == "1") {

        //set loginActive to 0. Change the text of some elements. Show the confirm password div
        $("#loginActive").val("0");
        $("#loginSignupTitle").html("Sign Up");
        $("#loginSignupButton").html("Sign Up");
        $("#toggleLogin").html("Or Login");
        $("#confirmPassword").removeClass("invisible");
        $("#displayName").removeClass("invisible");

    // if loginActive is 0 (Signup)
    } else if ($("#loginActive").val() == "0") {

        // set loginActive to 1. Change the text of some elements. Hide the confirm password div
        $("#loginActive").val("1");
        $("#loginSignupTitle").html("Login");
        $("#loginSignupButton").html("Login");
        $("#toggleLogin").html("Or Sign Up");
        $("#confirmPassword").addClass("invisible");
        $("#displayName").addClass("invisible");
    }
});
