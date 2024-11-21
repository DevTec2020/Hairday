import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js"
import { hoursLoad } from "../form/hours-load.js";

// Seleciona o Input de data.
const selectedDate = document.getElementById("date")

export async function schedulesDay(){
    // Obtém a data do input
    const date = selectedDate.value 

    // Busca os agendamentos na API
    const dailySchedules = await scheduleFetchByDay({ date })
    console.log(dailySchedules)

    // Renderiza as horas disponíveis 
    hoursLoad({date})
}