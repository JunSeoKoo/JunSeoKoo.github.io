// menu


// Element

var $btnMenu = document.getElementById('btn-menu');
var $sidMenu = document.getElementById('side-menu');
var $sidMenuList = $sidMenu.querySelectorAll('li')
var $btnClose = document.getElementById('btn-close');

console.log($sidMenuList);

// todo
// 1- 메뉴가 열려 있는지 상태 체크 0
// 2 - 애니메이션 중인 상태에서 버튼 클릭이 안되도록 방지 0
// op 1 x 버튼에 애니메이션
// op 2 a태그에 순차적인 애니메이션

var _isOpen = false;
var _isAni = false;
function onclickBtnMenu(event){
    event.preventDefault();
    if(_isAni) return;
    if(!_isOpen){
        _isOpen = true;
        _isAni = true;
        $sidMenu.classList.add('open');
        setTimeout(function(){
            ////
            for(var i =0; i< $sidMenuList.length; i++){
               menuAni(i);
        }
            ////
            _isAni = false;
            
        },400)
    }
    
}
function menuAni(id){
    setTimeout(function(){
        console.log(id);
     $sidMenuList[id].classList.add('ani');
    },100 *id);
    // 100을 숫자를 낮추면 빨라짐
}



function onclickClose(event){
    event.preventDefault();
    if(_isAni) return;
    if(_isOpen){
        _isOpen = false;
        _isAni = true;
        $sidMenu.classList.remove('open');
        setTimeout(function(){
            ////메뉴가 닫힘
            for(var i = 0; i< $sidMenuList.length; i++){
                $sidMenuList[i].classList.remove('ani');
            }
            ////
            _isAni = false;
        },400)
    }
}
$btnMenu.addEventListener('click', onclickBtnMenu);
$btnClose.addEventListener('click', onclickClose);








// function onclickBtnMenu(event){
//     event.preventDefault();
//     console.log('btn menu click');
//     //클릭했을때 
//     $sidMenu.classList.add('open');
// }
// $btnMenu.addEventListener('click', onclickBtnMenu)
// 열리게


// function onclickClose(event){
//     event.preventDefault();
//     $sidMenu.classList.remove('open');
// }
// $btnClose.addEventListener('click', onclickClose);
// 닫히게



//end menu


// page1

// var bDisplay = true;
// function doDisplay(){
//     var con = document.getElementById("logo");
//     if(con.style.display=='flex'){
//         con.style.display = 'none';
//     }else{
//         con.style.display = 'flex';
//     }
// }




// slide

$(document).ready(function(){
    $('.backgroundTransition').backgroundTransition({
        backgrounds:[
            { src: './img/DSC07914.jpg' },
            { src: './img/person-731165_1920.png' },
            { src: './img/zcxc.jpg' },
            { src: './img/train-569323_1920.jpg' },
            { src: './img/backpack-1149462_1920.jpg' },
            { src: './img/train-3396952_1920.jpg' },
            { src: './img/train-690200_1920.jpg' },
            { src: './img/sads.jpg' }
        ],
        transitionDelay: 3,
        animationSpeed: 800
    });
});

// end slide


var bDisplay = true;
    function doDisplay(){
        var con = document.getElementById("page5con");
            if(con.style.display=='flex'){
                con.style.display = 'none';
            }else{
                con.style.display = 'flex';
            }
        var con1 = document.getElementById("page4con");
            if(con1.style.left=='0%'){
                con1.style.left = '25%';
            }else{
                con1.style.left = '0%';
            }    
    }




// fadein out

new WOW().init();

// end fadein out


// couter-up
function numberCounter(target_frame, target_number) {
    this.count = 0; this.diff = 0;
    this.target_count = parseInt(target_number);
    this.target_frame = document.getElementById(target_frame);
    this.timer = null;
    this.counter();
};
    numberCounter.prototype.counter = function() {
        var self = this;
        this.diff = this.target_count - this.count;
    
        if(this.diff > 0) {
            self.count += Math.ceil(this.diff / 800);
            
        }
    
        this.target_frame.innerHTML = this.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    
        if(this.count < this.target_count) {
            this.timer = setTimeout(function() { self.counter(); }, 20);
        } else {
            clearTimeout(this.timer);
        }
    };

new numberCounter("counter3", 629);
new numberCounter("counter2", 2634);
new numberCounter("counter1", 54700);





// 컨텐츠 이동


       function j_test(n){
         $('html, body').stop().animate({
             scrollTop : $('div.about').eq(n).offset().top
         });
     }


    
    //  유튜브
    
var tag = document.createElement('script');
    
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player1', {
    height: '360',
    width: '640',
    videoId: 'luLZtYPd3bk',
    playerVars:{
        autoplay : 0, // 자동재생
        controls : 1, // 컨트롤러 바
        rel : 0, // 관련정보
        fs : 0,
        modestbranding : 0,
        showinfo : 0 // 인포메이션
    }
  });
}
function onPlayerReady(event) {
  event.target.playVideo();
}

var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}
