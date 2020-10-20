$(document).ready(function () {
    // Add User Button function
    $("#addUser").click(function () {
        $("#TableBody").html($("#TableBody").html() + "<tr><td class='col-id' width='33%' >" + $("#UserID").val() + "</td><td class='col-name' width='33%'>" + $("#UserName").val() + "</td><td class='col-occupation' width='33%'>" + $("#UserOccupation").val() + "</td></tr>");
        var newID = parseInt($("#UserID").val()) + 1;
        $("#UserID").val(newID);
        $("#UserName").val("");
        $("#UserOccupation").val("");
    });

    // Sort By Smallest Number in ascending function
    function sortByNumber(rows, selector, ascending){
        rows.sort(function(a, b) {
            var numberA = parseInt($(selector, a).text(), 10);
            var numberB = parseInt($(selector, b).text(), 10);
            if (ascending)
                return numberA - numberB;
            else
                return numberB - numberA;
        });
        return rows;
    }
    // Sort By Alphabet in Text in ascending Function
    function sortByText(rows, selector, ascending){
        rows.sort(function(a, b) {
            var textA = $(selector, a).text();
            var textB = $(selector, b).text();
            if (ascending)
                return textA.localeCompare(textB);
            else
                return textB.localeCompare(textA);
        });
        return rows;
    }
    // Get category name function
    function sortBy(category){
        var rows = $('table tbody tr').toArray();

        switch (category) {
            case 'UserID':
                rows = sortByNumber(rows, 'td.col-id', true);
                break;
            case 'UserName':
                rows = sortByText(rows, 'td.col-name', true);
                break;
            case 'UserOccupation':
                rows = sortByText(rows, 'td.col-occupation', true);
                break;
            default:
                console.error('Undefined sort by category ' + category);
                break;
        }
        
        for (var i = 0; i < rows.length; i++) {
            $('table tbody').append(rows[i]);
        }
    }
    // Function run when dropdown content change
    $("#sort").change(function () {
        sortBy(this.value);
    });

});