window.addEventListener('DOMContentLoaded', () => {
    showStats()
})

function showStats(){
    fetch('../data.json')
        .then((data) => data.json())
        .then((info) => {
            const contairerStats = document.querySelector('.stats')
            
            let cards = info.map((atributo) => {
                  return `
                  <section class="stat ${atributo.category}-bg">
                        <section class="atributo">
                              <img src="${atributo.icon}" alt="">
                              <p class="${atributo.category}">${atributo.category}</p>
                        </section>
                        <p>${atributo.score} <span>/ 100</span></p>
                  </section>
                  `
            })
            
            cards.forEach((card) => {
                  contairerStats.innerHTML += card
            })
    
        })
}
