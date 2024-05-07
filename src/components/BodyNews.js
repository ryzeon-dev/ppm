import './BodyNews.css';

function YellowLogo() {
    return <span style={{
        backgroundColor: '#eab002',
        height: '20px',
        width: '20px',
        padding: '5px 10px 5px 10px',
        color: 'white',
        borderRadius: '25%',
        textAlign: 'center',
        alignContent: 'center',
        margin: '5px',
        marginTop: '20px'
    }}>L</span>
}

function BigArticle(props) {
    const styles = {
        textContent : {
            fontSize: props.textSize ? props.textSize : '20px',
            padding: '0 20px 0 20px',
            textAlign: 'left'
        },
    };

    return <div id={props.id}>
        <h2>
            <YellowLogo/>{props.title}
        </h2>
        <div>
            <img src={'https://placehold.co/' + (props.placeholderSize)}/>
        </div>
        <p style={styles.textContent}>{props.content}</p>
    </div>
}

function Article(props) {
    const styles = {
        textContent : {
            fontSize: props.textSize ? props.textSize : '20px',
            padding: '0 20px 0 20px'
        }
    };

    return <div id={props.id}>
        <h2>
            <YellowLogo/>{props.title}
        </h2>
        <div className={'article-image-text-div'}>
            <img src={'https://placehold.co/' + (props.placeholderSize)}/>
            <p style={styles.textContent}>{props.content}</p>
        </div>

    </div>

}

function SmallArticle(props) {
    const styles = {
        container: {
            margin: '0 10px 0 10px'
        },
        text: {
            textAlign: 'left',
            lineHeight: '1.5'
        }
    };
    return <div style={styles.container}>
        <p style={styles.text}>{props.yl ? <YellowLogo/> : ''}{props.content}</p>
    </div>
}

function HL() {
    return <div
        className={'hl'}
    />
}

function BodyNews(props) {
    const styles = {
        main : {
            backgroundColor: '#F5F6F8',
        },

        wrapper : {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px',
            backgroundColor: '#f5f6f8'
        }
    }

    return <div style={styles.wrapper}>
        <div className={'body-news-main'}>
            <BigArticle
                titlePosition={"over"}
                title={'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}
                placeholderSize={'644x322'}
                content={'Pellentesque diam odio, pretium ac sem consectetur, consequat commodo ex. Aenean augue erat, auctor sed ex in, bibendum congue lacus. Cras elit mi, maximus vitae malesuada a, vehicula et mauris. In purus mi, luctus et sollicitudin sit amet, eleifend et felis. '}
                span={'3'}
                id={'big-top-one'}
            />

            <BigArticle
                titlePosition={"over"}
                title={'Fusce scelerisque non nibh sit amet ultricies'}
                placeholderSize={'300x200'}
                content={'Etiam lobortis aliquam nibh, quis convallis nibh vulputate non. Praesent augue ligula, interdum sit amet nulla sed, lacinia tempus metus. Aliquam erat volutpat'}
                id={'horizontal-only-article'}
            />

            <SmallArticle
                content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus efficitur ex ut velit fermentum sagittis. Nam dictum elit sit amet turpis auctor, a fringilla erat suscipit'}
                yl={true}
            />
            <SmallArticle
                content={'Mauris cursus sit amet orci eu placerat. Etiam id leo a quam suscipit consequat bibendum sit amet lacus. Morbi vehicula lectus nec pretium tincidunt. Sed vitae maximus purus'}
            />
            <SmallArticle
                content={'Vestibulum nec lacus auctor, iaculis neque ac, imperdiet leo. Donec sollicitudin ex vitae sem consectetur bibendum. Morbi et vestibulum odio'}
                yl={true}
            />

            <HL/>

            <div></div>
            <Article
                yl={true}
                placeholderSize={'198x132'}
                textSize={'16px'}
                title={'Etiam lobortis aliquam nibh'}
                content={'Praesent augue ligula, interdum sit amet nulla sed, lacinia tempus metus. Aliquam erat volutpat. Suspendisse sit amet metus porta, accumsan nisi eu, euismod sapien. Nullam ultricies, nisi ut rhoncus sodales, nunc justo ornare augue, nec vulputate urna elit eget nisl'}
            />
            <Article
                yl={true}
                placeholderSize={'198x132'}
                title={'Phasellus mauris libero'}
                textSize={'16px'}
                content={'Praesent imperdiet nibh sodales gravida porttitor. Nulla dignissim viverra fermentum. Vestibulum placerat blandit lorem. Nullam non pulvinar erat. Nunc dignissim dolor a arcu auctor pharetra. Etiam vel arcu vulputate, luctus diam ac, pulvinar tortor. Interdum et malesuada fames ac ante ipsum primis in faucibus.'}
            />
            <Article
                yl={true}
                placeholderSize={'198x132'}
                textSize={'16px'}
                title={'In suscipit maximus massa'}
                content={'Morbi tristique, massa a aliquam placerat, erat ipsum venenatis orci, sed laoreet ligula turpis ac nibh. Donec varius commodo neque et lobortis. Nullam porta vestibulum ex, at porttitor mi bibendum a. Etiam elementum lacus imperdiet feugiat congue.'}
            />

            <div></div>

            <HL/>

            <div></div>
            <div></div>
        </div>
    </div>
}

export default BodyNews;