const moreBtn = document.querySelector('.more');

const mainSubNav = document.querySelector('.main-sub-nav');

console.log(moreBtn);

moreBtn.addEventListener('click', () => {
    mainSubNav.classList.toggle('hide');
    let text = moreBtn.textContent;
    moreBtn.textContent = text === "More +" ? "More -" : "More +";
});