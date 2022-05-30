class Line {
    constructor(start, end, dashed) {
        this.start = start;
        this.end = end;
        this.dashed = dashed;
        this.line = null;
    }
    show(switching) {
        if (switching) {
            this.line = new LeaderLine(document.getElementById(this.start),
                                       document.getElementById(this.end),
                                       {dash:this.dashed, 
                                        color: (this.dashed ? 'blue':'orange')});
        }
        else {
            this.line = new LeaderLine(document.getElementById(this.start), 
            document.getElementById(this.end),
            {hide:true, 
             dash:this.dashed, 
             color: (this.dashed ? 'blue':'orange')});
            this.line.show();
        }
    }
    hide(switching) {
        if (switching) {
            this.line.remove();
        }
        else {
            this.line.hide();
            var that = this;
            setTimeout(function() {
                that.line.remove();
            }, 200);
        }
    }
    position() {
        if (this.line != null) {
            this.line.position();
        }
    }
}