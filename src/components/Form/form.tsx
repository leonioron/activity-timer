import React from 'react'
import Button from '../Button/button'
import style from './form.module.scss'
import { ITarefa } from '../../types/ITarefa'
import { v4 as uuidv4 } from 'uuid'

const DEFAULT_STATE = {
    tarefa: '',
    tempo: '00:00:00',
    selecionado: false,
    completado: false
}

export default class Form extends React.Component<{ setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>}> {
    state = DEFAULT_STATE
    adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault()
        this.props.setTarefas(
            (tarefasAntigas) => [
                ...tarefasAntigas, 
                {
                    ...this.state,
                    selecionado: false,
                    completado: false,
                    id: uuidv4()
                }
            ]
        )
        this.setState(DEFAULT_STATE)
    }

    render() {
        return(
            <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor='tarefa'>
                        Adicione um novo estudo
                    </label>
                    <input 
                        type='text' 
                        name='tarefa' 
                        id='tarefa' 
                        placeholder='O que você quer estudar' 
                        value={this.state.tarefa}
                        onChange={evento => this.setState({...this.state, tarefa: evento.target.value})}
                        required
                    ></input>
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor='tarefa'>
                        Tempo
                    </label>
                    <input 
                        type='time' 
                        step='1' 
                        name='tempo' 
                        id='tempo' 
                        min={"00:00:00"} 
                        max={"01:30:00"} 
                        value={this.state.tempo}
                        onChange={evento => this.setState({...this.state, tempo: evento.target.value})}
                        required
                    ></input>
                </div>
                <Button
                    type="submit"
                    text="Adicionar"
                />
            </form>
        )
    }
}