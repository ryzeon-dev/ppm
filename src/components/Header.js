import './Header.css';
import LoginLogo from './icons/login-icon.png';
import NewspaperIcon from './icons/newspaper-icon.png';

function Header() {
    const styles = {
        loginButton : {
            backgroundColor : '#eab002',
            borderRadius : '5px',
            padding: '5px'
        },
        hl : {
            borderBottom: 'solid black 2px'
        },
        optionalText : {
            marginLeft: '10px'
        }
    };

    return <div className={'header-main'}>
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
}

export default Header;