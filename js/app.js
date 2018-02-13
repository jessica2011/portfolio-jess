let begin = () => {
  // Escritura de letras tipo maquina
  let writing = str => {
    const name = document.getElementById('name');
    let arrFromStr = str.split('');
    let i = 0;
    let printStr = setInterval(function() {
      if (arrFromStr[i] === ' ') {
        name.innerHTML += arrFromStr[i];
        name.innerHTML += arrFromStr[i + 1];
        i += 2;
      } else {
        name.innerHTML += arrFromStr[i];
        i++;
      }
      if (i === arrFromStr.length) {
        clearInterval(printStr);
        name.style.color = 'white';
        name.style.fontWeight = '520';
      }
    }, 300);
  };
  // Hover de btn seccion de presentación
  let changeArrow = () => {
    const btnArrow = document.getElementById('button-arrow');
    btnArrow.addEventListener('mouseover', function() {
      btnArrow.innerHTML = 'Ver mi Trabajo <i class="material-icons align-middle">arrow_downward</i>';
    });
    btnArrow.addEventListener('mouseout', function() {
      btnArrow.innerHTML = 'Ver mi Trabajo <i class="material-icons align-middle">arrow_forward</i>';
    });
  };
  // Efecto auto scroll- plugin
  let smoothAutoScroll = () => {
    let scroll = new SmoothScroll('a[href*="#"]', {
      ignore: '[data-scroll-ignore]',  
      header: null, 
      speed: 500,
      offset: 0, 
      easing: 'easeInOutCubic', 
      customEasing: function(time) {
        return time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time;
      },
    
      before: function(anchor, toggle) {},
      after: function(anchor, toggle) {}
    });
  };

  writing('Jessica Meza Rojas');
  changeArrow();
  smoothAutoScroll();
};

window.addEventListener('load', begin);


