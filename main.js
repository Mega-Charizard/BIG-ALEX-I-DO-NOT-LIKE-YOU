Webcam.set({
    width:350,
    height:300,
    img_format:'png',
    png_quility:90
});

camera = document.getElementById("camera");
Webcam.attach('#camera');


function take_snapshot()
{
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_img" src="' + data_uri + '"/>';
    });
}
 console.log('ml5 v:', ml5.version);

 classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/efjBJt3vu/model.json', modelLoaded);

 function modelLoaded()
 {
     console.log('modelLoaded');
 }

 function speak()
 {
     var synth = window.speechSynthesis;
     speak_data_1 = "meeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeep the first prediction is" + prediction_1;
     speak_data_2 = "meeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeep the second prediction is" + prediction_2;
     var utter_this = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
     synth.speak(utter_this);
 }