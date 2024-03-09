//project=19
//Dinner Guests: Working with one of the programs from Exercises 13 through 17, print a message indicating the number of people you are inviting to dinner.

let guestlist = ["Maheen","Nadia","Isha","Muskan"];
guestlist.forEach(oneguest => console.log (`hello ${oneguest}, would you like you join me on dinner ?`));
let lenghtGuest:number=guestlist.length;
console.log(`we are inviting total ${lenghtGuest} guests`);