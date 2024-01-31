const weekdays = document.querySelectorAll('.day span')
const days = document.querySelectorAll(".day")
const menu = document.querySelector(".menu-open")
const button = document.querySelector("button")

const habits = JSON.parse(localStorage.getItem('habits')) || [];
const habit = "";
const ulList = document.querySelector("ul")


// functions

function selectItem(event) {
    const day = event.currentTarget

    days.forEach(removeActiveClass)

    function removeActiveClass(day) {
        day.classList.remove('select')
    }

    day.classList.add("select")
}

function addHabit(event) {

    const index = habits.indexOf(habit.value)
    const existsInLocalStorage = index != -1

    existsInLocalStorage ? habits.splice(index, 1) : habits.push(habit.value)
        
    localStorage.setItem("habits", JSON.stringify(habits))
    ulList.innerHTML += `<li></li>`
    habit.value = ""
    console.log('oi')
}

// events

days.forEach(days => {
    days.addEventListener('click', (event) => {
        selectItem(event)
    })
})

menu.addEventListener('click', (menu) => {
    menu.style.backgroundColor = "red";
})

button.addEventListener('click', () => {
    addHabit()
})
