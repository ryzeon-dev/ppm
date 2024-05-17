import './Header.css';
import LoginLogo from './icons/login-icon.png';
import NewspaperIcon from './icons/newspaper-icon.png';
import {useEffect, useRef, useState} from "react";

function useSticky() {
    const ref = useRef(null);

    const [isSticky, setIsSticky] = useState(false)

    useEffect(() => {
        if (!ref.current) {
            return
        }

        const observer = new IntersectionObserver(
            ([event]) => setIsSticky(event.intersectionRatio < 1),
            {threshold: [1], rootMargin: '-1px 0px 0px 0px',}
        )
        observer.observe(ref.current)

        return () => observer.disconnect()
    }, [])

    return {ref, isSticky}
}


function Header() {
    const styles = {
        loginButton : {
            backgroundColor : '#eab002',
            borderRadius : '5px',
            padding: '5px',
        },
        hl : {
            borderBottom: 'solid black 2px',
        },
        optionalText : {
            marginLeft: '10px'
        }
    };

    function is_sticky() {
        try {
            let position = document.getElementById('header-wrapper').getBoundingClientRect().top;
            console.log(position);
            return position <= 1;
        } catch (e) {
            return false;
        }
    }

    const  {ref, isSticky} = useSticky();

    return <div ref={ref} className={'header-wrapper'} id={'header-wrapper'} style={{
        boxShadow : is_sticky() ? "0 5px 5px #AAAAAA" :"0 0 0"
    }}>
        <div className={'header-main'}>
            <div className={'optional'}>
                <img src={NewspaperIcon} width={'50px'} height={'50px'}/>
                <span style={styles.optionalText}>Lorem ipsum <br/> dolor sit</span>
            </div>

            <div className={'logo'}>
                <h1>Lorem Ipsum</h1>
            </div>

            <div className={'login'}>
                <img src={LoginLogo} width={'20px'} height={'20px'}/>
                <span>Lorem ipsum</span>
                <span className={'vl'}></span>
                <span style={styles.loginButton}>Dolor sit</span>
            </div>
        </div>
    </div>
}

export default Header;