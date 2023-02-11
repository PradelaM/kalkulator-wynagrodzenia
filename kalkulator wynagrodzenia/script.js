const price=document.querySelector('#price')
const people=document.querySelector('#people')
const extra=document.querySelector('#extra')
const error=document.querySelector('.error')
const countBtn=document.querySelector('.count')
const costInfo=document.querySelector('.cost-info')
const cost=document.querySelector('.cost')


const checkForm = () => {
    if(price.value=='' || people.value=='' || extra.value==0){
        error.textContent='Uzupełnij wszytskie pola!'
        costInfo.style.display='none'
    }
    else{
        error.textContent=''
        countBill()
        }
    }

    const countBill = () => {
        const newAmount=parseFloat(price.value)
        const newPeople=parseInt(people.value)
        const newExtra=parseFloat(extra.value)
        const sum= (newAmount+(newAmount*newExtra))/newPeople

        costInfo.style.display='block'

        cost.textContent=sum.toFixed(2)

}
countBtn.addEventListener('click', checkForm)
