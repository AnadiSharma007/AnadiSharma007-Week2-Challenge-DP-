newsAccordion = document.getElementById('newsAccordion');
newsContent = document.querySelectorAll('.accordion-body');
newsHeading = document.querySelectorAll('.accordion-button');
let imgIcon = document.getElementById("imginaccord");
const api = `https://newsapi.org/v2/top-headlines?country=in&apiKey=aaa5818138b74428824f989243b39632`;


fetch(api)
    .then(response => response.json())
    .then(data => {
        console.log(data);

    for(var k=0; k<5; k++){
        
            for(var j=0; j< newsContent.length; j++){
         
                    newsContent[j].textContent = data.articles[k].content;
                    k++;
                    }
                   
            }

            for(var k=0; k<5; k++){

            for (var i = 0; i < newsHeading.length; i++) {
                newsHeading[i].textContent = data.articles[k].title;
                k++;
        }
    }
           });
        


    

    