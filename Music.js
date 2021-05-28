window.addEventListener("load",() =>{

    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const song = document.querySelectorAll("h4");  
    console.log(song);
    const colors =[
        "#60d394",
        "#d36060",
        "#c060d3",
        "#d3d160",
        "#606bd3",
        "#60c2d3"
    ];

    console.log(sounds);
// lets start goint with sounds to play

    pads.forEach((pad,index) => {
        pad.addEventListener("click",function(){

            visual.innerHTML="<b>PLAY</b>" +"<p style=color:darkgreen;> "+ this.innerText+"</p>";

        sounds[index].currentTime = 0;
        sounds[index].play();
    
        createBubble(index);
        });
    });


    pads.forEach((pad,index) => {
        pad.addEventListener("dblclick",function(){
           
        sounds[index].pause();

        visual.innerHTML = "<h3> stopped <h3>";
    
        createBubble(index);
        });
    });
// To Create Bubbles 

    const createBubble = (index) => {

        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation =`jump 3s ease`;

        bubble.addEventListener("animationend",function(){
            visual.removeChild(this);
        });
    }
})