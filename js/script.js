document.addEventListener('DOMContentLoaded', function(){
    const burger = document.querySelector('.training_burger');
    const menu = document.querySelector('.burger_list');

    //Обработка клика на бургер
    burger.addEventListener('click', function(){
        burger.classList.toggle('burger_active');

        //Проверяем текущее состояние меню
        if (menu.style.display === 'block') {
            menu.style.display = 'none';
            //скрываем меню
        } else {
            menu.style.display = 'block';
            //показываем меню
        }
    })
})