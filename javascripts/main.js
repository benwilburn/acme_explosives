'use strict';
var AcmeExplosives = (function(aug) {
	document.querySelector("#dropdownMenu1");

	var categories;
	var types;
	var products;


	aug.getInfo = function(){
		categories = AcmeExplosives.getCategories();
		types = AcmeExplosives.getTypes();
		products = AcmeExplosives.getProducts();
	};

	console.log(categories);
	console.log(types);
	console.log(products);









	return aug;
})(AcmeExplosives || {});
