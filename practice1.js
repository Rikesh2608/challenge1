const questions=document.querySelectorAll('.questions-container');
const answers=document.querySelectorAll('.answers');
const plusminus=document.querySelectorAll('.questions div');

let answers_opened=[];

questions.forEach((question)=>{
    question.addEventListener('click',()=>{
        let c=question.dataset.que;
        answers.forEach((answer,index)=>{
                if(answer.dataset.ans==c){
                    if(answer.dataset.id==1){
                        answer.style.display=`block`;
                        clearvalues(answer.dataset.ans);
                        clearplusminus(c);
                    }
                    else if(answer.dataset.id==0){
                        answer.style.display=`none`;
                        answer.dataset.id=1;
                        clearplusminus(5);
                    }
                }
        });
    });
});

function clearplusminus(i){
    plusminus.forEach((img)=>{
        if(img.dataset.id==i){
            img.innerHTML=`
            <img src="icon-minus.svg">
            `;
        }
        else{
            img.innerHTML=`
                <img src="icon-plus.svg">
            `;
        }
    });
}

function clearvalues(i){
    answers.forEach((ans)=>{
        if(ans.dataset.ans==i){
            ans.dataset.id=0;
        }
        else{
            ans.dataset.id=1;
            ans.style.display=`none`;
        }
    });
}

console.log(questions);