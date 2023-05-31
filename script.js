const totalamount = document.getElementById("total_amount");
const btn = document.getElementById("total_amount_btn");
const budget_err = document.getElementById("budget_err");
const total_budget = document.getElementById("amount");



const bal_val = document.getElementById("bal_amount");
const expe_amount = document.getElementById("exp_amt");
const income_amt = document.getElementById("income_amt");

function setBudget() {
  temp_amt = totalamount.value;

  if (temp_amt === "" || temp_amt <= 0) {
    budget_err.classList.remove("hide");
  } else {
    budget_err.classList.add("hide");
    total_budget.innerHTML = temp_amt;
    bal_val.innerText = temp_amt;
    totalamount.value = "";
  }
}



if(bal_val.innerText === 0){
window.alert("Your Budget Balance is Null !");
}


function incomeList(){
var income_name = document.getElementById("income_tit").value;
var income_amount = document.getElementById("income_amount").value;

if(income_name && income_amount){
  var new_income = document.createElement("li");
  var newList = document.getElementById("list_one");

  newList.appendChild(new_income);

  
    new_income.innerHTML = income_name + ' - ' +income_amount;
    new_income.style.fontWeight = "bold";
    new_income.style.listStyleType = "decimal";
    new_income.style.padding = "20px";

  document.getElementById("income_tit").value = '';
  document.getElementById("income_amount").value = '';

      

  var new_income = parseInt(income_amt.innerText) + parseInt(income_amount);
  income_amt.innerText = new_income;

  // bal_val.innerText = new_income - expe_amount;
  income_name = '';
  income_amount = '';
}





}

function expenses() {
  var exp_am = document.getElementById("exp_amount").value;
  var exp_name = document.getElementById("exp_tit").value;

  if (exp_am && exp_name) {
    var newItem = document.createElement("li");
    var list = document.getElementById("list");
    list.appendChild(newItem);

    newItem.innerHTML = exp_name + ' - ' + exp_am;

    newItem.style.fontWeight = "bold";
    newItem.style.listStyleType = "decimal";
    newItem.style.padding = "20px";
    document.getElementById("exp_tit").value = '';
    document.getElementById("exp_amount").value = '';

    var new_exp_amount = parseInt(expe_amount.innerText) + parseInt(exp_am);
    expe_amount.innerText = new_exp_amount;

    bal_val.innerText = parseInt(temp_amt) - new_exp_amount;
    exp_name = '';
    exp_am = '';
  }
}
