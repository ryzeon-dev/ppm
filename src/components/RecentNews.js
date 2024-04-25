import './RecentNews.css';

function RecentNewsSection(props) {
    const styles = {
        main: {
            padding: '20px 30px 20px 30px',
            width: '10%',
            display: 'flex',
            flexDirection: props.direction === 'v' ? 'column' : 'row',
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
            color: '#FFFFFF',
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

function RecentNews() {
    const styles = {
        main : {
            backgroundColor: '#036487',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            padding: '0 70px 0 70px'
        }
    }
    return <div className={'recent-news-main'}>
        <RecentNewsSection
            text={'Lorem ipsum dolor sit amet, consectetur'}
            direction={'v'}
        />
        <VL />
        <RecentNewsSection
            text={'Fusce at nulla tortor'}
            direction={'v'}
        />
        <VL />
        <RecentNewsSection
            text={'Praesent ac feugiat metus'}
            direction={'v'}
        />
        <VL />
        <RecentNewsSection
            text={'Proin accumsan vitae arcu eget euismod'}
            direction={'v'}
        />
        <VL />
        <RecentNewsSection
            text={'Phasellus nunc tellus, facilisis a gravida id'}
            direction={'v'}
        />
    </div>
}

export default RecentNews;