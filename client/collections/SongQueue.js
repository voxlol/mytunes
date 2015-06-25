// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    var that = this;
    this.on('add', function(){
      // On add, if its the first, play that
      if(that.length === 1)
        that.playFirst();
    });
  },

  // Does this work?
  playFirst: function(){
    this.at(0).play();
  }

});