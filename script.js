$(document).ready(function () {
    let initialId = 0
    let taskListElement = [];

    function mColors() {
        let sixRandomColor = ["#F78273", "#FA99D6", "#A26DF8", "#0783F2", "#07E3F2", "#FEFE8F"];
        let rand = Math.floor(Math.random() * sixRandomColor.length);
        return sixRandomColor[rand]}

    $('#button').click(function () {
        if ($('input[type=text]').val() == "") {
            alert("A note will appear when data is entered");}
        else {
        initialId++
        var toAdd = $('input[type=text]').val();
        $('ul').append(`<li class="randomColor"  style="background-color: ${mColors()}"> 
        <div class="checkbox"><input id="${initialId}" type="checkbox" name="answer" class="squCheckbox"></div> 
        <div class="text"><p>${toAdd}</p></div></li>`)}
    })

    // function for adding id's of elements to array
    $('ul').on('click', '.squCheckbox', function () {
        console.log('this',this.id)
        if (!taskListElement.includes(this.id)) {
            taskListElement.push(this.id);
            console.log(taskListElement);
        }
        else {
            console.log('Outside of function',this.id)
            taskListElement = taskListElement.filter(number => {
                return number !== this.id;
            });
        }
    })

    // function for changing color for checked elements
    $('.square').click(function () {
        const colorSquare = $(`#${this.id}`).css("background-color");

        // if (this.id == 'orange') {
        //     colorSquare = $('#orange').css("background-color");
        // }
        // else if (this.id == 'rose') {
        //     colorSquare = $('#rose').css("background-color");
        // }
        // else if (this.id == 'purpure') {
        //     colorSquare = $('#purpure').css("background-color");
        // }
        // else if (this.id == 'blue') {
        //     colorSquare = $('#blue').css("background-color");
        // }
        // else if (this.id == 'aquamarine') {
        //     colorSquare = $('#aquamarine').css("background-color");
        // }
        // else if (this.id == 'yellow') {
        //     colorSquare = $('#yellow').css("background-color");
        // }

        $.each(taskListElement, function (index, value) {
            console.log('value',value)
            $(`#${value}`).parent().parent().css("background-color", colorSquare);
        })
    })
})