import './Footer.css';

import GenericIcon from './icons/generic-image-icon.png';

function Footer() {
    const styles = {
        wrapper : {
            backgroundColor: '#2a303b',
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#a4a9b4',
            padding: '20px 0 20px 0',

        },
    }
    return <div style={styles.wrapper}>
        <div className={'footer-main'}>
            <div className={'standard-section'}>
                <h5><strong>LOREM IPSUM</strong></h5>
                <ul>
                    <li><a href={'#'}>Dolor sit amet</a></li>
                    <li><a href={'#'}>Consectetur adipiscing elit</a></li>
                    <li><a href={'#'}>Mauris suscipit pellentesque</a></li>
                    <li><a href={'#'}>Erat a sollicitudin</a></li>
                    <li><a href={'#'}>Morbi pulvinar vehicula</a></li>
                    <li><a href={'#'}>Orci eu accumsan</a></li>
                    <li><a href={'#'}>Pellentesque convallis</a></li>
                    <li><a href={'#'}>Quis risus</a></li>
                    <li><a href={'#'}>In bibendum</a></li>
                </ul>
                <h5>NUNC DIGNISSIM</h5>
                <ul>
                    <li><a href={'#'}>Convallis risus</a></li>
                    <li><a href={'#'}>Scelerisque ullamcorper </a></li>
                    <li><a href={'#'}>Massa sollicitudin id</a></li>
                </ul>
                <h5>MAECENAS ULTRICES</h5>
                <ul>
                    <li><a href={'#'}>Dolor ac</a></li>
                    <li><a href={'#'}>Placerat pellentesque</a></li>
                    <li><a href={'#'}>Ipsum nisl malesuada</a></li>
                </ul>
            </div>
            <div className={'standard-section'}>
                <h5>VESTIBULUM MAURIS</h5>
                <ul>
                    <li><a href={'#'}>Sollicitudin eu lobortis a</a></li>
                    <li><a href={'#'}>Sagittis et nisi</a></li>
                    <li><a href={'#'}>Sed et pretium massa</a></li>
                    <li><a href={'#'}>Pellentesque ullamcorper</a></li>
                    <li><a href={'#'}>Lacus at lobortis facilisis</a></li>
                    <li><a href={'#'}>Massa ligula</a></li>
                    <li><a href={'#'}>Vestibulum magna</a></li>
                    <li><a href={'#'}>Sit amet bibendum</a></li>
                    <li><a href={'#'}>Felis sapien quis eros</a></li>
                    <li><a href={'#'}>Sed est ipsum</a></li>
                </ul>
                <h5>DONEC FELIS EST</h5>
                <ul>
                    <li><a href={'#'}>Euismod et</a></li>
                    <li><a href={'#'}>Efficitur non</a></li>
                    <li><a href={'#'}>Venenatis in purus</a></li>
                    <li><a href={'#'}>Nam ac felis sem</a></li>
                    <li><a href={'#'}>Proin dui est</a></li>
                </ul>
            </div>
            <div className={'standard-section'}>
                <h5>QUISCQUE AUCTOR</h5>
                <ul>
                    <li><a href={'#'}>Viverra dignissim</a></li>
                    <li><a href={'#'}>Etiam viverra varius</a></li>
                    <li><a href={'#'}>Lorem vitae egestas</a></li>
                    <li><a href={'#'}>Vestibulum egestas nulla</a></li>
                    <li><a href={'#'}>Non dignissim blandit</a></li>
                    <li><a href={'#'}>Sed ac ornare lacus</a></li>
                    <li><a href={'#'}>Etiam eleifend</a></li>
                    <li><a href={'#'}>Risus diam</a></li>
                    <li><a href={'#'}>Vel cursus augue</a></li>
                    <li><a href={'#'}>blandit non</a></li>
                    <li><a href={'#'}>Donec efficitur</a></li>
                    <li><a href={'#'}>mattis orci</a></li>
                    <li><a href={'#'}>at auctor ex</a></li>
                </ul>
            </div>
            <div className={'hl-big'} id={'vertical-separator'}></div>
            <div className={'right-section'}>
                <div>
                    <h5>DUIS PELLENTESQUE FELIS NISL</h5>
                    <span className={'icon-link-span'} style={{padding: '0'}}>
                        <img src={GenericIcon}/>
                        <a href={'#'}>Sit amet scelerisque purus tincidunt id</a>
                    </span>
                    <div className={'hl'}></div>
                </div>

                <div>
                    <h5>DUIS PELLENTESQUE FELIS NISL</h5>
                    <span className={'icon-link-span'} style={{padding: '0'}}>
                        <img src={GenericIcon}/>
                        <a href={'#'}>Sit amet scelerisque purus tincidunt id</a>
                    </span>
                    <div className={'hl'}></div>
                </div>

                <div id={'right-section-bottom'}>
                    <h5>VIVAMUS AT IACULIS FELIS</h5>
                    <span className={'icon-link-span'}><img src={GenericIcon}/><a
                        href={'#'}>Maecenas eget consequat dui</a></span>
                    <span className={'icon-link-span'}><img src={GenericIcon}/><a href={'#'}>Nec ullamcorper tortor</a></span>
                    <span className={'icon-link-span'}><img src={GenericIcon}/><a href={'#'}>Cras ac magna a tortor pretium</a></span>
                    <span className={'icon-link-span'}><img src={GenericIcon}/><a
                        href={'#'}>Finibus quis in quam</a></span>
                    <a href={'#'}>In aliquet orci at</a>
                    <a href={'#'}>Dui dapibus facilisis</a>
                    <a href={'#'}>Duis vehicula dui eget</a>
                </div>


            </div>

            <div className={'hl-big'}/>

            <ul className={'horizontal-ul'}>
                <li><a href={'#'}>Nam at enim massa</a></li>
                <li><a href={'#'}>Pellentesque habitant</a></li>
                <li><a href={'#'}>Morbi tristique</a></li>
                <li><a href={'#'}>Morbi tristique</a></li>
                <li><a href={'#'}>Et malesuada</a></li>
                <li><a href={'#'}>Fames ac turpis</a></li>
            </ul>

            <div className={'hl-big'}/>

            <div className={'social-links'}>
                <span className={'icon-link-span'}><img src={GenericIcon}/><a href={'#'}>Lorem</a></span>
                <span className={'icon-link-span'}><img src={GenericIcon}/><a href={'#'}>Ipsum</a></span>
                <span className={'icon-link-span'}><img src={GenericIcon}/><a href={'#'}>Dolor</a></span>
                <span className={'icon-link-span'}><img src={GenericIcon}/><a href={'#'}>Sit</a></span>
                <span className={'icon-link-span'}><img src={GenericIcon}/><a href={'#'}>Amet</a></span>
                <span className={'icon-link-span'}><img src={GenericIcon}/><a href={'#'}>Consectetur</a></span>
                <span className={'icon-link-span'}><img src={GenericIcon}/><a href={'#'}>Adiscipling</a></span>
                <span className={'icon-link-span'}><img src={GenericIcon}/><a href={'#'}>Elit</a></span>
            </div>
        </div>
    </div>

}

export default Footer;