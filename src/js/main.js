// imports 
import { weekdays, days, footerButtons, menu, button, habits, habit, ulList } from "./constants.js"

// functions

function selectItem(event) {
    const day = event.currentTarget

    days.forEach(removeActiveClass)

    function removeActiveClass(day) {
        day.classList.remove('selected')
    }

    day.classList.add("selected")
}

function addHabit(event) {

    const index = habits.indexOf(habit.value)
    const existsInLocalStorage = index != -1

    existsInLocalStorage ? habits.splice(index, 1) : habits.push(habit.value)
        
    localStorage.setItem("habits", JSON.stringify(habits))
    ulList.innerHTML += `<li></li>`
    habit.value = "";
}

function handleButtons(e) {
    const item = e.currentTarget
    
    footerButtons.forEach(removeActiveClass)

    function removeActiveClass(item) {
        item.classList.remove('selected')
    }
    item.classList.add('selected')
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

footerButtons.forEach(footerButtons => {
    footerButtons.addEventListener('click', (e) => {
        handleButtons(e)
    })
})