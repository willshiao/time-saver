<template>
  <div id="app" class="container">
    <h1 class="text-xs-center">TimeSaver</h1>
    
    <div>
    
    </div>
    <form id="time-form">
      <div class="form-group">
        <div class="form-group">
           <label for="freqSelect">Activity Frequency:</label>
           <select class="form-control" id="freqSelect" v-model="freqSelect">
             <option value="1">One or more times</option>
             <option value="2">At a regular interval</option>
           </select>
         </div>
      </div>

      <div class="form-group" v-show="showTimesInput">
        <label for="numTimes">Number of times</label>
        <input type="number" class="form-control" id="numTimes" placeholder="" min="0" v-model="numTimes">
      </div>

      <div class="form-group">
        <label for="actDuration">Activity Duration</label>
        <input type="text" class="form-control" id="actDuration" v-model="actDurationStr" placeholder="1 hour" aria-describedby="actDurationSeconds">
        <small id="actDurationSeconds" class="form-text text-muted">{{actDuration/1000}} seconds</small>
      </div>

      <div class="form-group">
        <label for="timeSaved">Time to Automate</label>
        <input type="text" class="form-control" id="autoCost" v-model="autoCostStr" placeholder="1 hour" aria-describedby="autoCostSeconds">
        <small id="autoCostSeconds" class="form-text text-muted">{{autoCost/1000}} seconds</small>
      </div>
      
      <hr>

      <strong v-show="timeSaved >= 0">Time Saved: </strong>
      <strong v-show="timeSaved < 0">Time Lost: </strong>
      <em>{{timeSavedStr}}</em>

    </form>
  </div>
</template>

<script>

import * as parseTime from 'parse-duration';
import * as humanizeTime from 'humanize-duration';


export default {

  data () {
    return {
      freqSelect: 1,
      actDurationStr: "1 hour",
      numTimes: 1,
      autoCostStr: "1 hour"
    }
  },
  computed: {
    actDuration: function() {
      return parseTime(this.actDurationStr.toString());
    },
    totalDuration: function() {
      return this.actDuration * this.numTimes;
    },
    showTimesInput: function() {
      return this.freqSelect == 1;
    },
    autoCost: function() {
      return parseTime(this.autoCostStr.toString());
    },
    timeSaved: function() {
      return this.totalDuration - this.autoCost;
    },
    timeSavedStr: function() {
      return humanizeTime(this.timeSaved);
    } 
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
