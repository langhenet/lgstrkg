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

  // function openCalendar(FormElement){
  //   var calendarwindow;
  //   // var left   = "left=" + screen.width - 300;
  //   url = "/wp-content/uploads/sites/8/calendar.html?formname=resform&formelement=" + FormElement;
  //   calendarwindow = window.open(url,"calendar","toolbar=no,width=200,height=144,top=200%,left=1200%,status=no,scrollbars=no,resize=no,menubar=no");
  //   calendarwindow.focus();
  // };
</script>
