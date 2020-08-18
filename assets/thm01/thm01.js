$(document).ready(function(){
//adjust height of #postcontainer
var postPadding = $("#postcontainer").outerHeight() - $("#postcontainer").height();
var minusHeight = $(window).height() - $('#headercont').outerHeight(true) - $('#footercont').outerHeight(true) - postPadding;
$(window).on("resize", function () {
if ($(window).width() < 899) {
$("#postcontainer").css("min-height", minusHeight);
}
}).resize();
//toggle nav
$("#headermenu").click(function(){
$("#headernav2").slideToggle("slow");
});
//undophotoset
undoPhotoset({
'posts': '.posts', // change '.post.text' to the text post selector
'text class': '', // change 'text' to the text post unique class (can be '')
'photoset class': '' // change 'photoset' to the photoset post unique class (can be '')
},true); // true = pxu, false = css photosets
//pxu photosets
$('.photo-slideshow').pxuPhotoset({
lightbox: true,
rounded: false,
gutter: '2px',
borderRadius: '0',
photoset: '.photo-slideshow',
photoWrap: '.photo-data',
photo: '.pxu-photo'
});
//NPF photosets
npfPhotosets(".posts", {
rowClass:"npf_row",
imageContainerClass:"tmblr-full",
generatedPhotosetContainerClass:"npf_photoset",
imageClass:"npf_image",
includeSingleRowImagesInPhotosets: true,
insertGalleryIndicator: false,
galleryIndicatorClass: "npf_gallery_indicator",
galleryIndicatorContent: "<img src='image_url'>",
photosetMargins:""
});
//empty caption fix
$("p:empty").remove();
$(".unnest").each(function () {
if ($(this).is(":empty")){
$(this).parents(".unnestcont").remove();
}});
});
