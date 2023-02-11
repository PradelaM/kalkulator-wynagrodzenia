// onst search = document.querySelector('.search');
// const li = document.querySelectorAll('li');

// const searchThing = (e) => {
// 	const text = e.target.value.toLowerCase();
// 	console.log(text);

// 	li.forEach((element) => {

//         if (element.textContent.toLowerCase().indexOf(text) !== -1) {
// 			element.style.display = 'block';
// 		} else {
// 			element.style.display = 'none';
// 		}
// 	});
// };

// search.addEventListener('keyup', searchThing);


const input=document.querySelector('input')
const li=document.querySelectorAll('li')

const searchList=()=>{
    li.forEach(el=> {
        const check= new RegExp(input.value, 'i').test(el.textContent)
        if(!check){
            el.style.display='none'
        }
        else{
            el.style.display='block'
        }
    })
}
input.addEventListener('keyup', searchList)

