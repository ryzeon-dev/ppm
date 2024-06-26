import './NavBar.css';
import HomeIcon from './icons/home-icon.png';
import SearchIcon from './icons/search-icon.png';
import DownArrow from './icons/down-arrow-icon.png';
import UpArrow from './icons/up-arrow-icon.png';
import Recent from './icons/recent-icon.png';
import {useEffect, useRef, useState} from "react";
import RecentNews from "./RecentNews";
import LoginLogo from "./icons/login-icon.png";

function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

function NavBarSection(props) {
    const [selfDropDownState, setSelfDropDownState] = props.selfDropDownState;

    const styles = {
        main : {
            backgroundColor: props.dropDownState === props.title ? '#f5f6f8' : '#FFFFFF'
        },
        image : {
            paddingLeft : '5px'
        }
    }

    function onClick() {
        if (selfDropDownState && props.dropDownState === props.title) {
            props.setDropDownState('');
            setSelfDropDownState(false);
            return
        }

        if (props.dropDownState !== '') {
            props.setDropDownState('');
            sleep(500);
        }

        props.setDropDownContent(props.dropDownContent);
        props.setDropDownState(props.title);
        setSelfDropDownState(true);
    }

    return <div style={styles.main} className={'navbar-section'}  onClick={onClick}>
        <span className={'navbar-section-title'}>{props.title}</span>
        <img
            src={selfDropDownState && props.dropDownState === props.title ? UpArrow : DownArrow}
            height={'15px'} width={'15px'} style={styles.image}
        />

    </div>
}

function NavBarDropDown(props) {
    const styles = {
        main : {
            position: 'absolute',
            backgroundColor : '#f5f6f8',
            display: props.state ? 'flex' : 'none',
            padding: '10px',
            fontSize: '18px',
            userSelect: 'none'
        }
    }

    return <div className={'navbar-drop-down'} style={styles.main}>
        {props.content}
    </div>
}

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

