import dayjs from "dayjs"

const form = document.querySelector("form")
const selectedDate = document.getElementById("date")

// Data atual para formatar o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

// Carrega a data atual e Define a data minima como sendo a data atual.
selectedDate.value = inputToday
selectedDate.min = inputToday

form.onsubmit = (event) => {
    event.preventDefault()

}