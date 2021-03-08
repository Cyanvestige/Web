//Coding Challenge #1 from lecture 134
'use strict';
const Data1 = [5, 2, 3];
const Data2 = [1, 5, 3, 9, 6, 1];
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const input = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    typeof input === 'number' &&
      input < this.answers.length &&
      this.answers[input]++; //An interesting Method

    this.displayResults();
    this.displayResults('string');
  },
  displayResults: function (type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

document.querySelector('.poll').addEventListener('click', () => {
  poll.registerNewAnswer();
});

const testObject1 = { answers: Data1 };
const testObject2 = { answers: Data2 };
poll.displayResults.call(testObject1);
poll.displayResults.call(testObject2);
poll.displayResults.call(testObject1, 'string');
poll.displayResults.call(testObject2, 'string');
