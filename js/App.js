//Starting cart subtotal, let's say this is fetched from a server.
var subtotal = 469.94;

//Starting cart products amounts, fetched from the server as well.
var products = [1, 1, 1];

function removeItem(id, price, selectid){
	var quantity = $(selectid).val();
	$(id).fadeOut("fast");
	for(var i = 0; i < quantity; i++){
		updateSubtotal(price, true);
	}
}

function updateSubtotal(amount, substract){
	if(substract)
		subtotal = subtotal - amount;
	else
		subtotal = subtotal + amount;
	//Round the subtotal
	subtotal = Math.round(subtotal * 100) / 100;
	//Update the DOM
	$("#subtotal").text("Subtotal: $" + subtotal);
}

function ValorTotal(id, price, index){
	var substract;
	var newamount = $(id).val();
	var difference = newamount - products[index];
	//If the amount is higher than the previous, we're adding, rather than substracting
	substract = difference < 0 ? true : false;
	//Update the products amount
	products[index] = newamount;
	//Change the value
	for(var i = 0; i < Math.abs(difference); i++){
		updateSubtotal(price, substract);
	}

}

function addToCart(){
	swal({    
		title: "Added to Cart!",   
		text: "item has been successfully added to cart.",   
		type: "success",
		showCancelButton: true, 
		cancelButtonText: "Game On!",
		confirmButtonText: "Go to cart!",
		html: true }, function(){
			window.location.href = "../Cart.html";
		});
}