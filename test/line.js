class Line {
    constructor(start, end, dashed) {
        this.start = start;
        this.end = end;
        this.dashed = dashed;
        this.line = null;
    }
    show(switching) {
        if (switching) {
            // console.log("here");
            this.line = new LeaderLine(document.getElementById(this.start),
                                       document.getElementById(this.end),
                                       {dash:this.dashed});
        }
        else {
            // console.log("here");
            this.line = new LeaderLine(document.getElementById(this.start), 
            document.getElementById(this.end),
            {hide:true, dash:this.dashed});
            console.log(this.line);
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
            console.log("removed");
        }
    }
}