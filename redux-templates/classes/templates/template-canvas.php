<?php
/**
 * ReduxTemplates - Canvas / Theme Override
 *
 * @since 4.0.0
 * @package redux-framework
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1"/>
	<link rel="profile" href="https://gmpg.org/xfn/11"/>
	<?php if ( ! current_theme_supports( 'title-tag' ) ) : ?>
		<title><?php echo esc_html( wp_get_document_title() ); ?></title>
	<?php endif; ?>
	<?php wp_head(); ?>
	<style type="text/css"><?php echo ReduxTemplates\Template_Overrides::get_overrides(); ?>body {background: unset !important;}body:before, body:after {height: 0 !important;}</style>
</head>
<body <?php echo body_class(); ?>>
<?php wp_body_open(); ?>
<?php
while ( have_posts() ) :
	the_post();
	?>
	<?php the_content(); ?>
<?php endwhile; ?>
<?php wp_footer(); ?>
</body>
</html>
