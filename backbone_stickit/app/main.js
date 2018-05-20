const $ 			= require("jquery-untouched");
const _ 			= require("underscore");
const Backbone 		= require("backbone")
Backbone.$			= $

const address;

$(document).ready( () => {

	address = new Address();
	const formView({ model: address, el: $("#newForm")});
	formView.render();

	const preview = new Preview({model: address, el: $("#preview")});
	preview.render;

});

module.exports = {
	address: () => 	{ 
						return address
				 	}
}

