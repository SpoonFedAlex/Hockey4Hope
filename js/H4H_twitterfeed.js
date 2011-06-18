// JavaScript Document

// JavaScript Document
// This is a self invoking function. 
// The $ parameter allows you to reference the jQuery item.
(function($){

$.fn.twitterize = function(username,options){
    
    if (username){

        var defaultSettings = {
            count:'1'
        }
        var settings = $.extend(defaultSettings, options);

        var url = "http://twitter.com/status/user_timeline/"+username+".json?count="+settings.count+"&callback=?";

        var holder = this;
        
        $.getJSON(url,
        function(data){

            $.each(data, function(i, item) {

                holder.append("<div class='newsTweet'>"+item.text.makeLinks()+"</div>");
    
            });
			$('.twitterbox div').hover(
		        function () {
		            $(this).addClass('newsHover'); 
		        }, 
		        function () {
		            $(this).removeClass('newsHover');        
		        }
		    );
			$('.twitterbox div').click(function() {
				var url = $(this).find('a').attr('href');
			  	window.location=url;
			});
        });
        
    }else{

        console.debug("jquery plugin twitterize requires a username! Check your parameters");

    }
    
    String.prototype.makeLinks = function() {
        return this.replace(/[A-Za-z]+:\/\/[A-Za-z0-9-_]+\.[A-Za-z0-9-_:%&\?\/.=]+/, function(str) {
        return str.link(str);
        });
    }; 

    
return this;

};

})(jQuery);