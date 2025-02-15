function searchMeal(){
    const searchInput = document.getElementById("search").value
    const div = document.getElementById("meal-container");
    div.innerHTML = '';

fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`)
.then(res => res.json())
.then(data => {
    console.log(data)
    data.meals.forEach(meal => {
        const meals = document.createElement('div')
        meals.classList.add('meal');
        meals.innerHTML=`
        <h3>${meal.strMeal}</h3>
        <img src="${meal.strMealThumb}">
        <p class="instruction">${meal.strInstructions}</p>
        <button class="read-more" onclick="read(this)">Read More</button>
        `;      
        div.appendChild(meals); 
    })
    .catch(error =>{
        console.log("error",error);
    })
})
}

function read(button){
    const paragraph = button.previousElementSibling;
    if(paragraph.classList.contains('expanded')){
        paragraph.classList.remove('expanded');
        button.textContent = 'Read more'
    }
    else{
        paragraph.classList.add('expanded');
        button.textContent = 'Read less';
    }
}