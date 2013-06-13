﻿/// <reference path="../scripts/jquery-1.10.0.js" />
/// <reference path="../scripts/prototype.js" />
/// <reference path="../scripts/q.js" />

var GameRenderer = (function ($) {
    var CONTAINER_CLASS = "container";
    var WELCOME_ID = "welcome-screen";

    var Renderer = Class.create({
        initialize: function () {

        },
        renderWelcome: function () {
            var container = $("<div id='" + WELCOME_ID + "' class='" + CONTAINER_CLASS + "'></div>");
            container.append("<h1>Welcome To BananaQuiz Game!</h1>");

            var form = $("<form></form>");
            var inputs = "<label for='nickname'>Please enter your nickname:</label>" +
                         "<br />" +
                         "<input type='text' id='nickname' />" +
                         "<input type='button' id='nickname-button' value='Play!' />";
            form.append(inputs);

            container.append(form);

            $("body").append(container);
        },
        renderNavigation: function () {
            var container = $("<div id='navigation' class='container'></div>");
            container.append("<button id='start_game'>Start Game</button>");
            container.append("<button id='stop_game'>Stop Game</button>");
            container.append("<button id='help'>Help</button>");
            $("body").append(container);
        }
    });

    return {
        Renderer: Renderer
    }
}(jQuery));
