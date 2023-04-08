;(function (factory) {"use strict";if (typeof define === 'function' && define.amd) {define(['jquery'], factory);} else if (typeof exports !== 'undefined') {module.exports = factory(require('jquery'), window, document);} else {factory(jQuery, window, document);}})(function ($, window, document, undefined) {"use strict";$.fn.roadmap = function (events, opts) {if (!events instanceof Array) {events = [];}var defaults = {slide: 1,eventsPerSlide: 6,rootClass: 'roadmap',prevArrow: 'prev',nextArrow: 'next',orientation: 'auto',eventTemplate: '<div class="event">' + '<div class="event__date">####DATE###</div>' + '<div class="event__content">####CONTENT###</div>' + '</div>'};var settings = $.extend({}, defaults, opts);var buildEvent = function (event, key) {var html = '<li class="' + settings.rootClass + '__events__event">' + settings.eventTemplate + '</li>';html = html.replace('####ICON###', event.icon);html = html.replace('####TITLE###', event.title);html = html.replace('####DATE###', event.date);html = html.replace('####CONTENT###', event.content);var left = 100 / (settings.eventsPerSlide - 1) * key;return $(html).css('left', left + '%');};return this.each(function () {var _this = this;var $this = $(this);var currentSlide = settings.slide - 1;$this.data({events: events,settings: settings,currentSlide: currentSlide}).addClass(settings.rootClass);var clear = function () {$this.removeClass(settings.rootClass + '--initialized');$this.find('.' + settings.rootClass + '__events').remove();$this.find('.' + settings.rootClass + '__navigation').remove();};var buildEvents = function () {var currentSlide = $this.data('currentSlide');var settings = $this.data('settings');var events = $this.data('events');$('<ol/>', { class: settings.rootClass + '__events' }).append(events.slice(currentSlide * settings.eventsPerSlide, (currentSlide + 1) * settings.eventsPerSlide).map(buildEvent)).appendTo(_this);};var buildNavigation = function () {var currentSlide = $this.data('currentSlide');var buildNav = function (nav) {switch (nav) {case 'prev':if (currentSlide > 0) {return $('<li><a href="#" class="' + nav + '">' + settings.prevArrow + '</a></li>');}break;case 'next':if ((currentSlide + 1) * settings.eventsPerSlide < events.length) {return $('<li><a href="#" class="' + nav + '">' + settings.nextArrow + '</a></li>');}break;}return $('<li></li>');};$('<ul/>', { class: settings.rootClass + '__navigation' }).append(['prev', 'next'].map(buildNav)).appendTo(_this);};var setOrientation = function () {var getOrientation = function () {switch (settings.orientation) {case 'horizontal':case 'vertical':case 'auto':return settings.orientation;break;}return 'auto';};$this.addClass(settings.rootClass + '--orientation-' + getOrientation());};var build = function () {clear();buildEvents();buildNavigation();setOrientation();setTimeout(function () {$this.addClass(settings.rootClass + '--initialized');}, 100);};build();$('body').on('click', '.' + settings.rootClass + ' .' + settings.rootClass + '__navigation li > *', function (e) {e.preventDefault();if ($(this).hasClass('prev')) {var currentSlide = $this.data('currentSlide');if (currentSlide < 1) {return false;}$this.data({events: events,settings: settings,currentSlide: currentSlide - 1});build();}else {var currentSlide = $this.data('currentSlide');if ((currentSlide + 1) * settings.eventsPerSlide >= events.length) {return false;}$this.data({events: events,settings: settings,currentSlide: currentSlide + 1});build();}});$(window).on('resize', function () {$this.removeClass(settings.rootClass + '--initialized');build();});});};});