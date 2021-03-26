const thumbnail = document.querySelector('.thumbnail');
const jumbo = document.querySelector('.jumbo');
const container = document.querySelector('container');
const thumbs = document.querySelectorAll('.thumb');

// const sectionB = document.getElementById('b');
// const p4 = sectionB.querySelector('p');
// const h2Baru = document.createElement('h2');
// const teksH2Baru = document.createTextNode('Judul Baru');
// h2Baru.appendChild(teksH2Baru);
// sectionB.replaceChild(h2Baru, p4);


thumbnail.addEventListener('click', function (e) {
	if (e.target.className == 'thumb') {
		jumbo.src = e.target.src;
		jumbo.classList.add('fade');
		setTimeout(function () {
			jumbo.classList.remove('fade');
		}, 500);

		

		thumbs.forEach( function(thumb) {
			thumb.className = 'thumb';
		});

		e.target.classList.add('active');
	}

	console.log(e.target);
	console.log(jumbo)
})