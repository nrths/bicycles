    let position = 0;
    const slidesToShow = 1;
    const slidesToScroll = 1;
    const container = document.querySelector(".coverings");
    const track = document.querySelector(".coverings__slider");
    const items = document.querySelectorAll(".article");
    const itemsCount = items.length;
    const buttonPrevious = document.querySelector(".button_assignment_prev");
    const buttonNext = document.querySelector(".button_assignment_next");
    const itemWidth = container.clientWidth;
    const movePosition = slidesToScroll * itemWidth;

    items.forEach((item) => {
        item.style.minWidth = `${itemWidth}px`;
    });

    const setPosition = () => {
        track.style.transform = `translateX(${position}px)`;
    };

    const checkButtons = () => {
        buttonPrevious.disabled = position === 0;
        buttonNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
    };

    checkButtons();

    buttonPrevious.addEventListener('click', () => {
        position += movePosition;
        setPosition();
        checkButtons();
    });

    buttonNext.addEventListener('click', () => {
        position -= movePosition;
        setPosition();
        checkButtons();
    });



    