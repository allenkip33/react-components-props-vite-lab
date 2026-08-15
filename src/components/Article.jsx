function Article ({title, date = 'January 1, 1970', preview, minutes}){
    function renderEmoji (){
        if (!minutes) return null;
        let emoji = '';
        let count = 0;

        if (minutes < 30){
            count = Math.ceil(minutes / 5);
            emoji = '☕️'.repeat(count);
        }else {
            count = Math.ceil(minutes / 10);
            emoji = '🍱'.repeat(count);
        }
        return `${emoji} ${minutes} min read`
    }   

    return (
        <article>
            <h3>{title}</h3>
            <small> {date} </small>
            <p> {preview} </p>
            {minutes && <p>{renderEmoji()}</p> }
        </article>
    );
}

export default Article; 