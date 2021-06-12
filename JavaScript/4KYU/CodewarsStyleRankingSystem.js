class User {
    constructor() {
        this.rank = -8;
        this.progress = 0;
        this.RANKS = {
            "-8": 1,
            "-7": 2,
            "-6": 3,
            "-5": 4,
            "-4": 5,
            "-3": 6,
            "-2": 7,
            "-1": 8,
            "1": 9,
            "2": 10,
            "3": 11,
            "4": 12,
            "5": 13,
            "6": 14,
            "7": 15,
            "8": 16,
        }
    }
    incProgress(executed_rank) {
        if (!this.RANKS[executed_rank]) throw new Error('Not Supported Range')

        if (this.RANKS[executed_rank] == this.RANKS[this.rank] && this.rank !==8) {
            this._progress(3)
        }
        if (this.RANKS[executed_rank] === this.RANKS[this.rank - 2] && this.rank !==8) {
            this._progress(1)
        }
        if (this.RANKS[executed_rank] <= this.RANKS[this.rank - 3] && this.rank !==8) {

            this._progress(0)

        }
        if (this.RANKS[executed_rank] > this.RANKS[this.rank] && this.rank !==8) {

            this._progress(10 * ((this.RANKS[executed_rank] - this.RANKS[this.rank]) * (this.RANKS[executed_rank] - this.RANKS[this.rank])));
        }
        this._update();
    }
    _update() {
        if (this.progress >= 100) {
            this.progress -= 100;
            this._rank();
            this._update();
        }
    }

    _progress(value) {
        this.progress += value
    }
    _rank() {
        if (this.rank === -1) this.rank = 1
        else this.rank++
        if(this.rank === 8) this.progress = 0
    }
}






