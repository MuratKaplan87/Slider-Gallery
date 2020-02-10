function right() {
    $(function() {


        if ($("li:last").hasClass("aktiv")) {

            $("li:last").removeClass("aktiv");
            $("li:first").addClass("aktiv");
        } else {
            $("#sildercontent").find(".aktiv").removeClass("aktiv").next().addClass("aktiv");
        }

    })
}

function left() {
    $(function() {

        if ($("li:first").hasClass("aktiv")) {
            $("li:first").removeClass("aktiv");
            $("li:last").addClass("aktiv");
        } else {
            $("#sildercontent").find(".aktiv").removeClass("aktiv").prev().addClass("aktiv");
        }

    })
}
$(function() {

    var turn = setInterval("right();", 3000);
    $("#sildercontent").hover(function() {
        clearInterval(turn);
    }, function() {
        turn = setInterval("right();", 3000);
    })
})