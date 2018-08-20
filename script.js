$(document).ready(function() {
    console.log("TEST!");
    $(".part-one").show();
    $(".part-two").hide();
    $(".part-three").hide();
    $(".submit-button").hide();
    $(".continue-button2").hide();
    $(".continue-button1").show();
    $(".navbar1").show();
    $(".navbar2").hide();
    $(".navbar3").hide();

});

$(".part1").click(function () {
    $(".part-two").hide();
    $(".part-one").show();
    $(".part-three").hide();
    $(".submit-button").hide();
    $(".continue-button2").hide();
    $(".continue-button1").show();

});


$(".part2").click(function() {
    $(".part-one").hide();
    $(".part-two").show();
    $(".part-three").hide();
    $(".submit-button").hide();
    $(".continue-button1").hide();
    $(".continue-button2").show();
});



$(".part3").click(function() {
    $(".part-one").hide();
    $(".part-two").hide();
    $(".part-three").show();
    $(".continue-button1").hide();
    $(".continue-button2").hide();
    $(".submit-button").show();
});


$(".continue-button1").click(function() {

    $(".part-one").hide();
    $(".part-three").hide();
    $(".continue-button1").hide();
    $(".continue-button2").show();
    $(".submit-button").hide();
    $(".part-two").show();
    $(".navbar1").hide();
    $(".navbar3").hide();
    $(".navbar2").show();

});

$(".continue-button2").click(function () {

    $(".part-one").hide();
    $(".part-two").hide();
    $(".part-three").show();
    $(".continue-button1").hide();
    $(".continue-button2").hide();
    $(".submit-button").show();
    $(".navbar1").hide();
    $(".navbar2").hide();
    $(".navbar3").show();

});

$(".submit-button").click(function () {
    alert("Thank you! Your form has been submitted.");
});

