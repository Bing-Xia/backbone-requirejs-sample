define(["text!/views/dashboard.html"], function(DashboardHtml) {

	var DashboardView = Backbone.View.extend({
		el: "#lfs-view-content",

		events: {},
		initialize: function(){
			console.log("Arrived at dashboard view page.");
			$("div.page-view-title strong").text("Dashboard View");
			this.render();
		},

		render: function(){
			this.$el.html(_.template(DashboardHtml));
			console.log("Render dashboard view page.");
		}
	});

	return DashboardView;

});