import React from "react";
import s from './Main.module.css';

const Main = () => {
    let isVisible = false;
    function menuButtonClick() {
        let menuClasses = document.getElementById('menu');
        if (!isVisible) {
            menuClasses.className += ' ' + s.show;
            document.getElementById('line1').classList.add(s.line1Animate);
            document.getElementById('line2').classList.add(s.line2Animate);
            document.getElementById('line3').classList.add(s.line3Animate);
            isVisible = true;
        } else {
            menuClasses.className = s.menu;
            document.getElementById('line1').classList.remove(s.line1Animate);
            document.getElementById('line2').classList.remove(s.line2Animate);
            document.getElementById('line3').classList.remove(s.line3Animate);
            isVisible = false;
        }
        
    }
    const screenHeight = window.screen.height;
    let lineHeight = Math.round(screenHeight * 0.78);
    let svgHeight = Math.round(screenHeight * 0.85);
    let linePadding = Math.round(screenHeight * 0.05)
    let line = 'M 100 ' + linePadding + ' Q 0 ' + lineHeight/2 + ' 100 ' + lineHeight;
    return (
        <div className={s.container}>
            <h1>Fiksik`s site</h1>
            <button className={s.menuButton} onClick={menuButtonClick}>
                <hr className={s.line1} id='line1' width='25' align='right' size='2' color="white"></hr>    
                <hr className={s.line2} id='line2' width='25' align='center'size='2' color="white"></hr>    
                <hr className={s.line3} id='line3' width='25' align='center'size='2' color="white"></hr>    
            </button>
            <div className={s.menu} id='menu'>
            </div>
            <div>
            </div>
            <div className={s.smiley}>
            </div>
            <svg className={s.bezye} height={svgHeight} width='100'>
                <path d={line} stroke="white" fill="gray"></path>
            </svg>
            {/* <div className={s.polygon}></div> */}
        </div>
    )
}

export default Main;