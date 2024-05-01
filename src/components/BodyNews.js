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
    const styles = {
        textContent : {
            fontSize: '24px'
        },
        main : {
            gridColumn: 'span ' + props.span
        }
    };

    if (props.titlePosition === 'over')  {
        return <div style={styles.main}>
            <h2>
                <YellowLogo/>{props.title}
            </h2>
            <div>
                <img src={'https://placehold.co/' + (props.placeholderSize)}/>
            </div>
            <span style={styles.textContent}>{props.content}</span>
        </div>
    } else {
        return <div style={styles.main}>
            <div>
                <img src={'https://placehold.co/' + props.placeholderSize} alt=""/>
            </div>
            <h4>
                <YellowLogo/>
                {props.title}
            </h4>
            <span style={styles.textContent}>{props.content}</span>
        </div>
    }
}

function SmallArticle(props) {
    return <div>
        <YellowLogo />
    </div>
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
            //height: '100%',
            padding: '20px',
            backgroundColor: '#f5f6f8'
        }
    }

    return <div style={styles.wrapper}>
        <div className={'body-news-main'}>
            <Article
                titlePosition={"over"}
                title={'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}
                placeholderSize={'644x322'}
                content={'random content'}
                span={'3'}
            />

            <Article
                titlePosition={"over"}
                title={'Fusce scelerisque non nibh sit amet ultricies'}
                placeholderSize={'300x200'}
                content={'random content asfj+akljdsjfh a+lsdkfj a+lsdkfj a+sdlkjf s.lkduC+KBAr+IKRUCB+OIwvubn'}
                span={'1'}
            />

            <SmallArticle

            />
            <SmallArticle

            />
            <SmallArticle

            />
        </div>
    </div>

}

export default BodyNews;