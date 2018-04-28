document.addEventListener("DOMContentLoaded",function changetext() {
	var one=document.getElementByID('block1');
	var two=document.getElementByID('block2');
	var three=document.getElementByID('block3');
	var four=document.getElementByID('block4');

	for (i=0;i<=4;i++) {

		if (i==1) {
			four.style.display='none';
			one.style.display='block';
			setTimeout(3000);
		} else if (i==2) {
			one.style.display='none';
			two.style.display='block';
			setTimeout(3000);
		} else if (i==3) {
			two.style.display='none';
			three.style.display='block';
			setTimeout(3000);
		} else if (i==4) {
			three.style.display='none';
			four.style.display='block';
			setTimeout(3000);
		} else {
			i=0;
			return changetext();
		}
	}
		console.log(i);
}

