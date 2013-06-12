﻿/// <reference path="../scripts/jquery-1.10.0.js" />
/// <reference path="../scripts/prototype.js" />
(function ($) {

    var CHOICES_ROWS_COUNT = 2;

    this.Question = Class.create({
        initialize: function (task, answer) {
            this.task = task;
            this.answer = answer;
        }
    });


    this.MultipleChoiceQuestion = Class.create(Question, {
        initialize: function ($super, task, answer, choices) {
            $super(task, answer);
            this.choices = choices;
        },
        render: function () {
            var container = $("<table class='multiple-question'></table>");

            var task = "<tr><th colspan ='2'>" + this.task + "</td></tr>";
            container.append(task);


            for (var i = 1, counter = 1; i <= CHOICES_ROWS_COUNT; i += 1, counter += 2) {
                var row = $("<tr></tr>");

                var firstCell = $("<td></td>");
                firstCell.attr("id", counter);
                firstCell.append(counter + ". " + this.choices[i]);

                var secondCell = $("<td></td>");
                secondCell.attr("id", counter + 1);
                secondCell.append(counter + 1 + ". " + this.choices[i]);

                row.append(firstCell, secondCell);

                container.append(row);
            }

            return container;
        }
    });


    this.ShortAnswerQuestion = Class.create(Question, {
        initialize: function ($super, task, answer, downLimit, upLimit) {
            $super(task, answer);
            this.upLimit = upLimit;
            this.downLimit = downLimit;
        },
        render: function () {
            var container = $("<div class='short-question'></div>");
            var task = "<p>" + this.task + "</p>";

            var form = $("<form></form>");
            var input = "<input type='text' id='sq-answer' /><br />";
            var submit = "<input type='button' id='sq-submit' value='Submit Answer' />";
            form.append(input, submit);

            container.append(task, form);

            return container;
        }

    });

    return {
        Question: Question,
        MultipleChoiceQuestion: MultipleChoiceQuestion,
        ShortAnswerQuestion: ShortAnswerQuestion,
       // QuestionParser: QuestionParser
    }
}(jQuery))

var QuestionParser = (function () {

    function parseShortAnswerQuestion(json) {

        var saQuestion = new ShortAnswerQuestion(json.task, json.answer, json.downLimit, json.upLimit);
        return saQuestion;
    }

    function parseMultipleChoiceQuestion(json) {

        var answers = [json.a, json.b, json.c, json.d];
        var mcQuestion = new MultipleChoiceQuestion(json.task, json.answer, answers);
        return mcQuestion;
    }



    return {
        parseShortAnswerQuestion: parseShortAnswerQuestion,
        parseMultipleChoiceQuestion: parseMultipleChoiceQuestion
    }
}());