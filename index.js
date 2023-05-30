//Run the function when check button is clicked
document.getElementById("check").onclick = function () {
    //Get the input value for the year and the image element
    let year = document.getElementById("year").value;
    let image = document.getElementById("image");
    //Check if the year is not empty
    if (year !== "") {
        //Check if the year is not a number
        if (isNaN(year)) {
            window.alert("Please input valid type of year: ");
        }
        else {
            //Check if the year is a leap year or a common year
            if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
                document.getElementById("result").innerHTML = "The year " + year + " is a leap year.";
            }
            else {
                document.getElementById("result").innerHTML = "The year " + year + " is a common year.";
            }
        }

        //Calculate the remainder for the year
        let remainder = year % 12;
        //Set the horary animal and image based on the remainder using switch statement
        switch (remainder) {
            case 0:
                document.getElementById("horary").innerHTML = "Monkey";
                image.src = "images/monkey.jpg";
                break;
            case 1:
                document.getElementById("horary").innerHTML = "Cock";
                image.src = "images/cock.jpg";
                break;
            case 2:
                document.getElementById("horary").innerHTML = "Dog";
                image.src = "images/dog.jpg";
                break;
            case 3:
                document.getElementById("horary").innerHTML = "Boar";
                image.src = "images/boar.jpg";
                break;
            case 4:
                document.getElementById("horary").innerHTML = "Rat";
                image.src = "images/rat.jpg";
                break;
            case 5:
                document.getElementById("horary").innerHTML = "Ox";
                image.src = "images/ox.jpg";
                break;
            case 6:
                document.getElementById("horary").innerHTML = "Tiger";
                image.src = "images/tiger.jpg";
                break;
            case 7:
                document.getElementById("horary").innerHTML = "Hare";
                image.src = "images/hare.jpg";
                break;
            case 8:
                document.getElementById("horary").innerHTML = "Dragon";
                image.src = "images/dragon.jpg";
                break;
            case 9:
                document.getElementById("horary").innerHTML = "Serpent";
                image.src = "images/serpent.jpg";
                break;
            case 10:
                document.getElementById("horary").innerHTML = "Horse";
                image.src = "images/horse.jpg";
                break;
            case 11:
                document.getElementById("horary").innerHTML = "Sheep";
                image.src = "images/sheep.jpg";
                break;
        }
    }

    else {
        window.alert("Please input the year first: ");
    }
}

//Adding an eventListener when the reset button is clicked
document.getElementById("reset").onclick = function () {
    //Redirect to the index.html page or homepage
    window.location.href = "index.html";
}
