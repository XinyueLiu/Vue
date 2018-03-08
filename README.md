# This repository contains my vue projects.

Amber Liu

## Learning Note

### Why Vue?

1. Extremely lean & small

   * 16Kb minified and gzipped

2. Great Runtime Performance
   Vue < Angular < React (Run time)

### Link using Vue directive

#### Known options for Vue Instance

1. el: Connect to DOM
2. data: Store Data to be used
3. methods: Methods of this Vue Instance
4. computed: Dependent Properties
5. watch: Execute code upon data changes

* <!-- <a href={{ link }}>Google</a> --> doesn't work

* <a  v-bind:href="link">Google</a>

* v-once render only once

* v-html

* "<button v-on:click="increase(2[, $event])">Click me</button>"

* <p v-on:mousemove="updateCoordinates">Coordinates: {{ x }}/{{ y }}</p>

* [event.stopPropagation();]  
  <span v-on:mousemove.stop="">DEAD SPOT</span>

* <input type="text" v-on:keyup.enter.space="alertMe">

* <input type="text" v-on:keydown.enter="value=$event.target.value">

* <input type="text" v-model="name"> 
two way binding   html <=> Vue obj

* whenever DOM gets updated, all regular method will be called again, even some of them doesn't involve the actually change elements after updated. To avoid this, use computed option to store those elements.

#### Using Conditionals and Rendering Lists

* v-if attach/detach an element (including all nested elements) from the DOM (NOT visible or invisible)

* v-show Hide an element by using display:none;

* <li v-for="ingredient in ingredients">{{ ingredient }}</li>
