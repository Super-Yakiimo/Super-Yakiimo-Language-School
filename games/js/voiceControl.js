/*
create voice box tempalte
James Lehoe


...

<div id="voiceControl"></div>

...

<script src="../js/img_database.js"></script>

<script src="../js/voiceControl.js"></script>


*/

// global variables
let global_voiceSelect, 
global_volSlider, 
global_rateSlider, 
global_pitchSlider;

// input ids
const VC_SLIDE = [
    {
        label: "Volume",
        min: 0, 
        max: 1,
        step: 0.1,
        value: 0.5
    },
    {
        label: "Rate",
        min: 0, 
        max: 2,
        step: 0.1,
        value: 1
    },
    {
        label: "Pitch",
        min: 0, 
        max: 2,
        step: 0.1,
        value: 1
    }
];


// create slider
function createSlider(parent, slider){
    // containter
    let div = document.createElement("div");
    // label
    let label = document.createElement("label");
    label.innerHTML = slider.label;
    // slider
    let input = document.createElement("input");
    input.type = "range";
    input.min = slider.min;
    input.max = slider.max;
    input.step = slider.step;
    input.value = slider.value;
    // output
    let out = document.createElement("span");
    out.innerHTML = input.value;
    // create change listener for slider
    // udpate output when slided move
    input.addEventListener("change", ()=>{
        out.innerHTML = input.value;
    });
    // add to div element
    div.appendChild(label);
    div.appendChild(input);
    div.appendChild(out);
    // add to parent
    parent.appendChild(div);
    // return created element
    return input;
}

// create html elements
function genVoiceControl(){

    // get parent object
    let voiceControl = document.querySelector("#voiceControl");

    if(voiceControl == null){
        return voiceControl.innerHTML = 'be sure to incude <div id="voiceControl"></div> before you include this script';
    }

    // check if speech synthesis is supported in this broswer
    if(~"speechSynthesis" in window){
        return voiceControl.innerHTML = 'this browser does not support speech synthesis';
    }

    // clear voice control 
    voiceControl.innerHTML = "";

    // create voice select box
    global_voiceSelect = document.createElement("select");

    // get voices from speech synthesis
    let voices = speechSynthesis.getVoices();

    voices.forEach((voice, i)=>{
        let option = document.createElement('option');
        option.value = voice.name;
        option.innerHTML = voice.name;
        global_voiceSelect.appendChild(option);
    });

    // add voice select to screen
    voiceControl.appendChild(global_voiceSelect);

    // create sliders
    global_volSlider = createSlider(voiceControl, VC_SLIDE[0]);
    global_rateSlider = createSlider(voiceControl, VC_SLIDE[1]);
    global_pitchSlider = createSlider(voiceControl, VC_SLIDE[2]);
}

function speak(text) {
    // Create a new instance of SpeechSynthesisUtterance.
      var msg = new SpeechSynthesisUtterance();
    
    // Set the text.
      msg.text = text;
    
    // Set the attributes.
      msg.volume = parseFloat(global_volSlider.value);
      msg.rate = parseFloat(global_rateSlider.value);
      msg.pitch = parseFloat(global_pitchSlider.value);
    
    // If a voice has been selected, find the voice and set the
    // utterance instance's voice attribute.
      if (global_voiceSelect.value) {
          msg.voice = speechSynthesis.getVoices().filter(function(voice) { return voice.name == global_voiceSelect.value; })[0];
      }
    
    // Queue this utterance.
    window.speechSynthesis.speak(msg);
  }


// Chrome loads voices asynchronously.
window.speechSynthesis.onvoiceschanged = function(e) {
    genVoiceControl();
};