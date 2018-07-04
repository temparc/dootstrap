(function($){
	/**
	 *  Tabs UI functionality
	 *
	 */

	// set selectors
	var tabToggleNav = '.tab-nav';
	var tabToggleLinks = tabToggleNav + ' a';
	var tabActiveClass = 'active';
	var tabDataKey = 'tab-key';
	var tabContent = '.tab-content';

	$(tabToggleLinks).click( function(e){
		e.preventDefault();

		// set the active css class
		$(tabToggleNav + ' li').removeClass(tabActiveClass);
		$(this).closest('li').addClass(tabActiveClass);

		// get the data key to show
		var tabKey = $(this).data(tabDataKey);

		// show the content
		$(tabContent).hide();
		$(tabContent + '[data-' + tabDataKey + '="'+ tabKey +'"').show();
		return;
	});
})(jQuery);
