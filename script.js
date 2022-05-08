
var slider;

var buttons=document.getElementsByClassName('btn');
var slidesPerPage=3;
var container=document.getElementById('container1');
var slides=container.querySelectorAll(".temat").length;
var tematSize=container.querySelector(".temat").offsetWidth+20;
var countSliders=document.getElementsByClassName("sliders").length;


   
    
window.onload = function test() {
    gf();
    for(var i=1;i<=countSliders;i++)
    {
        container=document.getElementById('container'+i);
        slides=container.querySelectorAll(".temat").length;
        if(slides<slidesPerPage)
        {
            buttons[i*2-2].style.visibility="hidden";
            buttons[i*2-1].style.visibility="hidden";
        } 
    }
  };
    
   

for(let i=1;i<=countSliders;i++)
{
    eval('var '+'margin'+i+'=0;');
    eval('var '+'position'+i+'=0;');
   
}
function gf() {
    
        if(window.innerWidth>=1850)
        {
            slidesPerPage = 4;
            console.log(slidesPerPage);
        }
        else if(window.innerWidth>=1745)
        {
            slidesPerPage = 3;
            console.log(slidesPerPage);
        }
        else if(window.innerWidth>=1400)
        {
            slidesPerPage = 3;
            console.log(slidesPerPage);
        }
        else if(window.innerWidth>=1065)
        {
            slidesPerPage = 3;
            console.log(slidesPerPage);
        }
        else if(window.innerWidth>=725)
        {
            slidesPerPage = 3;
            console.log(slidesPerPage);
        }
        else if(window.innerWidth>=370)
        {
            slidesPerPage = 2;
            console.log(slidesPerPage);

        }
        else if(window.innerWidth<=370)
        {
            slidesPerPage = 1;
            console.log(slidesPerPage);

        }
    

}
//window.onresize = reportWindowSize;
window.addEventListener('resize', gf);



function slideRight(name) {
    
    container=document.getElementById('container'+name)
    slides=container.querySelectorAll(".temat").length; 
    slider = container.querySelector('#slider');
    buttons = container.querySelectorAll('.btn');

    
    if(eval('position'+name)!=0 )
    {
        slider.style.marginLeft = eval('margin'+name)+ tematSize+"px";
        eval('margin'+name+'+='+tematSize);
        eval('position'+name+'--');
    } 
    if (eval('position'+name) === 0) {
        buttons[0].classList.add('inactive');
    }
    if (eval('position'+name) < slides-slidesPerPage) {
        buttons[1].classList.remove('inactive');
    }
};

function slideLeft(name) {
    
    container=document.getElementById('container'+name)
    slides=container.querySelectorAll(".temat").length; 
    slider = container.querySelector('#slider');
    buttons = container.querySelectorAll('.btn');

    
    if(eval('position'+name)!=slides-1)
    {
        slider.style.marginLeft =eval('margin'+name)-tematSize+"px";
        eval('margin'+name+'-='+tematSize);
        eval('position'+name+'++');
    }
    if(eval('position'+name) == slides-1){
        buttons[1].classList.add('inactive');
    }
    if(eval('position'+name) <slides-1){
        buttons[0].classList.remove('inactive');
    }
};

