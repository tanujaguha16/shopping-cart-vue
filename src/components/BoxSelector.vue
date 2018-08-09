<template>
   <b-container class="bv-example-row">
   {{changed_text}} <br/> <br/>
      <b-row>
        <b-col>
            <label for="white_box">
               <div class="outer_box">
                  <div class="meddle_box">
                    White Box
                  </div>
                </div>
            </label>
            <input type="radio" class="radio"  id="white_box" value="white_box" v-model = "box" v-on:change="updateDate('White Box')">
        </b-col>
        <b-col>
           <label for="black_box">
              <div class="outer_box">
                <div class="meddle_box">
                  Black Box
                </div>
              </div>
            </label>
            <input type="radio" class="radio"  id="black_box" value="black_box" v-model = "box" v-on:change="updateDate('Black Box')">
        </b-col>
    </b-row>
</b-container>
</template>
<script>
export default {
  name: 'BoxSelector',
  data () {
    return {
      msg: 'Select a box',
      subtext: 'You are the first to select a box',
      box: 'white_box',
      changed_text: 'By default white box selected'
    }
  },
  methods: {
    updateDate (datas) {
      this.changed_text = 'You selected ' + datas
      this.$router.push('item-selector')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.radio{
  display: none;
}
.outer_box{
  width: 400px;
  height: 400px;
  background-color: grey;
  padding-top: 100px;
}
.meddle_box{
  width: 200px;
  height: 200px;
  background-color: white;
  margin-left: 100px;
}
</style>
