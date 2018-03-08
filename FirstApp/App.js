new Vue({
	el: '#app',
	data: {
		show: true,
		name: 'Amber',
		x: 0,
		y: 0,
		counter: 0,
		seccounter: 0,
		title: 'Hello World!',
		link: 'http://google.com',
		finishedLink: '<a href="http://google.com">Google</a>',
		attachRed: false,
		color: 'red',
		width: 100,
	},
	methods: {
		changeTitle: function(event) {
			this.title = event.target.value;
		},
		sayHello: function() {
			this.title = 'Hello!';
			return this.title;
		},
		increase: function(step, event) {
			this.counter += step;
		},
		updateCoordinates: function(event) {
			this.x = event.clientX;
			this.y = event.clientY;
		},
		alertMe: function() {
			alert('Alert!');
		},
		result: function() {
			console.log('method');
			return 'current counter: ' + this.counter;
		},
	},
	computed: {
		output: function() {
			console.log('computed');
			return 'second counter' + this.seccounter;
		},
		myStyle: function() {
			return {
				backgroundColor: this.color,
				width: this.width + 'px',
			};
		},
	},
	watch: {
		counter: function(value) {
			var vm = this;
			setTimeout(function() {
				vm.counter = 0;
			}, 2000);
		},
	},
});
