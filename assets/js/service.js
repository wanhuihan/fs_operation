
fs.service("fs", function() {

	return {

		cookieCheck: function() {

			if(jQuery.cookie(g.cookie)) {

				jQuery("#page-container").removeClass("no-login");

				return true;

			} else {

				return false;
			}


		}
	}
})