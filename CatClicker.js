(function(){
    var model = {
        currentCat: null,
        init : function(){
           return catInfo = [
                {
                    id:0,
                    name : 'Meow', 
                    pictureName:'img/cat.jpg',
                    clickCount:0
                },
                {
                    id:1,
                    name : 'Kitty',
                    pictureName:'img/cat2.jpg',
                    clickCount:0
                },
                {
                    id:2,
                    name : 'major',
                    pictureName:'img/cat3.jpg',
                    clickCount:0
                },
                {   
                    id:3,
                    name : 'cutie',
                    pictureName:'img/cat4.jpeg',
                    clickCount:0
                },
                {
                    id:4,
                    name : 'Bangal',
                    pictureName:'img/cat5.jpg',
                    clickCount:0
                }
            ]
        } 
    };
    var controller = {
        init: function(){
            model.currentCat = model.init()[0];
            listView.init();
            view.init();
           
        },
        getList: function(){
            return model.init();
        },
        setCurrentCat:function(cat){
            model.currentCat = cat;
        },
        getCurrentCat:function(){
            return model.currentCat;
        },
        clickCountIncrement: function(){
            model.currentCat.clickCount++;
            view.render();
        }
    };
    var listView = {
        init: function(){
           this.catListElem =  document.getElementById('catClickerList');
           this.render();
        },
        render:  function(){
            var elem;
            this.catListElem.innerHTML ='';
            $this = this;
            controller.getList().forEach(function(cat, index){
                elem = document.createElement('li');
                elem.textContent = cat.name;
                elem.addEventListener('click',function(){
                    
                    controller.setCurrentCat(cat);
                    view.render();
                   },cat);
                
                $this.catListElem.appendChild(elem);
            });
            
        }
    };
    var view = {
        init: function(){
            this.catElem = document.getElementById('cat');
            this.catNameElem = document.getElementById('cat-name');
            this.catImageElem = document.getElementById('cat-img');
            this.countElem = document.getElementById('cat-count');

            // on click, increment the current cat's counter
            this.catImageElem.addEventListener('click', function(){
                 controller.clickCountIncrement();
            });
            this.render();
        },
        render: function(){
            var currentCat = controller.getCurrentCat();
            this.countElem.textContent = currentCat.clickCount;
            this.catNameElem.textContent = currentCat.name;
            this.catImageElem.src = currentCat.pictureName;
         }
    };

    controller.init();
})();




// function numberOfClick(catImageDiv){
//     var numberOfClick = 0;
//    catImageDiv.addEventListener('click',function(){
//         numberOfClick++;    
//         console.log(numberOfClick);
//         var span = catImageDiv.getElementsByTagName('span');
//        span[0].innerHTML  = numberOfClick;
//     });
// }
// // by default hide all cat;
// document.getElementById('catClicker').style="display:none;";

// // display particular cat on click in list.

// var catClickerListDiv = document.getElementById('catClickerListDiv');
// var catClickerList = catClickerListDiv.getElementsByTagName('li');
// catClickerListLength = catClickerList.length;
// for(var i=0; i < catClickerListLength;i++){
    
//     catClickerList[i].addEventListener('click',function(){
//         var idNameToActive =  this.getAttribute('data-catname');
//         var contentOfCatSection = document.getElementById(idNameToActive);
//         console.log(contentOfCatSection);
//         var catClickerContainer = document.getElementById('catClickerContainer');
//         catClickerContainer.innerHTML = contentOfCatSection.innerHTML;
//        numberOfClick(catClickerContainer);
//     });
// }