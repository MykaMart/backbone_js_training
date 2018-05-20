const Backbone 	= require("backbone");
const Stickit	= require("backbone.stickit");

const Preview = Backbone.View.extend({
		bindings: {
			"#name": 	"name",
			"#email": 	"email",
			"#street": 	"street",
			"#zip": 	"zip",
			"#city": 	"city",
			"#country": "country",
			"#phone": 	"phone",
			"#web": 	"web"
		},
		render: () => {
			this.$el.html("<div class="name"></div> \
				<div class="email"></div> \
				<div class="street"></div> \
				<div class="zip"></div> \
				<div class="city"></div> \
				<div class="country"></div> \
				<div class="phone"></div> \
				<div class="web"></div> \
			")
			this.stickit();
			return this;
		}
});

module.exports = Preview;