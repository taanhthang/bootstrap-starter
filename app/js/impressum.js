/**
 * Created by jovanabunjevac on 02.09.16.
 */

function validateForm() {
    var x = document.forms["contactForm"]["usr"].value;
    if (x == null || x == "") {
        alert("Name field must be filled out");
        return false;
    }

    var x = document.forms["contactForm"]["email"].value;
    if (x == null || x == "") {
        alert("E-mail field must be filled out");
        return false;
    }

    var x = document.forms["contactForm"]["message"].value;
    if (x == null || x == "") {
        alert("Message field must be filled out");
        return false;
    }

    var x = document.forms["contactForm"]["question"].value;
    if (x == null || x == "") {
        alert("Answer field must be filled out");
        return false;
    }
}