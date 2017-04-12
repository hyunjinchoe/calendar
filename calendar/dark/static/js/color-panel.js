// Theme Panel Open/Close
$( "#theme-panel .panel-button" ).click(function(){
	$( "#theme-panel" ).toggleClass( "close-theme-panel", "open-theme-panel", 1000 );
	$( "#theme-panel" ).toggleClass( "open-theme-panel", "close-theme-panel", 1000 );
	return false;
});	

// Color Skins
$('.switcher').click(function(){
	var title = jQuery(this).attr('title');
	jQuery('#changeable-colors').attr('href', 'css/color-schemes/' + title + '.css');
	
	$( '.canvas-color' ).each(function() {
		var loadfunction;
		loadfunction = $(this).data('load');
		div_id = this.id;
		if( loadfunction == "drawcolor" ) {			
			
			if( $(this).data('type') == "feature" ) {
				if( title == "yellow-bg" ) {
					if( $(this).data('hvcolor') != '' ) { var color = '#ffb647'; }
				}
				if( title == "blue" ) {
					if( $(this).data('hvcolor') != '' ) { var color = '#3498db'; }
				}
				if( title == "pink" ) {
					if( $(this).data('hvcolor') != '' ) { var color = '#f77fbe'; }
				}
				if( title == "green" ) {
					if( $(this).data('hvcolor') != '' ) { var color = '#20b2aa'; }
				}
				if( title == "a-brass-bg" ) {
					if( $(this).data('hvcolor') != '' ) { var color = '#cd9575'; }
				}
				if( title == "purple" ) {
					if( $(this).data('hvcolor') != '' ) { var color = '#8573CD'; }
				}
				if( title == "red" ) {
					if( $(this).data('hvcolor') != '' ) { var color = '#E74C3C'; }
				}
				if( title == "s-blue" ) {
					if( $(this).data('hvcolor') != '' ) { var color = '#1ed2ff'; }
				}
				if( title == "a-green" ) {
					if( $(this).data('hvcolor') != '' ) { var color = '#1ed2ff'; }
				}
				
				window[loadfunction](div_id, $(this).data('width'), $(this).data('height'), $(this).data('color'), color, $(this).data('icon'), $(this).data('iconsize'), $(this).data('iconcolor'), $(this).data('container'), $(this).data('animate'), '', $(this).data('link'), $(this).data('target') );
						
			}
			
		}
	});	
	
	$( '.canvas-graph' ).each(function() {
		var draw_loadfunction;
		draw_loadfunction = $(this).data('load');
		info_div_id = this.id;
		
		width = $(this).width();
		
		if( width < $(this).data('width') ) {
			width = $(this).width();
			height = $(this).width();
		} else {
			width = $(this).data('width');
			height = $(this).data('height');
		}
		
		if( width < $(this).data('width') && width <= 340 ) {
			var iconsize = 30;
		}
		else {
			var iconsize = $(this).data('iconsize');
		}
		
		if( draw_loadfunction == "drawinfograph" ) {
			
			if( title == "yellow" ) {
				if( $(this).data('iconbgcolor') != '' ) { var iconbgcolor = '#ffb647'; }
				if( $(this).data('pointhvcolor') != '' ) { var pointhvcolor = '#ffb647'; }
			}			
			if( title == "blue" ) {
				if( $(this).data('iconbgcolor') != '' ) { var iconbgcolor = '#3498db'; }
				if( $(this).data('pointhvcolor') != '' ) { var pointhvcolor = '#3498db'; }
			}
			if( title == "pink" ) {
				if( $(this).data('iconbgcolor') != '' ) { var iconbgcolor = '#f77fbe'; }
				if( $(this).data('pointhvcolor') != '' ) { var pointhvcolor = '#f77fbe'; }
			}
			if( title == "green" ) {
				if( $(this).data('iconbgcolor') != '' ) { var iconbgcolor = '#20b2aa '; }
				if( $(this).data('pointhvcolor') != '' ) { var pointhvcolor = '#20b2aa '; }
			}
			if( title == "a-brass-bg" ) {
				if( $(this).data('iconbgcolor') != '' ) { var iconbgcolor = '#cd9575 '; }
				if( $(this).data('pointhvcolor') != '' ) { var pointhvcolor = '#cd9575 '; }
			}
			if( title == "purple" ) {
				if( $(this).data('iconbgcolor') != '' ) { var iconbgcolor = '#8573CD'; }
				if( $(this).data('pointhvcolor') != '' ) { var pointhvcolor = '#8573CD'; }
			}
			if( title == "red" ) {
				if( $(this).data('iconbgcolor') != '' ) { var iconbgcolor = '#E74C3C'; }
				if( $(this).data('pointhvcolor') != '' ) { var pointhvcolor = '#E74C3C'; }
			}
			if( title == "s-blue" ) {
				if( $(this).data('iconbgcolor') != '' ) { var iconbgcolor = '#1ed2ff'; }
				if( $(this).data('pointhvcolor') != '' ) { var pointhvcolor = '#1ed2ff'; }				
			}
			if( title == "a-green" ) {
				if( $(this).data('iconbgcolor') != '' ) { var iconbgcolor = '#a4c639 '; }
				if( $(this).data('pointhvcolor') != '' ) { var pointhvcolor = '#a4c639 '; }				
			}
				
			window[draw_loadfunction](info_div_id, width, height, $(this).data('brcolor'), $(this).data('border'), $(this).data('scborder'), $(this).data('icon'), iconsize, $(this).data('iconcolor'), iconbgcolor, $(this).data('pointcolor'), pointhvcolor, $(this).data('ctext1'), $(this).data('ctext2'), $(this).data('ctext3'), $(this).data('ctext4'), $(this).data('ctext5'), $(this).data('width'), $(this).data('height') );
		}
	});
	
	return false;
});