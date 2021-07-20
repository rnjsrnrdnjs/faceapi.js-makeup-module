
async function loadModels(){
	const MODEL_URL="/models";
	faceapi.loadTinyFaceDetectorModel(MODEL_URL).then(() => {
    console.log("Completed loading Face model");
  });
  	faceapi.loadFaceLandmarkTinyModel(MODEL_URL).then(() => {
    console.log("Completed loading Landmark model");
  });
}

async function getFullFaceDescription(blob, imageSize, inputSize = 416){
	let srcoreThreshold=0.3;
	const OPTION = new faceapi.TinyFaceDetectorOptions({
    inputSize,
    scoreThreshold
  });
  const useTinyModel = true;
  let img = await faceapi.fetchImage(blob);
  let detections =
    (await faceapi
      .detectAllFaces(img, OPTION)
      .withFaceLandmarks(useTinyModel)) || {};
	
  const resizeResults = faceapi.resizeResults(detections, imageSize);
  return resizeResults;
}

async function drawFaceLandmark(canvas,resizedResults){
	faceapi.draw.drawFaceLandmarks(canvas, resizedResults);
}