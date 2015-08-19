$(document).ready(function(){

    var correctCount = 0;
    // Replace each string with what the question EVALUATES TO
    var answers = [ 
    {
      questionNumber: 0,
	  question: !true,
      answer:   false
    }, {
      questionNumber: 1,
	  question: !!true,
      answer:   true
    }, {
      questionNumber: 2,
	  question: !!!!0,
      answer:   false
    }, {
	  questionNumber: 3,
	  question: false || true,
      answer:   true
    }, {
      questionNumber: 4,
	  question: false && true,
      answer:   false
    }, {
      questionNumber: 5,
	  question: true && 'false',
      answer:   'false'
    }, {
      questionNumber: 6,
	  question: undefined || true,
      answer:   true
    }, {
      questionNumber: 7,
	  question: false && 73,
      answer:   false
    }, {
      questionNumber: 8,
	  question: false || 73,
      answer:   73
    }, {
      questionNumber: 9,
	  question: 73 || false,
      answer:   73
    }, {
      questionNumber: 10,
	  question: '73' == 73,
      answer:   true
    }, {
      questionNumber: 11,
	  question: '73' === 73,
      answer:   false
    }, {
      questionNumber: 12,
	  question: true !== false,
      answer:   true
    }, {
      questionNumber: 13,
	  question: (true + true) * 2,
      answer:   4
    }, {
      questionNumber: 14,
	  question: !![],
      answer:   true
    }, {
      questionNumber: 15,
	  question: [1, 2 + '2', 3 + 3][1],
      answer:   "22"
    }, {
      questionNumber: 16,
	  question: [1, [2, 3, 4, [5, 6, [7]], [8, 9]], 10][1][3][2][0],
      answer:   7
    }, {
      questionNumber: 17,
	  question: { thisMightBe: null }['thisMightBe'] || false,
      answer:   false
    }, {
      questionNumber: 18,
	  question: true && (null || 0) || (false && !!(33 !== '33')) || (NaN && '' || undefined),
      answer:   undefined
    }, {
      questionNumber: 19,
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
	var falseFilterUsed = false;
	
	var trueAnswersFiltered = _.filter(answers, function(x){return x.answer === trueFilterUsed});
	$('#trueAnswers').html(trueAnswersFiltered.length + " answers that are " + trueFilterUsed);

	var falseAnswersFiltered = _.filter(answers, function(x){return x.answer === falseFilterUsed});
	$('#falseAnswers').html(falseAnswersFiltered.length + " answers that are " + falseFilterUsed);
	
	var otherAnswersFiltered = _.filter(answers, function(x){return x.answer !== trueFilterUsed && x.answer !== falseFilterUsed });
	$('#otherAnswers').html(otherAnswersFiltered.length + " answers that are some other answer.");
	
	var notTrueAnswers = _.reject(answers, function(x){return x.answer === trueFilterUsed});
	$('#notTrueAnswers').html(notTrueAnswers.length + " answers that are not " + trueFilterUsed);
	
	var notFalseAnswers = _.reject(answers, function(x){return x.answer === falseFilterUsed});
	$('#notFalseAnswers').html(notFalseAnswers.length + " answers that are not " + falseFilterUsed);
	
	var trueQuestionList = _.map(trueAnswersFiltered, function(answer){return answer.questionNumber});
	$('#trueQuestionList').html("Questions that eval to true: " + trueQuestionList);
	
	var falseQuestionList = _.map(falseAnswersFiltered, function(answer){return answer.questionNumber});
	$('#falseQuestionList').html("Questions that eval to false: " + falseQuestionList);
	
	var trueQuestionListReduceSum = _.reduce(trueQuestionList, function(memo, num){return memo + num});
	$('#trueQuestionListReduceSum').html("Reduce sum of true question numbers: " + trueQuestionListReduceSum);
	
	var falseQuestionListReduceSum = _.reduce(falseQuestionList, function(memo, num){return memo + num}, 20);
	$('#falseQuestionListReduceSum').html("Reduce sum of false question numbers with memo of 20 adding on : " + falseQuestionListReduceSum);

    $('#correctAmount').html("Rob got " + correctCount + "(" + (correctCount-1) + ")" + " out of 20(19) Correct!!!");

  });