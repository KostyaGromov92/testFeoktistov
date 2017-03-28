/**
 * Created by Костя on 26.03.2017.
 */
$(document).ready(function () {

    var result = {};

    jQuery('article').each(function () {
        var that = jQuery(this);
        result.img = that.find('img').attr('src');
        result.title = that.find('h2').text();
        result.author = that.find('.author').text();
        result.time = that.find('.the-time').text();

        JSON.stringify(result);
        console.log(result);
    });

});
