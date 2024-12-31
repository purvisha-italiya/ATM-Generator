$("document").ready(function () {

    var myotp;

    $("#generator").click(function () {
        myotp = Math.floor(Math.random() * 1000000 + 1000)
        alert(myotp);
        console.log(myotp);
    });
 

    $("#btn").click(function () {
        var name = $("#name").val();
        var balance = $("#balance").val();
        var withdrawal = $("#withdrawal").val();

        var amount = balance - withdrawal;

        var otp = $("#otp").val();
        if (otp == myotp) {
            $("#txt").text("Your Name is: " + name);

            $("#ansb").text("Your bank balance is: " + balance);
            $("#answith").text("Your bank balance is: " + withdrawal);
            $("#ansamount").text("Your bank balance is: " + amount);
            $("#ansotp").text("Your otp " + otp + " is successfully ");
        }
        else
            $("#txt").text("Please try again");

        $("#result").show(1000);
    })
});