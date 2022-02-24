const getGoods = function () {
    const links = document.querySelectorAll('.navigation-link')

    const getData = () => {
        fetch('/db/db.json')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                localStorage.setItem('goods', JSON.stringify(data))
                console.log(JSON.parse(localStorage.getItem('goods')));
                // console.log(localStorage.getItem('goods'));
            })
    }

    links.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault()
            getData()
        })
    })
}

getGoods()