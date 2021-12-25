
let items = document.querySelectorAll('.fade');
console.log(items);
const options = {
    threshold: 0,
    rootMargin: '0px 0px -25% 0px'
};

const appear = new IntersectionObserver(
    function(entries, appear){
        entries.forEach(entry => {
            if(!entry.isIntersecting){
                entry.target.classList.remove('active');
                return;
            }
            else {
                entry.target.classList.add('active');
                appear.unobserve(entry.target);
            }
        })
    }, options
);

items.forEach(item => {
    appear.observe(item);
    console.log(item);
})


const slide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav');

    burger.addEventListener('click', ()=> {
        nav.classList.toggle('show');
    })
    console.log('slide called')
}

slide();
