console.log('hello from source.js')

let images = ['p1.jpeg','p2.jpeg','p3.jpeg','p4.jpeg','p5.jpeg','p6.jpeg','p7.jpeg','p8.jpeg',
'p9.jpeg','p10.jpeg','p11.jpeg','p12.jpeg','p13.jpeg','p14.jpeg','p15.jpeg']

let j = 2
let k =0
let scroolRighr = document.querySelector('#scrolRight')
let scroolLeft = document.querySelector('#scrolLeft')

let rigthtM = document.querySelector('#scrolRightM')
let ledtM = document.querySelector('#scrolLeftM')
scroolRighr.addEventListener('click',scroolRight)
scroolLeft.addEventListener('click', scroolLefft)

rigthtM.addEventListener('click',scroolRight)
ledtM.addEventListener('click', scroolLefft)

function scroolRight(){
 

    let image = document.querySelectorAll('.image')
    if(this === rigthtM ){
      if(k < (images.length -1) && k >=0 ){
        image = document.querySelectorAll('.imageM')
        k = k+1 
        document.querySelector('.imageM').src =  "/images/img/"+images[k]
        console.log(images[k])
        console.log('rifhhht',k)
      }
    }
    
    else if(this == scroolRighr){
      console.log('scrolright', j)
        if(j < 2){
          j =2
        }
        for(let i= 0; i < image.length; i++){
          if(images.length >j ){
              console.log(images.length)
              document.querySelectorAll('.image')[i].src = "/images/img/"+images[j++]
              console.log('scrolrighttt', j)
          }
        }

      
      }
    
  
  }



function scroolLefft(){


  let image = document.querySelectorAll('.image')
  if(this === ledtM ){
    if(k >0 && k< images.length){
      image = document.querySelectorAll('.imageM')
      k = k-1
      document.querySelector('.imageM').src =  "/images/img/"+images[k]
      console.log(images[k])
      console.log('leftt',k)
    }
  }
  else if(this === scroolLeft ){
  
    if(j>2){
      console.log('scroolleft afffter i', j) 
      if(j >=2){
        j = j-2

      }
        for(let i=0; i<image.length; i++){
  
          if(images.length > j ){
              
              
       
       
              document.querySelectorAll('.image')[i].src = "/images/img/"+images[j--]
          }
        }
    }

  }

}

