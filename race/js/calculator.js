let history = document.querySelector('.history-val');
let output = document.querySelector('.output-val');

function removeZero() {
    let value = document.querySelector('.output-val').innerText;
    if (value == '0') {
        value = ''
        document.querySelector('.output-val').innerText = value;
    }
}

// function checkNumber(x) {

//     // check if the passed value is a number
//     if(typeof x == 'number' && !isNaN(x)){
    
//         // check if it is integer
//         if (Number.isInteger(x)) {
//             console.log(`${x} is integer.`);
//         }
//         else {
//             console.log(`${x} is a float value.`);
//         }
    
//     } else {
//         console.log(`${x} is not a number`);
//     }
// }


function isInt(n) {
    return n % 1 === 0;
}

// function addToHistory(value) {
//     history += value;
//     document.querySelector('.history-val').innerText = history;
// }

let buttonNumbers = document.querySelectorAll('.num-button');
let buttonOperators = document.querySelectorAll('.action-button');

buttonOperators.forEach((o_buttons) => {
    o_buttons.addEventListener('click', () => {
        let operation = o_buttons.id;
        let res_output = output.innerText;
        let res_history = history.innerText;

        if (operation === 'clear') {
            output.innerText = ''
            history.innerText = ''
        }
        else if (operation === 'plusmin') {
            output.innerText = `-${res_output}`
        }
        else if (operation === 'perc') {
            output.innerText = eval(`${res_output}/100`)
        }
        else if (operation === 'point') {
            output.innerText = `${res_output}.`
        }
        else {
            if (res_output != '' || res_history != '') {
                 res_history = res_history + res_output;
                if (operation == 'total') {
                    let result = eval(res_history);
                    //checkNumber(result);
                    if(isInt(result) == true)
                        output.innerText = result;
                    else {
                        output.innerText = result.toFixed(2)
                    }
                    history.innerText = ''
                } else {
                    res_history = res_history + o_buttons.innerText;
                    history.innerText = res_history;
                    output.innerText = ''
                }
            }
       }

    })
})

buttonNumbers.forEach(n_buttons => { //display numbers
    n_buttons.addEventListener('click', () => {
        removeZero()
        let res = output.innerText;
        if (res == NaN)
            return NaN;
        else {
            res = res + n_buttons.innerText;
            output.innerText = res;
        }
    })
})

