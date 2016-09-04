$(".animsition").animsition({
    outClass: 'fade-out-left',
    inClass: 'fade-in-right',
    inDuration: 700,
    outDuration: 500
});

$('#da-thumbs > li').hoverdir({hoverDelay: 75, hoverElem: '.elem'});

$('#bar-1').jqbar({ label: 'HTML5', value: 80, barColor: 'red', orientation: 'h', barWidth: 15});
$('#bar-2').jqbar({ label: 'CSS3', value: 70, barColor: 'green', orientation: 'h', barWidth: 15});
$('#bar-3').jqbar({ label: 'JavaScript', value: 30, barColor: 'blue', orientation: 'h', barWidth: 15});
$('#bar-4').jqbar({ label: 'jQuery', value: 40, barColor: 'coral', orientation: 'h', barWidth: 15});
$('#bar-5').jqbar({ label: 'PSD to HTML', value: 75, barColor: 'violet', orientation: 'h', barWidth: 15});
$('#bar-6').jqbar({ label: 'Responsive', value: 50, barColor: 'yellow', orientation: 'h', barWidth: 15});