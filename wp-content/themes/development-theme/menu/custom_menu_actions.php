<?php
if ( ! function_exists( 'resort_mobile_menu' ) ) {
	/**
	 * @param $a
	 * @param $b
	 *
	 * @return int
	 */
	function resort_mobile_menu( $a, $b )
	{
		if ( $a === $b )
			return 0;

		return ( $a[ 'menu_order' ] > $b[ 'menu_order' ] ) ? 1 : - 1;
	}
}


if ( ! function_exists( 'build_menu_tree' ) ) {
	/**
	 * @param array $elements
	 * @param int $parentId
	 *
	 * @return array
	 */
	function build_menu_tree( array &$elements, $parentId = 0 )
	{
		$branch = [];

		foreach ( $elements as &$element ) {
			if ( $element->menu_item_parent == $parentId ) {
				$children = build_menu_tree( $elements, $element->ID );
				usort( $children, 'resort_mobile_menu' );
				if ( $children ) {
					$element->wpse_children = $children;
				}

				// $branch[ $element->ID ] = $element;
				$unescaped   = [ "'" ];
				$safe_enti   = [ "&apos;" ];
				$chunk_title = str_replace( $unescaped, $safe_enti, $element->title );

				$branch[ $element->ID ] = [
					'menu_order'       => $element->menu_order,
					'db_id'            => $element->db_id,
					'menu_item_parent' => $element->menu_item_parent,
					'object_id'        => $element->object_id,
					'type'             => $element->type,
					'type_label'       => $element->type_label,
					'title'            => $chunk_title,
					'url'              => $element->url,
					'target'           => $element->target,
					'attr_title'       => $element->attr_title,
					'description'      => $element->description,
					'classes'          => $element->classes,
					'wpse_children'    => $element->wpse_children,
				];
				unset( $element );
			}
		}

		return $branch;
	}
}


if ( ! function_exists( 'menu_items_to_tree' ) ) {
	/**
	 * @param $menu_id
	 *
	 * Usage: $mob_menu = menu_items_to_tree( 'Mobile Navigation' );
	 * For js $mob_menu = json_encode( $mob_menu, JSON_UNESCAPED_SLASHES );
	 *
	 * @return array|null
	 */
	function menu_items_to_tree( $menu_id )
	{
		$items = wp_get_nav_menu_items( $menu_id );

		if ( $items ) {
			$prepare_menu = build_menu_tree( $items, 0 );
			usort( $prepare_menu, 'resort_mobile_menu' );

			return $prepare_menu;
		}

		return null;

	}
}


if ( ! function_exists( 'render_mobile_menu' ) ) {
	/**
	 * @return false|object|void
	 */
	function render_mobile_menu()
	{
		$mob_menu = wp_nav_menu( [
			'menu_id'        => 'mobile-nav-menu',
			'theme_location' => 'primary',
			'echo'           => false,
			'container'      => false
		] );

		return $mob_menu;
	}
}

// Recognize menu location by id
if ( ! function_exists( 'get_menu_loc_by_id' ) ) {
	function get_menu_loc_by_id( $nav_menu_selected_id )
	{
		$_menu           = wp_get_nav_menu_object( $nav_menu_selected_id )->term_id;
		$theme_locations = get_nav_menu_locations();

		return array_search( $_menu, $theme_locations );
	}
}

// append media script to menu page
add_action( 'admin_head', 'aa_func_20165429115424' );
function aa_func_20165429115424()
{
	$screen = get_current_screen();
	if ( $screen->id === 'nav-menus' )
		wp_enqueue_media();
}

// Change default admin menu screen
add_filter( 'wp_edit_nav_menu_walker', 'custom_nav_edit_walker', 10, 1 );
function custom_nav_edit_walker( $menu_id )
{
	return 'AMenuAdminScreen';
}

// Allow HTML descriptions in menu
remove_filter( 'nav_menu_description', 'strip_tags' );
add_filter( 'wp_setup_nav_menu_item', 'al_allow_html' );
function al_allow_html( $menu_item )
{
	$menu_item->description = apply_filters( 'nav_menu_description', $menu_item->post_content );

	return $menu_item;
}

// Add custom menu item class in frontend
add_filter( 'nav_menu_css_class', 'aa_func_20165524105506', 10, 3 );
function aa_func_20165524105506( $classes, $item, $args )
{
	if ( ! in_array( 'mdl-navigation__link', $classes ) ) {
		$classes[] = 'mdl-navigation__link';
	}

	return $classes;
}

/**
 * ==================== Frontend render ======================
 */
add_filter( 'AMenu_start_elem', 'aa_func_20161009061036', 10, 1 );
function aa_func_20161009061036( $item )
{
	// Skip Vue cart item
	if ( is_array( $item->classes ) ) {
		if ( ! in_array( 'vuecart-class', $item->classes ) && ! is_admin() ) {

		}
	}

	return $item;
}

/**
 * ==================== Backend ======================
 */
//add_action( 'admin__menu_item_before', 'aa_func_20160809080813', 10, 1 );
function aa_func_20160809080813( $item )
{

}