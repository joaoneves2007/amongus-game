startReactor = {
    computerCombination:[],
    playerCombination:[],
    computerCombinationPosition:[],
    combinationMaxposition:[],
    memoryMaxCombination:[],

    audio: {
        start: 'start.mp3',
        fail: 'fail.mp3',
        complete: 'complete.mp3',
        combinations:['0.mp3', '1.mp3', '2.mp3', '3.mp3', '4.mp3', '5.mp3', '6.mp3', '7.mp3', '8.mp3'],

        loadAudio(filename){
            const file = ./audio/${filename}?cb=${new Date().getTime()};
            const audio = new Audio(file);
            audio.load()
            return audio


        },

        loadAudios(){
            
            if (typeof(startReactor.audio.start)== "object") return

            startReactor.audio.start = startReactor.audio.loadAudio(startReactor.audio.start)
            startReactor.audio.complete = startReactor.audio.loadaudio(startReactor.audio.complete)
            startReactor.audio.fail = startReactor.audio.loadAudio(startReactor.audio.fail)
            startReactor.audio.combinations = startReactor.audio.combinations.map ((audio) => startReactor.audio.loadReactor.audio.loadAudio(audio))
        }
    },
    interface: {
        memoryPanel: document.querySelector(".painelMemory"),
        computerLedPanel: document.querySelector(".computerLedPanel"),
        playerLedPanel: document.querySelector(".playerLedPanel"),
        playerMemory: document.querySelector(".playerMemory"),
        playerMemoryButtons: document.getElementsByClassName("player_memory"),

        turnLedOn(index, ledPanel){
            ledPanel.children[index].classList.add("ledOn");
        },

        turnAllLedsOff(){
             const computerLedPanel = startReactor.interface.computerLedPanelconst 
             const playerLedPanel = startReactor.interface.playerLedPanel

             for (var i = 0; i < computerLedPanel.children.length; i++){
                computerLedPanel.children[i].classList.remove("ledOn");
                playerLedPanel.children[i].classList.remove("ledOn");
             }

        },

        async start(){
            return startReactor.audio.start.play()
        }
    }
}