<?php
/**
 * ReduxTemplates - Full Width / Contained
 *
 * @since 4.0.0
 * @package redux-framework
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

get_header();
?><style type="text/css"><?php echo ReduxTemplates\Template_Overrides::get_overrides(); ?></style><?php
while ( have_posts() ) :
	the_post();
	the_content();
endwhile; // End of the loop.

get_footer();
