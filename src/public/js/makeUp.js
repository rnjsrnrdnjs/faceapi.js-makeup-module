async function makeUploading(resizedResults,features){
	console.log(features);
	const canvas=document.getElementById('canvas');
	const ctx=canvas.getContext('2d');
	ctx.beginPath();
	for(let i in features.jaw){
		if(i!=0){
			ctx.moveTo(features.jaw[i-1].x,features.jaw[i-1].y);
		}
		ctx.lineTo(features.jaw[i].x,features.jaw[i].y);
	}
	ctx.stroke();
	
}

