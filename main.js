//project=19
//Dinner Guests: Working with one of the programs from Exercises 13 through 17, print a message indicating the number of people you are inviting to dinner.
var guestlist = ["Maheen", "Nadia", "Isha", "Muskan"];
guestlist.forEach(function (oneguest) { return console.log("hello ".concat(oneguest, ", would you like you join me on dinner ?")); });
var lenghtGuest = guestlist.length;
console.log("we are inviting total ".concat(lenghtGuest, " guests"));
