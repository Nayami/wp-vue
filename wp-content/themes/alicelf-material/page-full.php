<?php
/**
 * Template Name: Full Page
 */
get_header();
?>
<div id="page-<?php the_ID(); ?>">
	<?php get_template_part('templates/loop', 'page') ?>
</div>
<?php get_footer(); ?>
