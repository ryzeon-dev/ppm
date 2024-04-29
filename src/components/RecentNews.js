import './RecentNews.css';

function RecentNewsSection(props) {
    const styles = {
        main: {
            padding: '20px 30px 20px 30px',
            width: props.direction === 'v' ? '100%':'10%',
            display: 'flex',
            flexDirection: props.direction === 'v' ? 'row' : 'column',
            justifyContent: 'start',
            //alignItems: 'center',
        },
        time: {
            color: '#79c4df',
            margin: '0',
            padding: '0',
            textAlign: 'left'
        },
        text: {
            color: props.direction === 'v' ? '#000000' :'#FFFFFF',
            fontSize: '15px',
            margin: '0',
            padding: '0',
            textAlign: 'left'
        }
    };

    return <div style={styles.main}>
        <h5 style={styles.time}>HH:MM</h5>
        <p style={styles.text}><strong>{props.text}</strong></p>
    </div>
}

function VL() {
    return <div style={{
        borderLeft: 'solid #024771 1px',
        borderRight: 'solid #024771 1px',
        margin: '0 5px 0 5px'
    }}/>
}

function RecentNews(props) {
    const styles = {
        main : {
            backgroundColor: '#036487',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            padding: '0 70px 0 70px'
        }
    }


    function verticalCheck() {
        if (props.vertical ) {
            return true
        }
        return false
    }

    return <div className={'wrapper'}>
        <div id={'recent-news-container'} className={'recent-news-main' + (props.vertical ? '-vertical' : '')}>
        <RecentNewsSection
            text={'Lorem ipsum dolor sit amet, consectetur'}
            direction={verticalCheck() ? 'v' : 'h'}
        />
        <VL />
        <RecentNewsSection
            text={'Fusce at nulla tortor'}
            direction={verticalCheck() ? 'v' : 'h'}
        />
        <VL />
        <RecentNewsSection
            text={'Praesent ac feugiat metus'}
            direction={verticalCheck() ? 'v' : 'h'}
        />
        <VL />
        <RecentNewsSection
            text={'Proin accumsan vitae arcu eget euismod'}
            direction={verticalCheck() ? 'v' : 'h'}
        />
        <VL />
        <RecentNewsSection
            text={'Phasellus nunc tellus, facilisis a gravida id'}
            direction={verticalCheck() ? 'v' : 'h'}
        />
    </div>
    </div>
}

export default RecentNews;