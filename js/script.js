$(document).ready(function(){
    $(".data").submit(function(event){
        const firstName = $("#Firstname").val();
        const lastName = $("#Lastname").val();
        const email = $("#email").val();
        const address = $("#Address").val();
        const phoneNumber = parseInt($("#phone").val());
        const Country = $("#country").val();
        const sex = $("input:radio[name=Gender]:checked").val();

     let totalInfo = (`${firstName} ${lastName}`)


    event.preventDefault();
     $("#table").toggle();
     $(".m").text(totalInfo)
     $(".e").text(phoneNumber)
     $(".t").text(email)
     $(".o").text(Country)
     $(".p").text(sex)
     $(".q").text(address)

})

})