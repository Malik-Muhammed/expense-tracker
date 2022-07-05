const btnDisplay = document.getElementsByClassName('btn-new-expense')[0];
const expenseDetailsContainer = document.querySelector('.expense-details-container');
const cancelBtn = document.querySelector('.cancel-btn');
const addExpenseBtn = document.getElementsByClassName('add-expense-btn')[0];
const gbogboInput = document.querySelectorAll('input');
const removeBtn = document.querySelector('.remove-btn');
const expenseList = document.querySelector('.expense-list-container');


btnDisplay.addEventListener('click', function(){
  expenseDetailsContainer.style.display ='block'; 
});

cancelBtn.addEventListener('click', function(){
    gbogboInput.forEach(input =>{
        input.value ='';
    })


    expenseDetailsContainer.style.display ='none'; 
});




addExpenseBtn.addEventListener('click', function(){

    let title = '';
    let amount = 0;
    let date = '';
    // console.log('All input:',gbogboInput);
    // console.log('Title field:', gbogboInput[0].value);
    // console
    // console.log('Amount field:', gbogboInput[1].value );
    // console.log('Date field:', gbogboInput[2].value);

    if(gbogboInput[0].value.trim.length < 0
        || (gbogboInput[1].value === '' || gbogboInput[1].value <=0) 
        || gbogboInput[2].value === ''){
        return alert('Please, input details in the right format');

    }

    gbogboInput.forEach(input =>{

        if(input.type === "text"){
            title = input.value;
        }
    
        else if(input.type === "number"){
            amount = input.value;
        }
    
        else if(input.type === "date"){
            date= input.value;
        }
        


        
    
    
    });


    document.querySelector('.expense-list-container').innerHTML += newSpending(title, amount,date);
    expenseDetailsContainer.style.display ='none'; 

    gbogboInput.forEach(input =>{
        input.value ='';
    });


removeBtnManager()


});




function newSpending(title, amount, date ){
const months = ['Jan', 'Feb', 'Mar' , 'Apr' , 'May', 'June', 'July', 'August', 'Sept', 'Oct' , 'Nov' , 'Dec']


const period = date.split('-');
const year = period[0];
const month = period[1];
const day = period[2];


return(` 

<div class="expense-list">

    <div class="expense-list-date">
        <p class="day">${day}</p>
        <p class="month">${months[month -1 ]}</p>
        <p class="year">${year}</p>
    </div>



    <p class="expense-title-list-name">${title}</p>

    <p class="expense-list-amount">$${amount}</p>

    <button class="remove-btn">Remove</button>

</div> `

)




}

function removeBtnManager(){
    document.querySelectorAll('.remove-btn').forEach((btn,i) => {
        btn.addEventListener('click', function() {
            expenseList.removeChild(document.querySelectorAll('.expense-list')[i]);
        });
    })
}







