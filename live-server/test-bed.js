const { log } = console;

function setup() {
  let spans = document.querySelectorAll('#rating span');
  for(let i = 0; i < spans.length; ++i){
    spans[i].addEventListener('click', (event) => {
      // log(event.target)
      // log(spans.indexOf(event.target))
      for(let j = 0 ; j < spans.length; ++ j) {
        // j 0, 1,2
        if (j <= i ) {
          spans[j].className = 'active';
        } else {
          spans[j].className = '';
        }
      }
    })

  }
}


// Example case. 
{/* <div id='rating'>
<span>*</span>
<span>*</span>
<span>*</span>
<span>*</span>
<span>*</span>
</div> */}

setup();

document.getElementsByTagName("span")[2].click();
console.log(document.body.innerHTML);