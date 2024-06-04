import React from 'react'
import style from './button.module.scss'

class Button extends React.Component<{text: string, type?: "button" | "submit" | "reset" | undefined, onClick?: () => void }> {
  render() {
    const { type, text, onClick } = this.props
    return(
      <button onClick={onClick} type={type} className={style.botao}>
        {text}
      </button>
    )
  }
}

export default Button