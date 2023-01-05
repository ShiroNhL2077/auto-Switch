const toggles = document.querySelectorAll('.toggle');

const good = document.querySelector('#good');
const cheap = document.querySelector('#cheap');
const fast = document.querySelector('#fast');

toggles.forEach (element => {
    element.addEventListener('click', 
    (e) => checkState (e.target) )
});

function checkState (clickedButton) {
    if (good.checked && cheap.checked && fast.checked) {

        if (good === clickedButton) {
            fast.checked = false;
        }
        
        if (cheap === clickedButton) {
            good.checked = false;
        }

        if (fast === clickedButton) {
            cheap.checked = false;
        }
    }
}