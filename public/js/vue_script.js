const vm = new Vue({
  el: '#myID',
  data: {
    arbitraryVariableName: 'Välj en burgare'
  }
})

const burg = new Vue({
  el: '#burg',
  data: {
      b1: b1.getName()
      b2: b2.getName()
      b3: b3.getName()
      b4: b4.getName()
      b5: b5.getName()
  }
})

const vm3 = new Vue({
    el: '#burgers',
    data: {
        menu: menu
    },
});

/*
Loop the burgers in HTML
<div id = 'burgers'>
  <li v-for="(x, index) in menu">
     {{ x.name }} {{ x.kcal }} {{ x.desc1 }}<span v-if="x.deadAnimals"> {{ x.desc2 }}</span>
  </li>
</div>
*/
