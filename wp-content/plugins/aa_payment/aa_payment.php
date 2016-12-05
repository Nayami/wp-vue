<?php
/*
Plugin Name: AA Payment
Plugin URI: http://www.upwork.com/fl/olegtsibulnik
Description: AA Payment plugin - Upload and Activate. PHP version 5.4+ required
Author: Alicelf WebArtisan
Version: 1.0.1
Author URI: http://www.upwork.com/fl/olegtsibulnik
*/
session_start();
// Dependencies
require_once( 'AAPluginInitial.php' );
global $aa_payment;
$aa_payment = new AAPluginInitial( "AA Payment", null, null, null, 99 );


include_once( 'vendor/autoload.php' );

// Wrap to wp_loaded for get user and set him notice
add_action( 'plugins_loaded', 'aa_func_20150406060442', 1 );
function aa_func_20150406060442()
{
	global $aa_payment;
	// Notice content. Can has hrefs or other html
	$aa_payment->setPluginNotice( 'aa_payment_welcome', "Plugin {$aa_payment->_plugin_name} is enabled" );

	$aa_payment->setOption( 'paypal_credentials', [ ] );
}

// Change Plugin title
add_filter( 'aa_payment_basetitle', 'aa_func_20150506060501', 10, 1 );
function aa_func_20150506060501( $title )
{
	$title .= " (payment gateway credentials)";

	return $title;
}

/**
 * Plugin page content
 */
add_action( 'aa_payment_content', 'aa_func_20150506060514' );
function aa_func_20150506060514()
{
	?>
	<h1>Paypal donation form</h1>

	<pre>[paypal_donations_form]</pre>

	<pre>[paypal_pro_donation_form]</pre>
	<?php
}