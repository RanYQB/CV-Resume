var contactBtn = document.getElementById('contact');
var expeBtn = document.getElementById('experiences');
var formationBtn = document.getElementById('formation');
var competenceBtn = document.getElementById('competences');
var InteretBtn = document.getElementById('interet');
var content = document.getElementById('content');

function showContact(){
    let request = new XMLHttpRequest(); 
    request.open('GET', 'http://localhost/cv-en-ligne/data.json');
    request.responseType = 'json';

    request.addEventListener('readystatechange', function() {
        if (request.readyState === 4 && request.status === 200){
            content.innerHTML = ""; 
            let array1 = []
            array1 = request.response.contact.slice();

            var contactCard = `
                <div class="fromBottom">
                    <h1 class="text-center">
                    Contact
                    </h1>
                    <div class="row justify-content-center m-3" >
                        <div class="col-11 col-lg-8 p-4 myDiv text-center" >
                            <img class=" rounded-circle m-auto shadow" style="width: 15rem;" src="./pictures/photo.jpg" alt="Card image cap">
                            <div class="m-3">
                                <p class="text-center">${array1[0]}</p>
                                <p class="text-center">${array1[1]}</p>
                                <p class="text-center mb-0">${array1[2]}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        content.innerHTML = contactCard; 
        };
    });

    request.send();
}

contactBtn.addEventListener('click', showContact);

function showExpe(){
    let request = new XMLHttpRequest(); 
    request.open('GET', 'http://localhost/cv-en-ligne/data.json');
    request.responseType = 'json';

    request.addEventListener('readystatechange', function() {
        if (request.readyState === 4 && request.status === 200){
            content.innerHTML = "";   
            let array2 = [];
            array2 = request.response.experiencesProfessionelles;
        
            var ExpeCard = `
                <h1 class="text-center fromTop">
                Expériences professionnelles
                </h1>
            `;

            for (let i=0; i<array2.length; i++){
                if (i%2 == 0){
                    ExpeCard += `
                        <div class="row gx-3 justify-content-center fromLeft " >
                            <div class="col-11 col-lg-10 mb-4 p-4 myDiv" >
                                <h3>${array2[i].poste}</h3>
                                <h5>${array2[i].periode}</h5>
                                <ul>
                     `
                } else {
                    ExpeCard += `
                        <div class="row gx-3 justify-content-center fromRight " >
                            <div class="col-11 col-lg-10 mb-4 p-4 myDiv" >
                                <h3>${array2[i].poste}</h3>
                                <h5>${array2[i].periode}</h5>
                                <ul>
                     `
                };
                
                for(let j=0; j< array2[i].missions.length; j++){
                    ExpeCard += `
                        <li>&#9656 ${array2[i].missions[j]}</li>
                        `;
                };

                ExpeCard += `
                            </ul>
                        </div>
                    </div>   
                     `;
            };

        content.innerHTML = ExpeCard;    
        };
    })

    request.send();
};

expeBtn.addEventListener('click', showExpe); 

function showFormation(){ 
    let request = new XMLHttpRequest(); 
    request.open('GET', 'http://localhost/cv-en-ligne/data.json');
    request.responseType = 'json';

    request.addEventListener('readystatechange', function() {
        if (request.readyState === 4 && request.status === 200){
            content.innerHTML = ""; 
            let array1 = []
            array1 = request.response.formations.slice();

        var formationCard = `
            <h1 class="text-center fromTop">Formation</h1>
            <div class="row gx-3 justify-content-center" >  
        `

        for (let i=0; i<array1.length; i++){
            if (i%2 === 0){
                formationCard += `
                <div class="col-12 col-lg-5 mb-4 p-4 myDiv fromLeft" >
                    <h3 class="text-center">${array1[i].ecole}</h3>
                    <h5 class="text-center">${array1[i].date}</h5>
                    <p class="text-center title">${array1[i].intitule}</p>
                <ul>`; 

                for(let j=0; j<array1[i].description.length; j++){
                    formationCard += `<li class="text-justify pe-3"> &#9657 ${array1[i].description[j]}</li>`
                };

                formationCard += `
                    </ul>
                    <div class="d-grid d-md-flex justify-content-md-center">
                        <a href="https://www.studi.com/fr/formation/developpement/graduate-developpeur-front-end" class="btn myBtn mt-3" target="_blank" >Plus d'informations</a>
                    </div>
                </div>`;
                } else {
                formationCard += `
                    <div class="col-12 col-lg-5 mb-4 p-4 myDiv fromRight" >
                        <h3 class="text-center">${array1[i].ecole}</h3>
                        <h5 class="text-center">${array1[i].date}</h5>
                        <p class="text-center title">${array1[i].intitule}</p>
                    <ul>`; 
                for(let j=0; j<array1[i].description.length; j++){
                    formationCard += `<li class="text-justify pe-3 "> &#9657 ${array1[i].description[j]}</li>`
                };

                formationCard += `</ul>
                </div>`;
                };
        }        

        formationCard +=`  
            </div>
            `;
        content.innerHTML = formationCard; 
        };
    });

    request.send();
}

