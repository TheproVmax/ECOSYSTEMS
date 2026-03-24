/* NIGHT MODE TOGGLE */
const nightBtn = document.getElementById('nightToggle');
nightBtn.addEventListener('click',()=>{
    document.body.classList.toggle('night');
    localStorage.setItem('night',document.body.classList.contains('night'));
});
if(localStorage.getItem('night')==='true'){
    document.body.classList.add('night');
}

/* SIMULATOR */
let chartInstance = null;

function randint(min,max){return Math.floor(Math.random()*(max-min+1))+min;}

function runSimulation(){
  const output=document.getElementById('output');
  const ctx=document.getElementById('populationChart').getContext('2d');

  if(chartInstance){chartInstance.destroy();}

  let sun=randint(1000,2000);
  let flower=randint(300,500);
  let bee=randint(100,200);
  let bird=randint(75,100);
  let fox=randint(25,75);
  let wolf=randint(10,20);

  let days=[],flowerArr=[],beeArr=[],birdArr=[],foxArr=[],wolfArr=[];
  let simOutput="Forest Food Chain Simulation\n----------------------------\n";

  for(let day=1;day<=365;day++){
    flower += sun*0.02;
    bee += flower*0.05;
    bird += bee*0.02;
    fox += bird*0.01;
    wolf += fox*0.005;

    flower = Math.max(flower-bee*0.1,0);
    bee = Math.max(bee-bird*0.2,0);
    bird = Math.max(bird-fox*0.3,0);
    fox = Math.max(fox-wolf*0.1,0);

    days.push(day);
    flowerArr.push(Math.floor(flower));
    beeArr.push(Math.floor(bee));
    birdArr.push(Math.floor(bird));
    foxArr.push(Math.floor(fox));
    wolfArr.push(Math.floor(wolf));

    simOutput += `Day ${day}
Elderberry Plants: ${Math.floor(flower)}
Honeybees: ${Math.floor(bee)}
Eastern Kingbirds: ${Math.floor(bird)}
Red Foxes: ${Math.floor(fox)}
Grey Wolves: ${Math.floor(wolf)}
--------------------\n`;
  }

  output.textContent=simOutput;

  chartInstance=new Chart(ctx,{
    type:'line',
    data:{
      labels:days,
      datasets:[
        {label:'Elderberry Plants',data:flowerArr,borderColor:'green',fill:false},
        {label:'Honeybees',data:beeArr,borderColor:'gold',fill:false},
        {label:'Eastern Kingbirds',data:birdArr,borderColor:'blue',fill:false},
        {label:'Red Foxes',data:foxArr,borderColor:'orange',fill:false},
        {label:'Grey Wolves',data:wolfArr,borderColor:'red',fill:false}
      ]
    },
    options:{
      responsive:true,
      scales:{y:{beginAtZero:true}}
    }
  });
}

/* QUIZ ANSWER */
function showAnswer(){
  document.getElementById('answer').textContent = "☀️ The Sun is the main energy source for most ecosystems.";
}
  document.getElementById("Question 1").innerHTML =
    "1: A biotic component is a living thing that consumes energy for survival. It is derived from the prefix 'bio,' which means life.";

  document.getElementById("Question 2").innerHTML =
    "2: An abiotic component is the opposite of a biotic component. It is a non-living thing, but is still essential for the sustainability of the ecosystem.";

  document.getElementById("Question 3").innerHTML =
    "3: Three examples of an abiotic component in the Great Lakes could be water, water temperature, and sand. However, if you mentioned the sun, oxygen, rocks, or clay, you'd also be correct.";

  document.getElementById("Question 4").innerHTML =
    "4: An interaction between biotic and abiotic components that involves a snake could be a Garter snake seeking protection and shade under a rock in the forest.";

  document.getElementById("Question 5").innerHTML =
    "5: Clams and mussels hide under rocks for protection against predators/consumers through camouflage.";
}
