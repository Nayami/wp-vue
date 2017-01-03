var domready = require('domready')
var defaultAMscript = {
	run: function(){
		/**
		 * ==================== Common Functions ======================
		 * 19.12.2016
		 */
		window.isDescendant = function (parent, child) {
			var node = child.parentNode;
			while (node != null) {
				if (node == parent) {
					return true;
				}
				node = node.parentNode;
			}
			return false;
		};

		window.itemIsPureObject = function(item) {
			if ( item !== null && typeof item === 'object' ) {
				if(!(item instanceof Array))
					return item instanceof Object;

				return false;
			}
			return false;
		};

		window.dataToPost = function(action, data) {
			var formData = new FormData();
			formData.append('action', action);

			for (var part in data) {
				var dataItem = data[part];

				if(itemIsPureObject(dataItem)) {
					var details = JSON.stringify(dataItem);
					formData.append(part, details);
				} else {
					formData.append(part, dataItem);
				}

			}

			return formData;
		};

		/**
		 * ==================== MDL Upgrade DOM when changes ======================
		 * 10.12.2016
		 */
		var MutationObserver = window.MutationObserver
			|| window.WebKitMutationObserver
			|| window.MozMutationObserver;
		var observer = new MutationObserver(function() {
			componentHandler.upgradeDom();
		});
		observer.observe(document.body, {childList: true,subtree : true});


		/**
		 * ==================== Regular Domready script ======================
		 * 26.12.2016
		 */
		domready(function(){



		});


		/**
		 * ==================== jQuery ======================
		 * 26.12.2016
		 */
		jQuery(document).ready(function ($){

		});

	}
}
defaultAMscript.run()
module.exports = defaultAMscript