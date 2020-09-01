
var	pics = [
"https://i.pinimg.com/originals/f3/bd/84/f3bd8497e15399201b634714ec5ed390.jpg",
"https://devblogs.nvidia.com/wp-content/uploads/2016/07/cute.jpg",
"http://www.smashingphotoz.com/wp-content/uploads/2012/11/11_cat_photos.jpg",
"https://cdn.24.co.za/files/Cms/General/d/3975/2d37607e47904b088f051249d27bed10.jpg",
"https://i.pinimg.com/564x/30/f3/77/30f3777318bf0e450117e59bd4a5d0b5.jpg",
"https://i2.wp.com/hyptor.com/wp-content/uploads/2017/04/cute-cat.jpg?fit=758%2C426&ssl=1",
"https://d25tv1xepz39hi.cloudfront.net/2016-07-16/files/cat-sample_1313.jpg",
"https://www.lifewithcats.tv/wp-content/uploads/2018/10/cat-3695694_640.jpg",
"https://cdn.pixabay.com/photo/2018/01/07/16/15/animal-3067647_960_720.jpg",
];

var	btn = document.querySelector("button");
var img = document.querySelector("img");
var counter = 1;
btn.addEventListener("click", function(){
	if (counter === 8){
		counter = 0;
	}
	img.src = pics[counter]
	counter = counter + 1;
});
