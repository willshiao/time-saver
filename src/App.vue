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

      <div class="form-group" v-show="freqSelect == 1">
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
    </form>
    <form class="form-inline" v-show="freqSelect == 2">
      <label>Activity Interval</label><br>
      Every
      <input type="text" class="form-control" v-model="freqStr">
      for
      <input type="text" class="form-control" v-model="durationStr">
      <small class="form-text text-muted">~{{actTimes}} times</small>
    </form>
    <hr>

    <strong v-show="timeSaved >= 0">Time Saved: </strong>
    <strong v-show="timeSaved < 0">Time Lost: </strong>
    <em>{{timeSavedStr}}</em>
  </div>
</template>

<script>

import * as parseTime from 'parse-duration';
import * as humanizeTime from 'humanize-duration';


export default {

  data () {
    return {
      freqSelect: 1,
      actDurationStr: "5 hours",
      numTimes: 1,
      autoCostStr: "1 hour",
      freqStr: "1 day",
      durationStr: "1 month"
    }
  },
  computed: {
    actDuration: function() {
      return parseTime(this.actDurationStr.toString());
    },
    totalDuration: function() {
      if(this.freqSelect == 1) {
        return this.actDuration * this.numTimes;
      }
      return this.actTimes * this.actDuration;
    },
    autoCost: function() {
      return parseTime(this.autoCostStr.toString());
    },
    timeSaved: function() {
      return this.totalDuration - this.autoCost;
    },
    timeSavedStr: function() {
      return humanizeTime(this.timeSaved);
    },
    freqNum: function() {
      return parseTime(this.freqStr);
    },
    durationNum: function() {
      return parseTime(this.durationStr);
    },
    actTimes: function() {
      return (this.durationNum/this.freqNum);
    }
  }
}
</script>

<style>
label {
  font-weight: bold;
}
</style>
