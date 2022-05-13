import { Burger } from '../styles/BurgerBtn_sc'

const BurgerBtn = (props)  => {
    return(
        <Burger>
                 <div onClick={props.handleClick} 
                      className={`icon nav-icon-5 ${props.clicked ? 'open' : ''}`}
                 >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
        </Burger>
    )
}

export default BurgerBtn;