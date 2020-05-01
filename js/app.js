window.onload = () => {
    var leftButton = document.getElementById(`wrice`);
    var rightButton = document.getElementById(`crice`);
    var wd = document.getElementById(`whitericediv`);
    var cd = document.getElementById(`californiaricediv`);
    var inputw = document.getElementById(`wricei`);
    var outputw = document.getElementById(`wriceo`);
    var inputc = document.getElementById(`cricei`);
    var outputc = document.getElementById(`criceo`);


    function showhide () {
        if (wd.style.display == `block`) {
            wd.style.display = `none` ;
        }
        else {
            wd.style.display = `block` ;
        }

    }

    function hidecdiv () {
        if (cd.style.display == `block`) {
            cd.style.display = `none`;
        }
    }

    function hidewdiv () {
        if (wd.style.display == `block`) {
            wd.style.display = `none`;
        }
    }

    leftButton.addEventListener(`click`, hidecdiv);
    leftButton.addEventListener(`click`, showhide);




    function showhidec () {
        if (cd.style.display == `block`) {
            cd.style.display = `none` ;
        }
        else {
            cd.style.display = `block` ;
        }

    }

    rightButton.addEventListener(`click`, hidewdiv);
    rightButton.addEventListener(`click`, showhidec);
