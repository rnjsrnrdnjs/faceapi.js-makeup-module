async function resizeImage(img){
	const imgContainer=document.getElementById('imgContainer');
	const canvas=document.createElement('canvas');

	const max_width=imgContainer.offsetWidth;
	const max_height=imgContainer.offsetHeight;
	let width=img.width;
	let height=img.height;

	height*=max_width/width;
	width=max_width;
	width=Math.floor(width);
	height=Math.floor(height);

	
	width*=max_height/height;
	height=max_height;
	width=Math.floor(width);
	height=Math.floor(height);

	
	

	
	
	const myImg=document.getElementById('myImg');
	myImg.width=width;
	myImg.height=height;
	
	let ctx=canvas.getContext('2d');
	canvas.width=await width;
	canvas.height=await height;
	ctx.drawImage(img,0,0,canvas.width,canvas.height);
	
	const dataurl=canvas.toDataURL('image/png');
	return dataurl;
	
	/*
	  if (width > height) {
            if (width > MAX_WIDTH) {
                height *= MAX_WIDTH / width;
                width = MAX_WIDTH;
            }
        } else {
            if (height > MAX_HEIGHT) {
                width *= MAX_HEIGHT / height;
                height = MAX_HEIGHT;
            }
        }
	*/
}