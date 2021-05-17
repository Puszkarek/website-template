btn.addEventListener('click', function () {
    if (this.classList.contains('on')) this.classList.remove('on');
    else this.classList.add('on');
});
function toggleNav() {
    if (!nav_list.classList.contains('side-bar')) {
        nav_list.classList.add('side-bar');
    } else {
        nav_list.classList.remove('side-bar')
    }

}

async function estimate_pi(n) {
    let num_point_circles = 0;
    let num_point_total = 0;
    let x, y, distance;
    let i = 0;
    for (i; i < n; i++) {
        x = Math.random();
        y = Math.random();
        distance = x ** 2 + y ** 2;
        if (distance <= 1) {
            num_point_circles += 1;
        }
        num_point_total += 1;
    }
    return 4 * num_point_circles / num_point_total;
}