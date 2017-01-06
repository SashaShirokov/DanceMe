var gulp = require("gulp"),
watch = require("gulp-watch");

gulp.task("default", function() {
	console.log("Hey! How are you");
});

gulp.task("html", function() {
	console.log("Hey! Keep up the great job!!!");
});
gulp.task("styles", function() {
	console.log("You must learn a lot and not stopping!!!");
});

gulp.task("watch", function() {
	watch("./app/index.html", function() {
		gulp.start("html");
	});
	watch("./app/assets/styles/**/*.css", function() {
		gulp.start("styles");
	});
});
