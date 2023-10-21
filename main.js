let ladder = {
    step: 0,

    up: function () {
        this.step++;
        return this;
    },
    down: function () {
        this.step--;
        return this;

    },
    showStep: function () {
        console.log(this.step);
        return this;
    }
};
ladder.up();
ladder.up();
ladder.up();
ladder.showStep(); // 3
ladder.down();
ladder.showStep(); // 2
//ladder.up().up().down().showStep(); // 1