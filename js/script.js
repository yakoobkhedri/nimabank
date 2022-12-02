let mobileMenu = document.getElementById('mobileMenu');
let hamIcon = document.getElementById('hamIcon');
let closeIcon = document.getElementById('closeIcon');
let tabs = document.querySelectorAll('.section2 ul li');
let contents = Array.from(document.getElementsByClassName('content'));
let contents2 = Array.from(document.getElementsByClassName('content2'));

tabs.forEach((tab) => {
    tab.addEventListener('click', function() {
        let tabId = tab.dataset.id;
        contents.forEach((content) => {
            let contentId = content.dataset.id;
            if (tabId === contentId) {
                content.style.display = 'flex';
            } else {
                content.style.display = 'none';
            }
        })
    })
})
tabs.forEach((tab) => {
    tab.addEventListener('click', function() {
        let tabId = tab.dataset.id;
        contents2.forEach((content) => {
            let contentId = content.dataset.id;
            if (tabId === contentId) {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        })
    })
})

hamIcon.addEventListener('click', function() {
    mobileMenu.classList.add('active');
});
closeIcon.addEventListener('click', function() {
    mobileMenu.classList.remove('active');
});