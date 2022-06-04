let latestStoriesEle = document.getElementById('latestStories');


function createAndAppend(latestStory) {
    let {
        title,
        link,
        date
    } = latestStory;

    let container = document.createElement("div");

    let titleEle = document.createElement("a");
   
    titleEle.href = link;
    titleEle.classList.add("active");
    titleEle.classList.add("latest-stories-text");
    titleEle.target = '-blank';
    titleEle.textContent = title;
    container.appendChild(titleEle);
    
    let dateEle = document.createElement("p");
    dateEle.textContent = date;
    console.log(date);
    dateEle.classList.add("dateEle");
    container.appendChild(dateEle);

    
    
    latestStoriesEle.appendChild(container);

    let titleBreakEle = document.createElement("br");
    latestStoriesEle.appendChild(titleBreakEle);

}    

let latestStories = [
    {
    "title": "Amy Schneider’s Jeopardy! Streak Ends at 40 Consecutive Wins and $1.4 Million",
     "link" : "https://time.com/6142934/amy-schneider-jeopardy-streak-ends/",
      "date" : "JANUARY 26, 2022 * 11:43 PM EST"
    },
    {
    "title": "'Writing With Fire' Shines a Light on All-Women News Outlet",
    "link": "https://time.com/6142628/writing-with-fire-india-documentary/",
    "date" : "JANUARY 26, 2022 * 9:00 PM EST"
    },
    {
    "title": "Moderna Booster May Wane After 6 Months",
    "link": "https://time.com/6142852/moderna-booster-wanes-omicron/",
    "date" : "JANUARY 26, 2022 * 5:51 PM EST"
    },
    {
    "title": "Pressure Mounts for Biden to Nominate a Black Woman to the Supreme",
    "link":
    "https://time.com/6142743/joe-biden-supreme-court-nominee-black-woman-campaignpromise/",
    "date" : "JANUARY 26, 2022 * 3:51 PM EST"
    },
    {
    "title": "The James Webb Space Telescope Is in Position—And Now We Wait",
    "link": "https://time.com/6142769/james-webb-space-telescope-reaches-l2/",
    "date" : "JANUARY 26, 2022 * 3:46 PM EST"
    },
    {
    "title": "We Urgently Need a New National COVID-19 Response Plan",
    "link": "https://time.com/6142718/we-need-new-national-covid-19-response-plan/",
    "date" : "JANUARY 26, 2022 * 3:13 PM EST"
    }
    ]  


    function displayResults(latestStories) {
        
        for (let latestStory of latestStories) {
            createAndAppend(latestStory);
        }
    }
    
    displayResults(latestStories);




    
