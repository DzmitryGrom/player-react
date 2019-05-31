class Player {
    
    constructor() {
        let stream = document.getElementById('audio');
        this.curPosition = null;
        this.allTracks = null;

        if (this.stream) {
            this.stream = stream;
        } else {
            stream = document.createElement('audio');
            stream.setAttribute('id', 'audio');
            document.body.appendChild(stream);
            this.stream = stream
        }
    }

    onTime(setDates){
        this.stream.addEventListener('timeupdate', (e) => {
            let time = new Date(this.stream.currentTime * 1000),
                curTime = time.getUTCHours() ? time.toUTCString().slice(17, 25) : time.toUTCString().slice(20, 25),
                curWidth = (this.stream.currentTime * 100 / this.stream.duration).toFixed(1) + "%";
            setDates(curTime, curWidth);
            
        })
        
    }

    endedTrack(setNextTrack) {
        this.stream.addEventListener('ended', () => setNextTrack());
    }

    trackRewind(timeline, e) {
        console.log(e);
        this.stream.currentTime = ((e.pageX - timeline.offsetLeft) / timeline.offsetWidth) *  this.stream.duration;
    }
    
    select(id) {
        this.stream.src = `https://api.soundcloud.com/tracks/${id}/stream?client_id=7172aa9d8184ed052cf6148b4d6b8ae6`
        this.play();
    }

    play() {
        this.stream.play();
    } 

    pause() {
        this.stream.pause();
    } 

    togglePLay() {
        if (!this.stream.paused) {
            this.pause();
        } else {
            this.play();
        }
    }

    getPositonSelectTrack = (track, tracks) => {
       
        this.allTracks = tracks.items.length;
        for (let i = 0; i < tracks.items.length; i++) {
            if (tracks.items[i].id === track.id) {
                this.curPosition = i;               
            }
        }
       
    }

    prevPlayTrack = () => {
        if(this.curPosition >= 1) {
            return this.curPosition--;
        }
        return this.curPosition;
    }

    nextPlayTrack = () => {
      
        if (this.curPosition < this.allTracks) {
            return this.curPosition++;
        }
        return this.curPosition;
    }

}

export default new Player();