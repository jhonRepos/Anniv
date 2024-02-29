// for second page

const data=[
    {
        date:'Mar 2, 2023',
        image:'4yrs.PNG',
        description:'Baguio city',
        quote:'Thinking of you keeps me awake. Dreaming of you keeps me asleep. Being with you keeps me alive.',
    },
    {
        date:'Mar 2, 2022',
        image:'3yrs.PNG',
        description:'Clark Pampanga',
        quote:'You are imperfect, permanently and inevitably flawed. And you are beautiful',
    },
    {
        date:'Mar 2, 2021',
        image:'2yrs.PNG',
        description:'tagaytay Sky Ranch',
        quote:'I like you very much, just as you are.',
    },
    {
        date:'Mar 2, 2020',
        image:'1yr.PNG',
        description:'Intramuros',
        quote:'Your love shines in my heart as the sun that shines upon the earth',
    },
    {
        date:'First ',
        image:'first.PNG',
        description:'Erodriguez',
        quote:"I love you' begins by I, but it ends up by you.",
    },
]
 const cardContainer= document.querySelector('.container')

const titleBtn= document.querySelector('.title-btn')


titleBtn.addEventListener('click', function() {
 
 var audio = document.getElementById("myAudio").play();
  var firsPage = document.querySelector(".firsPage");
    var secondPage = document.querySelector(".container");
    
   
        firsPage.style.display = "none";
        secondPage.style.display = "flex";
        secondPage.classList.add("secondPageActive");
  
});

data.forEach(item=>{
    const card = document.createElement('div');
    card.classList.add('card');

    const content = document.createElement('div');
    content.classList.add('content');

    
    const back = document.createElement('div');
    back.classList.add('back');

    const backContent = document.createElement('div');
    backContent.classList.add('back-content');
    backContent.innerHTML = `<p class="title"><strong>${item.quote}</strong></p>`;
    backContent.style.paddingInlineStart='10px';

    const front = document.createElement('div');
    front.classList.add('front');
    front.style.backgroundImage = `url('./assets/img/${item.image}')`;
    front.style.backgroundSize = 'cover';
    front.style.backgroundPosition = 'center';

    const frontContent = document.createElement('div');
    frontContent.classList.add('front-content');

    const badge = document.createElement('small');
    badge.classList.add('badge');
    badge.innerText = item.date;

    const description = document.createElement('div');
    description.classList.add('description');

    const title = document.createElement('div');
    title.classList.add('title');
    title.innerHTML = `<p class="title"><strong>${item.description}</strong></p>`;

    description.appendChild(title);
    frontContent.appendChild(badge);
    frontContent.appendChild(description);
    front.appendChild(frontContent);
 
    back.appendChild(backContent)
    
    content.appendChild(back);
    content.appendChild(front);

    card.appendChild(content);

    cardContainer.appendChild(card);

})