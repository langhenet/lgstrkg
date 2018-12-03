<script src="/wp-includes/js/jquery/ui/datepicker.min.js?ver=1.11.4" language="javascript" type="text/javascript"></script>
<script language="javascript" type="text/javascript">
  	jQuery(document).ready(function() {
    jQuery('.js-booking-button').click( function() {

      var accordionContent = jQuery('.js-booking-form');
      jQuery(accordionContent).toggle('slow');
      jQuery(this).toggleClass('js-booking-form--open');
    })

    jQuery( '#datepicker' ).datepicker();
  });
</script>
