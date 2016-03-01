define(['jquery', 'underscore', 'backbone', 'views/monitor', 'views/dashboard'],
	function($, _, Backbone, Monitor, Dashboard) {
		var LFSRouter = Backbone.Router.extend({
			instanceIndex: null,
			instanceMonitor: null,
			instanceDashboard: null,

			initialize: function(){
				console.log("LFS Router initialize");
			},

			routes: {
				'': 'monitor',
				'monitor': 'monitor',
				'dashboard': 'dashboard',
			},

			monitor: function(){
				console.log("Monitor View initialize");

				if (this.instanceMonitor == null) {
					this.instanceMonitor = new Monitor();
				}
			},

			dashboard: function(){
				console.log("Dashboard View initialize");

				if (this.instanceDashboard == null) {
					this.instanceDashboard = new Dashboard();
				}
			}
		});

		return LFSRouter;
	})