// PART 4 ARRAY EXERCISE
// This is  a .js file with commented hints, its optional to use this.

// Create Empty Student Roster Array
// This has been done for you!
var roster = ["a","b","c"]
function remove(){
    for(jooooon of roster){
        console.log(jooooon);
        
    }
}
remove();

// Create the functions for the tasks

// ADD A NEW STUDENT

function addNew(){
    var studentName = prompt("enter Student Name")
    roaster.push(studentName)
}
// Create a function called addNew that takes in a name
// and uses .push to add a new student to the array


// REMOVE STUDENT
// function remove(name){
//     for(joooon of roaster){
//         console.log(joooon);
        
//     }
    for(var i=0; i<roaster(length)+1, i++;){
        if(name==roster[i]){
            roaster.remove(i)    
        }
    }
    var studentName = prompt("enter Student Name")
    roaster.pop()




// Create a function called remove that takes in a name
// Finds its index location, then removes that name from the roster

// HINT: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
//

// DISPLAY ROSTER
function display(){
    for(joooon of roaster){
        console.log(joooon);
        
    }

}

// Create a function called display that prints out the orster to the console.


// Start by asking if they want to use the web app

// Now create a while loop that keeps asking for an action (add,remove, display or quit)
// Use if and else if statements to execute the correct function for each command.
var pick = prompt("Pick One [add] [remove] [display] [quit]");
// var pick = null;
while (pick=="quit"){

    if (pick=="add") {
        
        addNew();
        
    }else if(pick==="remove"){
        
        remove(studentName)
        
    }else if(pick==="display"){
        console.log(roaster);
    }else if(pick==="quit"){
    
        console.log("Thank you for the service")
    }
    
    
}