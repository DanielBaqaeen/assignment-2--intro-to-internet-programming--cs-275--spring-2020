window.onload = () => {
    let leftButton = document.getElementById(`white-rice-button`);
    let rightButton = document.getElementById(`california-rice-button`);
    let whiteRiceDiv = document.getElementById(`white-rice-div`);
    let californiaRiceDiv = document.getElementById(`california-rice-div`);
    let wRiceQuantity = document.getElementById(`white-rice-input`);
    let whiteWaterOutput = document.getElementById(`water-amount-output-white`);
    let whiteWaterOutput2 = document.getElementById(`water-amount-output2-white`);
    let whiteOilOutput = document.getElementById(`oil-amount-output`);
    let whiteOilOutput2 = document.getElementById(`oil-amount-output2`);
    let whiteRiceOutput = document.getElementById(`white-rice-amount-output`);
    let calRiceQuantity = document.getElementById(`california-rice-input`);
    let alDenteLiquidOutput = document.getElementById(`aldente-liquid-amount`);
    let alDenteLiquidOutput2 = document.getElementById(`aldente-liquid-amount2`);
    let alDenteOilOutput = document.getElementById(`aldente-oil-amount`);
    let alDenteOilOutput2 = document.getElementById(`aldente-oil-amount2`);
    let alDenteRiceOutput = document.getElementById(`aldente-rice-amount-output`);
    let softLiquidOutput = document.getElementById(`soft-liquid-amount`);
    let softLiquidOutput2 = document.getElementById(`soft-liquid-amount2`);
    let softOilOutput = document.getElementById(`soft-oil-amount`);
    let softOilOutput2 = document.getElementById(`soft-oil-amount2`);
    let softRiceOutput = document.getElementById(`soft-rice-amount-output`);




    function whiteShowHide () {
        if (whiteRiceDiv.style.display == `block`) {
            whiteRiceDiv.style.display = `none` ;
        }
        else {
            whiteRiceDiv.style.display = `block` ;
        }

    }

    function californiaShowHide () {
        if (californiaRiceDiv.style.display == `block`) {
            californiaRiceDiv.style.display = `none` ;
        }
        else {
            californiaRiceDiv.style.display = `block` ;
        }

    }

    function hideCaliforniaDiv () {
        if (californiaRiceDiv.style.display == `block`) {
            californiaRiceDiv.style.display = `none`;
        }
    }

    function hideWhiteDiv () {
        if (whiteRiceDiv.style.display == `block`) {
            whiteRiceDiv.style.display = `none`;
        }
    }

    leftButton.addEventListener(`click`, hideCaliforniaDiv);
    leftButton.addEventListener(`click`, whiteShowHide);
    rightButton.addEventListener(`click`, hideWhiteDiv);
    rightButton.addEventListener(`click`, californiaShowHide);


    wRiceQuantity.addEventListener(`input`, function() {
        let whiteRiceFloat = parseFloat(wRiceQuantity.value);
        if (whiteRiceFloat < 0) {
            alert(`Amount can't be negative`);
        } else {
            let ouncesOfWater = 2*whiteRiceFloat;
            let ouncesOfOil = 0.0625*whiteRiceFloat;
            whiteWaterOutput.value = ouncesOfWater;
            whiteOilOutput.value = ouncesOfOil;
            whiteWaterOutput2.value = ouncesOfWater;
            whiteOilOutput2.value = ouncesOfOil;
            whiteRiceOutput.value = whiteRiceFloat;
        }

    });

    calRiceQuantity.addEventListener(`input`, function() {
        let californiaRiceFloat = parseFloat(calRiceQuantity.value);
        if (californiaRiceFloat < 0) {
            alert(`Amount can't be negative`);
        } else {
            let ouncesOfLiquidAlDente = 1.6*californiaRiceFloat;
            let ouncesOfOilCal = 0.05*californiaRiceFloat;
            let ouncesOfLiquidSofter = 2*californiaRiceFloat;
            alDenteLiquidOutput.value = ouncesOfLiquidAlDente;
            alDenteLiquidOutput2.value = ouncesOfLiquidAlDente;
            alDenteOilOutput.value = ouncesOfOilCal;
            alDenteOilOutput2.value = ouncesOfOilCal;
            alDenteRiceOutput.value = californiaRiceFloat;
            softLiquidOutput.value = ouncesOfLiquidSofter;
            softLiquidOutput2.value = ouncesOfLiquidSofter;
            softOilOutput.value = ouncesOfOilCal;
            softOilOutput2.value = ouncesOfOilCal;
            softRiceOutput.value = californiaRiceFloat;
        }
    });

};