function NavBar() {
    const [dropDownState, setDropDownState] = useState('');
    const [dropDownContent, setDropDownContent] = useState(<div></div>);
    const [verticalRecentNews, setVerticalRecentNews] = useState(false);

    const styles = {
        loginButton: {
            backgroundColor: '#eab002',
            borderRadius: '5px',
            padding: '5px',
        },
    }

    function toggleVerticalRecentNews() {
        if (!verticalRecentNews) {
            setVerticalRecentNews(true);
            document.getElementById('navbar-main').style.position = 'fixed';
            document.getElementById('navbar-main').style.marginTop = '80px';
            document.getElementById('navbar-main').style.width = '100%';


        } else {
            setVerticalRecentNews(false);
            document.getElementById('navbar-main').style.position = 'unset';
            document.getElementById('navbar-main').style.marginTop = '0';
        }
    }

    function is_sticky() {
        try {
            let position = document.getElementById('navbar-main').getBoundingClientRect().top;
            console.log(position);
            return position <= 1;
        } catch (e) {
            return false;
        }
    }

    const  {ref, isSticky} = useSticky();

    return <div ref={ref} className={'navbar-main'} id={'navbar-main'} style={{
        boxShadow : is_sticky() ? "0 5px 5px #AAAAAA" :"0 0 0"
    }}>
        <div className={'navbar-sections-wrapper'}>
            <div className={'navbar-sections-container'}>
                <span className={'home-icon'} style={{
                    display: is_sticky() ? 'none' : 'flex'
                }}>
                    <img src={HomeIcon} width={'30px'} height={'30px'}/>
                </span>

                <div style={{
                        display: is_sticky() ? 'block' : 'none'
                }}>
                    <strong>LOREM IPSUM</strong>
                </div>

                <div className={'navbar-show-recent-news'} onClick={toggleVerticalRecentNews}>
                    <img src={Recent} width={'30px'} height={'30px'}/>
                </div>

                <NavBarSection
                    title={"LOREM"}
                    dropDownState={dropDownState}
                    setDropDownState={setDropDownState}
                    setDropDownContent={setDropDownContent}
                    selfDropDownState={useState(false)}
                    dropDownContent={<div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit
                        amet ex vitae lectus tempus porttitor. Integer quis ultricies neque. Nunc sit amet lorem non
                        elit posuere placerat mollis vitae sapien. Praesent ac turpis sollicitudin, elementum magna eu,
                        placerat dui. Vestibulum et lectus id libero placerat blandit. Integer sodales tellus felis, vel
                        rhoncus nunc viverra id. Proin aliquet ante ut massa pulvinar porta. Etiam eu lacus in libero
                        pulvinar posuere. Donec felis quam, consectetur eu condimentum eget, ullamcorper eu ipsum. Duis
                        bibendum cursus rhoncus. Suspendisse enim nibh, volutpat quis turpis nec, vulputate mattis sem.
                        Fusce consectetur justo quis augue porta, vitae malesuada arcu facilisis. </p></div>}
                />

                <NavBarSection
                    title={"IPSUM"}
                    dropDownState={dropDownState}
                    setDropDownState={setDropDownState}
                    setDropDownContent={setDropDownContent}
                    selfDropDownState={useState(false)}
                    dropDownContent={<div><p>Nullam lobortis vulputate tellus, quis pharetra nisl blandit vitae. Aliquam
                        erat volutpat. Morbi commodo orci non libero euismod, at dapibus erat eleifend. Donec posuere
                        ipsum a eros sollicitudin sagittis. Curabitur interdum eu purus sit amet tincidunt. Nulla lacus
                        ipsum, tincidunt non mi non, tempor consectetur felis. In id iaculis tellus. Nulla facilisi.
                        Nulla facilisi. Pellentesque ornare sed massa sit amet fermentum. Maecenas commodo dui nec ipsum
                        ornare condimentum. Vestibulum et lectus eget lectus facilisis rhoncus. Sed tempor magna sit
                        amet dictum hendrerit. Vestibulum eu pulvinar lorem. In et tempor eros, quis lacinia lectus.
                        Integer vitae felis non eros efficitur egestas ac in felis. </p></div>}
                />

                <NavBarSection
                    title={"DOLOR"}
                    dropDownState={dropDownState}
                    setDropDownState={setDropDownState}
                    setDropDownContent={setDropDownContent}
                    selfDropDownState={useState(false)}
                    dropDownContent={<div><p>Donec vitae pharetra ipsum. Quisque eu magna vel lacus viverra faucibus vel
                        vel dolor. Aliquam cursus consequat urna, placerat rhoncus purus condimentum non. Nulla
                        tristique a ante ac faucibus. Nunc congue arcu at lobortis venenatis. Interdum et malesuada
                        fames ac ante ipsum primis in faucibus. Duis nec sem tellus. </p></div>}
                />
                <NavBarSection
                    title={"SIT"}
                    dropDownState={dropDownState}
                    setDropDownState={setDropDownState}
                    setDropDownContent={setDropDownContent}
                    selfDropDownState={useState(false)}
                    dropDownContent={<div><p>Pellentesque at commodo velit, non cursus diam. Sed sed suscipit urna. Sed
                        lobortis metus nec dui sodales cursus. Vivamus magna tortor, vehicula quis hendrerit nec,
                        bibendum a velit. Nam sollicitudin nisi vitae sodales congue. Aliquam eu metus sit amet quam
                        tempor molestie. Phasellus accumsan odio dui, eu semper tellus consequat at. Donec blandit
                        viverra nisi, sed volutpat metus rhoncus vitae. Etiam vehicula eros risus, non efficitur sem
                        aliquet vel. Maecenas laoreet nec sapien ut pulvinar. Etiam risus odio, accumsan id massa eu,
                        sollicitudin pulvinar nunc. Phasellus convallis nisi vitae est dictum, ac dapibus turpis
                        placerat. Proin at nulla vel tellus tristique suscipit. Suspendisse nisi nibh, fermentum nec
                        malesuada nec, elementum vulputate eros. Aliquam non lacus consectetur, posuere dui non,
                        facilisis nunc. Phasellus non mauris pulvinar, fringilla tortor ac, imperdiet leo. </p></div>}
                />

                <NavBarSection
                    title={"AMET"}
                    dropDownState={dropDownState}
                    setDropDownState={setDropDownState}
                    setDropDownContent={setDropDownContent}
                    selfDropDownState={useState(false)}
                    dropDownContent={<div><p>In in vulputate odio, vel aliquam lectus. Ut tristique eget ante imperdiet
                        imperdiet. Vestibulum at libero venenatis nisi ullamcorper commodo id sit amet ligula. Vivamus
                        hendrerit varius quam nec ultricies. Integer consequat dignissim tellus, at vehicula libero
                        consectetur nec. Nam posuere vehicula tellus, eu aliquam lectus auctor at. Aenean viverra
                        laoreet libero, ut interdum nibh rutrum vel. </p></div>}
                />

                <NavBarSection
                    title={"CONSECTETUR"}
                    dropDownState={dropDownState}
                    setDropDownState={setDropDownState}
                    setDropDownContent={setDropDownContent}
                    selfDropDownState={useState(false)}
                    dropDownContent={<div><p>Etiam dapibus nibh non vehicula commodo. Duis tincidunt maximus
                        condimentum. Aenean in tempor orci. Curabitur non porta eros. Duis aliquet non ante sit amet
                        commodo. Fusce imperdiet ex eget nulla rhoncus sagittis. Maecenas quis nisl a nibh faucibus
                        blandit eget vel turpis. Maecenas non ex augue. Morbi tempor metus sed magna rhoncus, convallis
                        volutpat augue interdum. Duis interdum nulla sapien, vel volutpat dui rhoncus sed. </p></div>}
                />
                <NavBarSection
                    title={"ADIPISCING"}
                    dropDownState={dropDownState}
                    setDropDownState={setDropDownState}
                    setDropDownContent={setDropDownContent}
                    selfDropDownState={useState(false)}
                    dropDownContent={<div><p>Integer scelerisque, mauris at pharetra fermentum, sem dolor commodo
                        libero, lacinia condimentum metus urna id ante. Nullam metus odio, cursus sit amet bibendum
                        eget, consequat nec elit. Nullam ut interdum dolor. Nulla at imperdiet tortor. Quisque laoreet
                        ante justo, ut sollicitudin urna aliquam sed. Mauris sed nunc mollis, scelerisque est quis,
                        congue turpis. Sed pretium cursus orci. Curabitur rutrum elit est, in congue magna euismod sed.
                        Sed vitae pretium libero. Aliquam vehicula egestas felis vehicula bibendum. Sed in fringilla
                        odio. Duis hendrerit varius magna et maximus. Etiam quis tortor a lorem commodo commodo. Duis
                        gravida pretium vestibulum. </p></div>}
                />

                <span className={'navbar-search'} style={{
                    display: is_sticky() ? 'none' : 'flex'
                }}>
                    <img src={SearchIcon} width={'30px'} height={'30px'}/>
                </span>

                <div className={'navbar-login'} style={{
                    display: is_sticky() ? 'flex' : 'none'
                }}>
                    <img src={LoginLogo} width={'20px'} height={'20px'}/>
                    <span className={'vl'}></span>
                    <span style={styles.loginButton}>Dolor sit</span>
                </div>
            </div>
        </div>
        <NavBarDropDown
            state={dropDownState}
            content={dropDownContent}
        />
        <RecentNews
            vertical={verticalRecentNews}
            hide={is_sticky()}
        />
    </div>
}

export default NavBar;