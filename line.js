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
                                       {dash:this.dashed});
        }
        else {
            this.line = new LeaderLine(document.getElementById(this.start), 
            document.getElementById(this.end),
            {hide:true, dash:this.dashed});
            this.line.show();
        }
    }
    hide(switching) {
        console.log(this.line);
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
}