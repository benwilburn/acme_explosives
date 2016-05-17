'use strict';
var AcmeExplosives = (function (aug){

	var categoryDataSet;
	var typeDataSet;
	var productDataSet;

	function firstRequest() {
		// console.log("first running");
	 	return new Promise((resolve, reject) => {
 			$.ajax({
 				url:"jsons/categories.json"
 			}).done(function(data) {
 				resolve(data);
 			}).fail(function(xhr, status, error){
 				reject(error);
 			});
 		});
	 };

	function secondRequest() {
		// console.log("second running");
		return new Promise((resolve, reject) => {
			$.ajax({
				url:"jsons/types.json"
			}).done(function(data){
				resolve(data);
			}).fail(function(xhr, status, error){
				reject(error);
			});
		});
	};

	function thirdRequest () {
		// console.log("third running");
		return new Promise((resolve, reject) => {
			$.ajax({
				url:"jsons/products.json"
			}).done(function(data){
				resolve(data);
			}).fail(function(xhr, status, error){
				reject(error);
			});
		});
	};


	var first = firstRequest;

	var second = secondRequest;

	var third = thirdRequest;



		first().then(function(categoryData){
			categoryDataSet = categoryData;
			// console.log("catData", categoryDataSet);
			return second(categoryData);
		}).then(function(typeData){
			typeDataSet = typeData;
			// console.log("typeData", typeDataSet);
			return third(typeData);
		}).then(function(productData){
			productDataSet = productData;
			// console.log("proData", productDataSet);
			return productData;
		}).then(() => {
			if(third.done()){
				AcmeExplosives.getInfo()
			}
		});


	aug.getCategories = function(){
		return categoryDataSet;
	};
	aug.getTypes = function(){
		return typeDataSet;
	};
	aug.getProducts = function() {
		return productDataSet;
	}

	return aug;
})(AcmeExplosives || {});


