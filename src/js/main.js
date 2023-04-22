const weekdays = document.querySelectorAll('.day span')
const days = document.querySelectorAll(".day")

function selectItem(event) {
    const day = event.currentTarget

    days.forEach(removeActiveClass)

    function removeActiveClass(day) {
        day.classList.remove('select')
    }

    day.classList.add("select")
}

days.forEach(days => {
    days.addEventListener('click', (event) => {
        selectItem(event)
    })
})


