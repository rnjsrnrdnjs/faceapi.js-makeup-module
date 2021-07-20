import * as faceapi from "face-api.js";

export async function loadModels(){
	const MODEL_URL=process.env.PUBLIC_URL+"/models";
	faceapi.loadTinyFaceDetectorModel(MODEL_URL).then(() => {
    console.log("Completed loading Face model");
  });
  	faceapi.loadFaceLandmarkTinyModel(MODEL_URL).then(() => {
    console.log("Completed loading Landmark model");
  });
}

export async function getFullFaceDescription(blob, imageSize, inputSize = 512){
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
	
  const resizedDetections = faceapi.resizeResults(detections, imageSize);
	
  return resizedDetections;
}

export async function drawFaceLandmark(){
	
}