<footer class="content-info" role="contentinfo">
  <div class="main-footer">
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-sm-12 col-xs-12">
          <?php dynamic_sidebar('sidebar-footer-1'); ?>
        </div>
        <div class="col-md-4 col-sm-12 col-xs-12">
          <div class="smedia-module">
            <h3>Social Media</h3>
            <ul class="smedia">
              <li><a href="<?php the_field('facebook_link', 'option'); ?>" target="_blank"><i class="fa fa-facebook fa-lg"></i></a></li>

            </ul>
            <p><a href="/contact-us/" class="button">Contact Us</a></p>
          </div>
        </div>
        <div class="col-md-4 col-sm-12 col-xs-12">
          <?php dynamic_sidebar('sidebar-footer-2'); ?>
        </div>
      </div>
    </div>
  </div>
  <div class="secondary-footer">
    <p>g6pdDF is a 501-c3 Non for Profit Organization</p>
    <div class="designed container">
      <p>Copyright 2016 g6pd Deficiency Foundation.</p>
    </div>
  </div>
  <div class="donate-footer">
    <div class="container">
      Support our growing G6PD Deficiency Awareness Campaign Today &nbsp;<a class="donate-button" target="_blank" href="<?php the_field('paypal_link', 'option'); ?>">Donate</a>
    </div>
  </div>
</footer>
