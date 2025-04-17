//Collapse and expand information on click
$(".skillsTrigger").click(function(){
    $("#skillsText").slideToggle();
});

$(".experienceTrigger").click(function(){
    $("#experienceText").slideToggle();
});

$(".educationTrigger").click(function(){
    $("#educationText").slideToggle();
});

$(".referencesTrigger").click(function(){
    $("#referencesText").slideToggle();
});

$(".horizontalDivider").animate({
    width: "100%"
}, 700, function() {
    $(".horizontalDividerDark").animate({
        width: "100%"
    }, 700)
})

$(document).ready(function() {
    $(".me").hover(
        function(){
            //Mouse hovers over the image
            $(this).animate({
                'borderWidth': "8px"
            }, 300);
        },
        function() {
            $(this).animate({
                'borderWidth': "0px"
            })
        }
    );
});