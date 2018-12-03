<script language="javascript" type="text/javascript">
  	jQuery(document).ready(function() {
    jQuery('.js-booking-button').click( function() {
      console.log('ciao');

      var accordionContent = jQuery('.js-booking-form');
      jQuery(accordionContent).toggle('slow');
      jQuery(this).toggleClass('js-booking-form--open');
    })
  });
  function openCalendar(FormElement){
    var calendarwindow;
    url = "/wp-content/uploads/sites/8/calendar.html?formname=resform&formelement=" + FormElement;
    calendarwindow = window.open(url,"calendar","toolbar=no,width=200,height=144,top=50,left=50,status=no,scrollbars=no,resize=no,menubar=no");
    calendarwindow.focus();
  }
</script>
