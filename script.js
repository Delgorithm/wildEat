const allBtn = document.querySelectorAll('.filterRestaurant');

allBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        allBtn.forEach((button) => {
            button.style.backgroundColor = '';
            button.style.color = '';
            button.style.scale = '1.0';
        });

        btn.style.backgroundColor = 'var(--clr-main-pink)';
        btn.style.color = 'var(--clr-white)';
        btn.style.scale = "1.1"
    });
});