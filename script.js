const images=["https://media.istockphoto.com/id/637696304/photo/patan.jpg?s=612x612&w=0&k=20&c=-53aSTGBGoOOqX5aoC3Hs1jhZ527v3Id_xOawHHVPpg=",
             "https://images.unsplash.com/photo-1541996206728-9e1c3466a148?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGluc3BpcmV8ZW58MHx8MHx8&w=1000&q=80",
             "https://burst.shopifycdn.com/photos/person-holds-a-book-over-a-stack-and-turns-the-page.jpg?width=1200&format=pjpg&exif=0&iptc=0"]
const prev = document.getElementById("left");
const next= document.getElementById("right");

const totalImage= images.length;

const slider = document.getElementById("slide");
let i=0;
slider.src=images[i];
next.addEventListener("click",nextImg);
prev.addEventListener("click",prevImg);


function nextImg()
{
  i++;
  if(i>=totalImage)
    {
      i=0;
    }
  
  slider.src=images[i];
  
}

function prevImg()
{
  i--;
  if(i<0)
    {
      i=totalImage-1;
    }
  
  slider.src=images[i];
  
}

