export function tempoParaSegundos(tempo: string) {
    const [horas = '0', minutos = '0', segundos = '0'] = tempo.split(':')
    const horasEmSegundos = +horas * 3600
    const minutosEmSegundos = +minutos * 60
    return horasEmSegundos + minutosEmSegundos + +segundos
}