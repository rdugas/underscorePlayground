$(document).ready(function(){

    var correctCount = 0;
    // Replace each string with what the question EVALUATES TO
    var answers = [ 
    {
      question: !true,
      answer:   false
    }, {
      question: !!true,
      answer:   true
    }, {
      question: !!!!0,
      answer:   false
    }, {
      question: false || true,
      answer:   true
    }, {
      question: false && true,
      answer:   false
    }, {
      question: true && 'false',
      answer:   'false'
    }, {
      question: undefined || true,
      answer:   true
    }, {
      question: false && 73,
      answer:   false
    }, {
      question: false || 73,
      answer:   73
    }, {
      question: 73 || false,
      answer:   73
    }, {
      question: '73' == 73,
      answer:   true
    }, {
      question: '73' === 73,
      answer:   false
    }, {
      question: true !== false,
      answer:   true
    }, {
      question: (true + true) * 2,
      answer:   4
    }, {
      question: !![],
      answer:   true
    }, {
      question: [1, 2 + '2', 3 + 3][1],
      answer:   "22"
    }, {
      question: [1, [2, 3, 4, [5, 6, [7]], [8, 9]], 10][1][3][2][0],
      answer:   7
    }, {
      question: { thisMightBe: null }['thisMightBe'] || false,
      answer:   false
    }, {
      question: true && (null || 0) || (false && !!(33 !== '33')) || (NaN && '' || undefined),
      answer:   undefined
    }, {
      question: !!!(!!(true === true) && !(!(!(true) || (!!true && !!!!true)))),
      answer:   false
    }
    ];

    answers.forEach(function(answer, i) {
    var answerId = 'answer-' + i;
    var $answer = document.getElementById(answerId);

    $answer.innerHTML = i + '. ';

    if (answer.question === answer.answer) {
      $answer.innerHTML += (answer.answer + ' is correct!');
      $answer.className += ' correct';
      correctCount += 1;
    } else {
      $answer.innerHTML += (answer.answer + ' is incorrect!');
      $answer.className += ' incorrect';
    }
    });
	
	var trueFilterUsed = true;
	var trueAnswersFiltered = _.filter(answers, function(x){return x.answer === trueFilterUsed});
	$('#trueAnswers').html(trueAnswersFiltered.length + " answers that are " + trueFilterUsed);
	
	var falseFilterUsed = false;
	var falseAnswersFiltered = _.filter(answers, function(x){return x.answer === falseFilterUsed});
	$('#falseAnswers').html(falseAnswersFiltered.length + " answers that are " + falseFilterUsed);
	
	var otherAnswersFiltered = _.filter(answers, function(x){return x.answer !== trueFilterUsed && x.answer !== falseFilterUsed });
	$('#otherAnswers').html(otherAnswersFiltered.length + " answers that are some other answer.");

    $('#correctAmount').html("Rob got " + correctCount + "(" + (correctCount-1) + ")" + " out of 20(19) Correct!!!");

  });