<header class="banner navbar navbar-default navbar-static-top" role="banner">
  <div class="container">
    <div class="navbar-header row">
      <a class="navbar-brand" href="<?php echo esc_url(home_url('/')); ?>"><img src=<?php echo get_stylesheet_directory_uri().'/assets/img/G6PD-Logo.png'; ?>></a>
      <a class="donate-button" href="<?php echo get_permalink( get_page_by_title( 'Donate Today' ) ) ?>">Make a Donation</a>
    </div>

    <div class="row">
      <nav role="navigation">
        <?php
          if (has_nav_menu('primary_navigation')) :
            wp_nav_menu(array('theme_location' => 'primary_navigation', 'walker' => new Roots_Nav_Walker(), 'menu_class' => 'nav navbar-nav'));
          endif;
        ?>
      </nav>

    </div>

  </div>
</header>

<?php
  load_template(STYLESHEETPATH.'/templates/components/masthead.php');
