jQuery(document).ready(function ($) {
    jQuery('.pp_like').click(function (e) {
        e.preventDefault();
        var postid = jQuery(this).data('id');
        var data = {
            action: 'my_action',
            security: MyAjax.security,
            postid: postid
        };
        jQuery.post(MyAjax.ajaxurl, data, function (res) {
            var result = jQuery.parseJSON(res);
            /*var id = result.postid;*/
            var postId = data.postid;            
            var likes = "";
            var count_id = jQuery( '#count_like-' + postId );
            likes = result.likecount + " Like";
            count_id.text(likes);
            if (result.like === 1) {
                count_id.prev('.pp_like').addClass('liked');
            }
            if (result.dislike === 1) {
                count_id.prev('.pp_like').removeClass('liked');
            }
        });
    });
});