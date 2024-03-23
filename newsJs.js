
localStorage.scrollY = window.scrollY;

//საწყისი სამი ნიუსი
window.addEventListener('scroll', () =>{

    let newsWindow = document.querySelector('.news');
    let windowHeght = window.innerHeight;
    let revealTop = newsWindow.getBoundingClientRect().top;
    let revealPoint = 80;
    
    if(revealTop < windowHeght - revealPoint){
        document.getElementById('news1').style.marginTop = "0";
        document.getElementById('news1').style.opacity = "1";
    
        document.getElementById('news2').style.marginTop = "0";
        document.getElementById('news2').style.opacity = "1";
    
        document.getElementById('news3').style.marginTop = "0";
        document.getElementById('news3').style.opacity = "1";
    
        window.addEventListener('load',(e) =>{
            
            
            document.getElementById('news1').scrollIntoView();
            document.getElementById('news1').classList.remove('news_1')
            document.getElementById('news1').classList.add('newsimportant')
    
            
            document.getElementById('news2').classList.remove('news_2')
            document.getElementById('news2').classList.add('newsimportant')
    
            document.getElementById('news3').classList.remove('news_3')
            document.getElementById('news3').classList.add('newsimportant')
    
            
            
            
        })
    }
    
    })
    
    // see more ღილაკი
    window.addEventListener('scroll', () =>{
        let newsWindow = document.querySelector('.news');
        let windowHeght = window.innerHeight;
        let revealTop = newsWindow.getBoundingClientRect().top;
        let seeMoreRevealPoint = 250;
        let seeMore = document.getElementById('see_more');
    
    if(revealTop < windowHeght - seeMoreRevealPoint){
        
        seeMore.style.opacity = "1";
    
        
    }
    })
    
    
    // კონტენტის გამოჩენა
    
    let hiddenContent = document.getElementById('second_news');
    let seeMore = document.getElementById('see_more');
    
    seeMore.addEventListener('click', () => {
        hiddenContent.style.height = "fit-content";
        hiddenContent.style.opacity = "1";
        seeMore.style.display = "none";

        window.addEventListener('load', (e)=>{
            e.preventDefault();
            hiddenContent.style.height = "fit-content";
            hiddenContent.style.opacity = "1";
            seeMore.style.display = "none";
        })
            
        }
    )
    
    
    
        
    
    