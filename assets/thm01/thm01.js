$(document).ready(function(){
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
