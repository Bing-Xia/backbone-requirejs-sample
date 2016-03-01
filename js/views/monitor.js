define(['text!/views/monitor.html'], function(MonitorHtml) {

	var MonitorView = Backbone.View.extend({
		el: "#lfs-view-content",

		events: {},
		initialize: function(){
			console.log("Arrived at monitor view page.");
			$(".page-view-title strong").text("Monitor View");
			this.render();
		},

		render: function(){
			this.$el.html(_.template(MonitorHtml));
			console.log("Render monitor view page.");   
		}

	});

	return MonitorView;

});