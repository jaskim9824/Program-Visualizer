/**
 * Line object used to represent line objects generated in the program visualizer
 *  diagram. Wraps a LeaderLine instance.
 * Fields:
 *  - start: string form of element ID that is start of line
 *  - end: string form of element ID that is end of line
 *  - coreq: booleam that indicates whether line is a prereq or coreq
 *  - line: LeaderLine instance that represents the line in question. This is null
 *          when the plan loaded is not the plan the line is in
 */
class Line {
    constructor(start, end, coreq) {
        this.start = start;
        this.end = end;
        this.coreq = coreq;
        this.line = null;
    }
    /**
     * Show the line
     * @param switching boolean that indicates whether this show call
     * is because of switching plans or clicking 
     */
    show(switching) {
        // switching plans case, create a new LeaderLine
        if (switching) {
            this.line = new LeaderLine(document.getElementById(this.start),
                                       document.getElementById(this.end),
                                       {dash:this.coreq, 
                                        color: (this.coreq ? 'blue':'orange')});
        }
        // spawning case due to click, create a new LeaderLine as hidden and call show 
        else {
            this.line = new LeaderLine(document.getElementById(this.start), 
            document.getElementById(this.end),
            {hide:true, 
             dash:this.coreq,
             color: (this.coreq ? 'blue':'orange')});
            this.line.show();
        }
    }
      /**
     * Hide the line
     * @param switching boolean that indicates whether this hide call
     * is because of switching plans or clicking 
     */
    hide(switching) {
        // switching plans case, destroy LeaderLine
        if (switching) {
            this.line.remove();
        }
        // disappering case due to click, hide and then destory Leaderline
        else {
            this.line.hide();
            var that = this;
            // timeout is needed to preserve fade out animation
            setTimeout(function() {
                that.line.remove();
            }, 200);
        }
    }
}