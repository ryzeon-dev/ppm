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
        margin: '5px'
    }}>L</span>
}

function Article(props) {
    if (props.titlePosition === 'over')  {
        return <div>
            <h2><YellowLogo/>{props.title}</h2>
            <div>
                <img src={'https://placehold.co/' + (props.placeholderSize)}/>
            </div>
        </div>
    } else {
        return <div>
            <div>
                <img src={'https://placehold.co/' + props.placeholderSize} alt=""/>
            </div>
            <h4>
                <YellowLogo/>
                {props.title}
            </h4>
        </div>
    }

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
            height: '100%',
            padding: '20px'
        }
    }

    return <div style={styles.wrapper}>
        <div className={'body-news-main'}>
            <Article
                titlePosition={"over"}
                title={'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}
                placeholderSize={'420x280'}

            />
            <Article
                titlePosition={"under"}
                title={"Sed non nibh id neque finibus placerat"}
                placeholderSize={'200x130'}
            />
            <Article
                titlePosition={"over"}
                title={'Fusce scelerisque non nibh sit amet ultricies'}
                placeholderSize={'300x200'}
            />
        </div>
    </div>

}

export default BodyNews;