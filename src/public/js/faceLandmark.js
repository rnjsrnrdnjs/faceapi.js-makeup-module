
async function loadModels(){
	const MODEL_URL="/models";
	Promise.all([
    	faceapi.nets.ssdMobilenetv1.loadFromUri(MODEL_URL),
    faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
    faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
	]).then((val) => {
    // console here gives an array of undefined
		console.log(val);
		load();
		/*
	    faceapi.detectSingleFace(img).then((value) => {
	     console.log(value)
	    }).catch((err) => { console.log(err) });
		*/
	}).catch((err) => {
	    console.log(err)
	});
	/*
	faceapi.loadSsdMobilenetv1Model(MODEL_URL).then(() => {
    console.log("Completed loading Face model");
	MODELLOAD=true;
	load();
  });
  	faceapi.loadFaceLandmarkModel(MODEL_URL).then(() => {
    console.log("Completed loading Landmark model");
	LANDLOAD=true;
	load();
  });*/
}

async function getFullFaceDescription(blob, imageSize, inputSize = 416){
  const OPTION = new faceapi.SsdMobilenetv1Options({
      minConfidence:0.5,
  });
  let img = await faceapi.fetchImage(blob);
  let detections =await faceapi
      .detectAllFaces(img, OPTION)
      .withFaceLandmarks()
  
  const resizeResults = faceapi.resizeResults(detections, imageSize);
  return resizeResults;
}

async function drawFaceLandmark(canvas,resizedResults){
	faceapi.draw.drawFaceLandmarks(canvas, resizedResults);
}