formationBtn.addEventListener('click', showFormation); 

function showCompetences(){
    let request = new XMLHttpRequest(); 
    request.open('GET', 'http://localhost/cv-en-ligne/data.json');
    request.responseType = 'json';

    request.addEventListener('readystatechange', function() {
        if (request.readyState === 4 && request.status === 200){
            content.innerHTML = "";
            let array1 = []
            array1 = request.response.competences;
            var compCard = `
                <h1 class="text-center fromTop mb-4">Compétences</h1>
                <div class="row justify-content-center text-center mb-4 fromBottom" >
                    <h3>Langages et frameworks</h3>
            `;

            for(let i=0; i<array1.web.length; i++){
                compCard += `
                <div class="col d-flex justify-content-center col-lg-3 m-1 p-4 " >
                    <div class="graph${i} d-flex align-items-center justify-centent-center">
                        <p class="m-auto lang">${array1.web[i]}</p>
                    </div>
                </div>
                `
            };
              
            compCard +=`
                </div>
                <div class="row justify-content-center text-center mb-4 fromBottom" >
                    <h3>Bureautique</h3>
                `;

            for(let i=0; i<array1.bureautique.length; i++){
                compCard += `
                    <div class="col-3 text-center mb-2 p-4 " >
                        <img src=${array1.bureautique[i]} class="text-center logoComp">
                    </div> 
                    `;   
            }     
            
            compCard += `
                </div>
                <div class="row justify-content-center text-center fromBottom" >
                    <h3>Langues</h3>
                `; 

            for(let i=0; i<array1.langues.length; i++){
                compCard += `
                    <div class="col-11 col-lg-3 text-center mb-0 p-2  " >
                        <p class="text-center langues">${array1.langues[i]}</p>
                    </div>
                `; 
            }  

            compCard += `
                </div>`;
            content.innerHTML = compCard; 
        };
    });
    request.send();
};

competenceBtn.addEventListener('click', showCompetences)

function showInterest(){
    let request = new XMLHttpRequest(); 
    request.open('GET', 'http://localhost/cv-en-ligne/data.json');
    request.responseType = 'json';

    request.addEventListener('readystatechange', function() {
        if (request.readyState === 4 && request.status === 200){
            let array1 = []
            array1 = request.response.centreInteret;
            
            var interetCard = `
                <h1 class="text-center fromTop">Centres d'intérêt</h1>
                <div class="row d-flex justify-content-center align-items-center m-auto fromBottom " >
                `;

            for (let i=0; i<array1.length; i++){
                interetCard +=`
                    <div class="col-12 col-lg-4 text-center m-4 center myCard" >
                        <img src=${array1[i].img} alt="picture" class="image">
                        <div class="overlay text-center">
                            <h6>${array1[i].hobby}</h6>
                        </div>    
                    </div>
                `;
            };
            interetCard +=`</div>
            `
                ;
            
        
            content.innerHTML = interetCard; 
        };
    });

    request.send();
};

InteretBtn.addEventListener('click', showInterest); 
