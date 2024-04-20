export { weekdays, days, footerButtons, menu, button, habits, habit, ulList }

const weekdays = document.querySelectorAll('.day span')
const days = document.querySelectorAll(".day")
const footerButtons = document.querySelectorAll("footer button")
const menu = document.querySelector(".menu-open")
const button = document.querySelector("#add-button")

const habits = JSON.parse(localStorage.getItem('habits')) || [];
const habit = "";
const ulList = document.querySelector(".habits ul")