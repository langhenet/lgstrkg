<?php

/*
	Woocommerce 3.0.0 Compatibility Fix
	Remove Enfold's custom functions that conflict with the new image display in WooCommerce 3.0.0
*/

global $woocommerce;
if( version_compare( $woocommerce->version, '3.0.0', ">=" ) ) {

	add_theme_support( 'wc-product-gallery-zoom' );
  add_theme_support( 'wc-product-gallery-lightbox' );

	function avia_woocommerce_gallery_thumbnail_description($img, $attachment_id, $post_id, $image_class ) {
	    return $img;
	}
	function avia_woocommerce_post_thumbnail_description($img, $post_id){
	    return $img;
	}

}