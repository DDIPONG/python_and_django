// PART 4 ARRAY EXERCISE
// This is  a .js file with commented hints, its optional to use this.

// Create Empty Student Roster Array
// This has been done for you!
var roster = []
var pick = prompt("what will you pick? [add] [remove] [display] [quit]")

while (pick==quit){

if (pick=="add") {
    var studentName = prompt("enter Student Name")
    addNew(studentName);
    
} else if(pick=="remove"{
    var studentName = prompt("enter Student Name")
    remove(studentName)
    
} else if(pick==display){
    console.log(roaster);
}
  else if(pick==quit){

    prompt("Thank you for the service")
  }


}
// Create the functions for the tasks

// ADD A NEW STUDENT

function addNew(name){
    roaster.push(name)
}
// Create a function called addNew that takes in a name
// and uses .push to add a new student to the array


// REMOVE STUDENT
function remove(name){
    roaster.pop()
}

// Create a function called remove that takes in a name
// Finds its index location, then removes that name from the roster

// HINT: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
//

// DISPLAY ROSTER

// Create a function called display that prints out the orster to the console.


// Start by asking if they want to use the web app

// Now create a while loop that keeps asking for an action (add,remove, display or quit)
// Use if and else if statements to execute the correct function for each command.
