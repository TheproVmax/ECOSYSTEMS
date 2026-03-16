function forest_info() {
  document.getElementById("Information").innerHTML =
    "<h3>Biotic and Abiotic Components in Temperate Forests</h3>" +
    "<p><strong>Some Biotic Components in Temperate Forests:</strong></p>" +
    "<p> + Various wildlife and land animals (deer, reptiles, etc).</p>" +
    "<p> + Rabbits and bunnies</p>" +
    "<p> + Wolves</p>" +
    "<p> + Various plants (coniferous trees, berry bushes, etc).</p>" +
    "<p> + Birds</p>" +
    "<p><strong>Some Abiotic Components in Temperate Forests:</strong></p>" +
    "<p> + Soil</p>" +
    "<p> + Sun</p>" +
    "<p> + Wind</p>" +
    "<p> + Water</p>" +
    "<p> + Rocks</p>" +
    "<p> + Oxygen</p>" +
    "<p><strong>Interactions between Abiotic and Biotic Components:</strong></p>" +
    "<p> + Berry plants make their own energy from the sun through photosynthesis.</p>" +
    "<p> + Deers drink water from rivers to avoid dehydration.</p>" +
    "<p> + Garter snakes hide under rocks to avoid the sun's heat and for protection.</p>" +
    "<p> + Coniferous trees use the soil as a foundation that holds their roots.</p>";
}

function lake_info() {
  document.getElementById("Information").innerHTML =
    "<h3>Biotic and Abiotic Components in the Great Lakes</h3>" +
    "<p><strong>Some Biotic Components in the Great Lakes:</strong></p>" +
    "<p> + Various marine life (octopuses, seaturtles, etc)</p>" +
    "<p> + Algae</p>" +
    "<p> + Various fish (salmon, sharks, etc)</p>" +
    "<p> + Seaweed</p>" +
    "<p> + Various plankton</p>" +
    "<p><strong>Some Abiotic Components in the Great Lakes:</strong></p>" +
    "<p> + Sand</p>" +
    "<p> + Water</p>" +
    "<p> + Oxygen</p>" +
    "<p> + Rocks</p>" +
    "<p> + Clay</p>" +
    "<p> + Water temperature</p>" +
    "<p><strong>Interactions between Abiotic and Biotic Components:</strong></p>" +
    "<p> + Clams and mollusks rest on sand to camouflage from predators/consumers.</p>" +
    "<p> + Various fish and marine life depend on water for oxygen and movement of their natural bodies.</p>" +
    "<p> + Crabs and snails hide under rocks to avoid predators.</p>" +
    "<p> + Water temperature and osmosis have a great impact on sustainability for marine ecosystems.</p>";
}

function check_answers() {
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
