export function validaData(dataInicio, dataFim) {
    const dataInicioJs = new Date(dataInicio);
    const dataFimJs = new Date(dataFim);
    if (!dataInicio || !dataFim) {
        return false;
    }
    if (dataInicioJs < new Date()) {
        return false
    }
    if (dataFimJs < dataInicioJs) {
        return false
    }
    return true
}
export function validaHora(horaInicio, horaFim) {
    if (!horaInicio || !horaFim) {
        return false;
    }
    const [horaIni, minIni] = horaInicio.split(":").map(Number);
    const [horaFimNum, minFim] = horaFim.split(":").map(Number);
    const horaInicioJs = new Date();
    horaInicioJs.setHours(horaIni, minIni, 0, 0);

    const horaFimJs = new Date();
    horaFimJs.setHours(horaFimNum, minFim, 0, 0);
    if (horaFimJs < horaInicioJs) {
        return false;
    }

    return true;
}
