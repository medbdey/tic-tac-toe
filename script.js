function userInfo(name){
    const userName = 'welcome   ' + name;

    let score = 0;
    const getScore = ()=> score;
    const giveScore = ()=> score++;
    return {name,userName,score,getScore,giveScore};
}
const mohamed = userInfo('mohamed');
mohamed.giveScore();
mohamed.giveScore();
console.log({
    userName : mohamed.userName,
    score : mohamed.getScore()
}
)