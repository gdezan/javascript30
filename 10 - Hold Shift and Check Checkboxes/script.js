const html = document.querySelector('html');
const input = Array.from(document.querySelectorAll('input'));

let lastClicked = 0;
let lastIndex = 0;
let tmp = 0;

for (let i in input) {
    input[i].addEventListener('click', (e) => {

        if (e.shiftKey && input[i].checked){
            if (lastIndex < i){
                for (let j = lastIndex; j <= i; j++){
                    input[j].checked = true;
                }
            } else {
                for (let j = i; j <= lastIndex; j++){
                    input[j].checked = true;
                }
            }
        } else {
            lastIndex = i;
        }
    });
};

