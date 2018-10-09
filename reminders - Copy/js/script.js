var d = new Date();
var hrs = d.getHours();
var minutes = d.getMinutes();
var day = d.getDay();

function setTime(){
    var d = new Date();
    var hrs = d.getHours();
    var minutes = d.getMinutes();

    if(d.getMinutes()<10 && d.getHours()!=0){
        var time = (hrs + ":" + "0" + minutes);
        document.getElementById("time").innerHTML = time;
    }else if(d.getHours()!=0){
        var time = (hrs + ":" + minutes);
        document.getElementById("time").innerHTML = time;
    }else if(d.getMinutes()<10 && d.getHours()<1){
        var time = ("0" + hrs + ":" + "0" + minutes);
        document.getElementById("time").innerHTML = time;
    }else{
        var time = ("0" + hrs + ":" + minutes);
        document.getElementById("time").innerHTML = time;
    }
    greeting();
    //code needs to be checked when interval is set to one second website becomes completely unresponsive
    
    setInterval(setTime, 10000);
}

function setWorkout(){
        if(day < 8){
            if(day == 0){
                document.getElementById("workout").innerHTML="<br><br><br><br><br><br>Today is a rest day - find something fun to do.";
            }else if(day == 1){
                //Bike and Legs

                document.getElementById("workout").innerHTML+="Cardio:<br>";
                document.getElementById("workout").innerHTML+="Bike (15 minutes)<br><br>";

                document.getElementById("workout").innerHTML+="Main Workout (Legs):<br>";
                document.getElementById("workout").innerHTML+="Leg Extensions (Four Sets of 16 reps)<br>";
                document.getElementById("workout").innerHTML+="Lying Leg Curl (Four Sets of 16 reps)<br>";
                document.getElementById("workout").innerHTML+="Bounce Squat (Four Sets of 15 reps-weighted)<br>";
                document.getElementById("workout").innerHTML+="Leg Press (Seven Sets of 20 reps)<br>";
                document.getElementById("workout").innerHTML+="Walking Lunge (Across the gym and back)<br>";
                document.getElementById("workout").innerHTML+="Alternating Lying Leg Curl (Four Sets of 24 reps)<br>";
            }else if(day == 2){
                //Swim, Back and Abs

                document.getElementById("workout").innerHTML+="Cardio:<br>";
                document.getElementById("workout").innerHTML+="Swim (45 minutes)<br><br>";

                document.getElementById("workout").innerHTML+="Main Workout (Back):<br>";
                document.getElementById("workout").innerHTML+="Barbell Deadlift (Five Sets of 5 reps)<br>";
                document.getElementById("workout").innerHTML+="Wide-Grip Lat Pulldown (Four Sets of 12 reps)<br>";
                document.getElementById("workout").innerHTML+="Bent-Over Barbell Row (Four Sets of 10 reps)<br>";
                document.getElementById("workout").innerHTML+="Cable Row (Four Sets of 8 reps)<br>";
                document.getElementById("workout").innerHTML+="Rope Pushdown (Three Sets of 12 reps)<br><br>";

                document.getElementById("workout").innerHTML+="Main Workout (Abs):<br>";
                document.getElementById("workout").innerHTML+="Crunches (Four Sets of 20 reps)<br>";
                document.getElementById("workout").innerHTML+="Ab Compression (Four Sets of 30 seconds)<br>";
                document.getElementById("workout").innerHTML+="Leg-Hold (Four Sets of 30 seconds)<br>";
                document.getElementById("workout").innerHTML+="Seated Flat Bench Leg Pull-in (Four Sets of 20 reps)<br>";
                document.getElementById("workout").innerHTML+="Jackknife Sit-up (Four Sets of 20 reps)<br>";
            }else if(day == 3){
                //Bike, Chest and Calves

                document.getElementById("workout").innerHTML+="Cardio:<br>";
                document.getElementById("workout").innerHTML+="Bike (15 minutes)<br><br>";

                document.getElementById("workout").innerHTML+="Main Workout (Chest):<br>";
                document.getElementById("workout").innerHTML+="Capsule Warm-Up (Two Sets)<br>";
                document.getElementById("workout").innerHTML+="Smith Machine Floor Press(Four Sets of 10 reps)<br>";
                document.getElementById("workout").innerHTML+="Flat Dumbbell Fly (Four Sets of 12 reps)<br>";
                document.getElementById("workout").innerHTML+="Alternating Cross-Body Dumbbell Raises (Four Sets of 24 reps)<br>";
                document.getElementById("workout").innerHTML+="Most-Muscular Cable Fly (Three Sets of 15 reps)<br><br>";

                document.getElementById("workout").innerHTML+="Main Workout (Calves):<br>";
                document.getElementById("workout").innerHTML+="Calf Compression (Four Sets of 20 reps)<br>";
                document.getElementById("workout").innerHTML+="Seated Calf Raise (Four Sets of 20 reps)<br>";
                document.getElementById("workout").innerHTML+="Farmers Walk (Across the gym and back)<br>";
                document.getElementById("workout").innerHTML+="Calf Raise on Leg Press (Four Sets of 20 reps)<br>";
                document.getElementById("workout").innerHTML+="Calf Raise (100 reps)<br>";
            }else if(day == 4){
                //Swim, Glutes and Shoulders

                document.getElementById("workout").innerHTML+="Cardio:<br>";
                document.getElementById("workout").innerHTML+="Swim (45 minutes)<br><br>";

                document.getElementById("workout").innerHTML+="Main Workout (Glutes):<br>";
                document.getElementById("workout").innerHTML+="Glute Abductions (Four Sets of 20 reps)<br>";
                document.getElementById("workout").innerHTML+="Unilateral Bridge (Four Sets of 30 seconds)<br>";
                document.getElementById("workout").innerHTML+="Glute Thrusters (Five Sets of 15, 12, 10, 8, bodyweight to failure)<br>";
                document.getElementById("workout").innerHTML+="Unilateral Leg Press (Four Sets of 12 reps)<br>";
                document.getElementById("workout").innerHTML+="Step-Up (Four Sets of 12 reps)<br>";
                document.getElementById("workout").innerHTML+="Bridge (Four Sets of 1 minute)<br><br>";

                document.getElementById("workout").innerHTML+="Main Workout (Shoulders):<br>";
                document.getElementById("workout").innerHTML+="Capsule Warm Up (Two Sets)<br>";
                document.getElementById("workout").innerHTML+="Incline Bench Barbell Front-Raises (Four Sets of 4 reps)<br>";
                document.getElementById("workout").innerHTML+="Dumbbell Shoulder Press (Four Sets of 4 reps)<br>";
                document.getElementById("workout").innerHTML+="Alternating Dumbbell Shoulder Raises(Four Sets of 20 reps)<br>";
                document.getElementById("workout").innerHTML+="Bent-Over Unilateral Reverse Dumbbell Raises(Four Sets of 8 reps)<br>";
            }else if(day == 5){
                //Bike and Arms

                document.getElementById("workout").innerHTML+="Cardio:<br>";
                document.getElementById("workout").innerHTML+="Bike (15 minutes)<br><br>";

                document.getElementById("workout").innerHTML+="Main Workout (Biceps):<br>";
                document.getElementById("workout").innerHTML+="Cable Curl (Two Sets 15 reps)<br>";
                document.getElementById("workout").innerHTML+="Alternating Dumbbell Curl(Five Sets of 10 reps)<br>";
                document.getElementById("workout").innerHTML+="Spider Curl (Three Sets of 12 reps)<br>";
                document.getElementById("workout").innerHTML+="Incline Hammer Curl (Three Sets of 12 reps)<br><br>";

                document.getElementById("workout").innerHTML+="Main Workout (Triceps):<br>";
                document.getElementById("workout").innerHTML+="Cable Pushdown (Three Sets of 15 reps)<br>";
                document.getElementById("workout").innerHTML+="Close-Grip Bench Press (Four Sets of 10 reps)<br>";
                document.getElementById("workout").innerHTML+="Fingers-Out Close-Grip Push-Up (Four sets of 10 reps)<br>";
                document.getElementById("workout").innerHTML+="Dips (Four Sets of 12 reps)<br>";
                document.getElementById("workout").innerHTML+="Unilateral Cross-Body Dumbbell raises (Four sets of 24 reps)<br>";
            }else if(day == 6){
                document.getElementById("workout").innerHTML="<br><br><br><br><br><br>Today is a rest day - find something fun to do.";
            }
    }else{
        document.getElementById("workout").innerHTML="Error001";
    }
}

function greeting(){
    if(d.getHours() < 12){
        document.getElementById("greet").innerHTML = "Good morning, Rebecca.";
    }else if(d.getHours() < 18){
        document.getElementById("greet").innerHTML = "Good afternoon, Rebecca.";
    }else{
        document.getElementById("greet").innerHTML = "Good evening, Rebecca.";
    }
}

setTime();
setWorkout();
