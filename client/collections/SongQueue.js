// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    var that = this;
    this.on('add', function(){
      // On add, if its the first, play that
      if(that.length === 1)
        that.playFirst();
    });

    this.on('ended', function(song){
      this.remove(this.at(0));

      if(this.length === 0) return;
      this.playFirst();
    });
  },

  // Does this work?
  playFirst: function(){
    this.at(0).play();
  }

});