import './Selectionador.css'
import { students } from '../students'
import { useEffect, useState } from 'react'
export const Selectionator = ({ students }) => {
    const [isActive, setIsActive] = useState(false)
    const [counter, setCounter] = useState(5)
    const [winner, setWinner] = useState('')


    
    const handleClick = () => {
        setIsActive(true);
        timerCounter();
    }


    const timerCounter = () => {
        const intervalId = setInterval(() => {
            setCounter(prevCounter => {
                if (prevCounter > 0) {
                    return prevCounter - 1;
                } else {
                    clearInterval(intervalId); // Detiene el intervalo cuando el contador llega a 0
                    return setCounter(0);
                }
            });
        }, 1000);
    }

    const handleWinner = () => {
        const random = Math.floor(Math.random() * students.length)
        setWinner(students[random].name)
    }

    useEffect(() => {
        if (counter === 0 && isActive) {
            handleWinner();
        }
    }, [counter, isActive]);

  

    return (
        <div className="btnSeleccionador">
            {counter > 0 ?
             <img src="../../public/patopresentador.png"/>

             :

             <img className='patoFelix' src="../../public/patoganador.png"/>


            }

            {!isActive &&
                <button className='btnSelt' onClick={handleClick}>Who is the winner?</button>
            }

            {isActive && counter > 0 &&
            
            (
                <div className="counter">
                    <img className='pocoyo' src="../../public/tocando-el-tambor-pocoyo.gif"/>
                    <p>{counter}</p>
                    <img className='confetti' src="../../public/tocando-el-tambor-pocoyo.gif"/>
                </div>
            )
            }

            {isActive && counter === 0 &&
            (
                <div className='winner'>
                    <img className='pocoyo' src='../../public/wired-flat-1103-confetti.gif'/>
                    <p>PatoWinner es  <span className='winnerName'>{winner}</span></p>
                    <img className='confetti' src='../../public/wired-flat-1103-confetti.gif'/>

                </div>
            )
            }
        </div>
    )
}