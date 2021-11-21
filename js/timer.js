//counter
document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration){
        let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1: -1,
        step = Math.abs(Math.floor(duration/ range)),
        timer = setInterval(() => {
            current += increment;
            obj.textContent = current;
            if(current == end) {
                clearInterval(timer);

            }
        }, step);
    }
    counter("count1", 0, 287, 4000);
    counter("count2", 0, 89, 4000);
    counter("count3", 0, 53, 4000);
    counter("count4", 0, 9, 4000);

});