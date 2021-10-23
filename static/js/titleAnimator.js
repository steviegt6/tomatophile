class TypingObject {
    constructor(text, interval, onUpdate) {
        this.index = 0;
        this.text = text;
        this.displayText = "";
        this.interval = interval;
        this.onUpdate = onUpdate;
    }

    start() {
        setInterval(() => {
            this.update();
        }, this.interval);
    }

    update() {
        this.displayText = "";
        this.index++;

        for (var i = 0; i < this.text.length; i++)
            if (i < this.index / 2)
                this.displayText += this.text[i];
        
        if (this.index % 2 == 0)
            this.displayText += "|";
        
        this.onUpdate(this);
    }
}

let obj = new TypingObject("Welcome :D", 500, function(self) {
    document.title = self.displayText;
});

obj.start();