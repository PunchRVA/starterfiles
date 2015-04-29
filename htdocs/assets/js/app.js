/*globals Node:true, NodeList:true*/

$ = (function (document, window, $) {
  // Node covers all elements, but also the document objects
  var node = Node.prototype,
      nodeList = NodeList.prototype,
      forEach = 'forEach',
      trigger = 'trigger',
      each = [][forEach],
      // note: createElement requires a string in Firefox
      dummy = document.createElement('i');

  nodeList[forEach] = each;

  // we have to explicitly add a window.on as it's not included
  // in the Node object.
  window.on = node.on = function (event, fn) {
    this.addEventListener(event, fn, false);

    // allow for chaining
    return this;
  };

  nodeList.on = function (event, fn) {
    this[forEach](function (el) {
      el.on(event, fn);
    });
    return this;
  };

  // we save a few bytes (but none really in compression)
  // by using [trigger] - really it's for consistency in the
  // source code.
  window[trigger] = node[trigger] = function (type, data) {
    // construct an HTML event. This could have
    // been a real custom event
    var event = document.createEvent('HTMLEvents');
    event.initEvent(type, true, true);
    event.data = data || {};
    event.eventName = type;
    event.target = this;
    this.dispatchEvent(event);
    return this;
  };

  nodeList[trigger] = function (event) {
    this[forEach](function (el) {
      el[trigger](event);
    });
    return this;
  };

  $ = function (s) {
    // querySelectorAll requires a string with a length
    // otherwise it throws an exception
    var r = document.querySelectorAll(s || '☺'),
        length = r.length;
    // if we have a single element, just return that.
    // if there's no matched elements, return a nodeList to chain from
    // else return the NodeList collection from qSA
    return length == 1 ? r[0] : r;
  };

  // $.on and $.trigger allow for pub/sub type global
  // custom events.
  $.on = node.on.bind(dummy);
  $[trigger] = node[trigger].bind(dummy);

  return $;
})(document, this);

/*! apollo.js v1.7.0 | (c) 2014 @toddmotto | https://github.com/toddmotto/apollo */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory;
  } else {
    root.apollo = factory();
  }
})(this, function () {

  'use strict';

  var apollo = {};

  var hasClass, addClass, removeClass, toggleClass;

  var forEach = function (items, fn) {
    if (Object.prototype.toString.call(items) !== '[object Array]') {
      items = items.split(' ');
    }
    for (var i = 0; i < items.length; i++) {
      fn(items[i], i);
    }
  };

  if ('classList' in document.documentElement) {
    hasClass = function (elem, className) {
      return elem.classList.contains(className);
    };
    addClass = function (elem, className) {
      elem.classList.add(className);
    };
    removeClass = function (elem, className) {
      elem.classList.remove(className);
    };
    toggleClass = function (elem, className) {
      elem.classList.toggle(className);
    };
  } else {
    hasClass = function (elem, className) {
      return new RegExp('(^|\\s)' + className + '(\\s|$)').test(elem.className);
    };
    addClass = function (elem, className) {
      if (!hasClass(elem, className)) {
        elem.className += (elem.className ? ' ' : '') + className;
      }
    };
    removeClass = function (elem, className) {
      if (hasClass(elem, className)) {
        elem.className = elem.className.replace(new RegExp('(^|\\s)*' + className + '(\\s|$)*', 'g'), '');
      }
    };
    toggleClass = function (elem, className) {
      (hasClass(elem, className) ? removeClass : addClass)(elem, className);
    };
  }

  apollo.hasClass = function (elem, className) {
    return hasClass(elem, className);
  };

  apollo.addClass = function (elem, classes) {
    forEach(classes, function (className) {
      addClass(elem, className);
    });
  };

  apollo.removeClass = function (elem, classes) {
    forEach(classes, function (className) {
      removeClass(elem, className);
    });
  };

  apollo.toggleClass = function (elem, classes) {
    forEach(classes, function (className) {
      toggleClass(elem, className);
    });
  };

  return apollo;

});

// stuff for all pages

// establish variables
var nav = $('.nav-main');
var navToggleButton = $('.nav-toggle');

//nav toggle function
var navToggle = function(e){
  apollo.toggleClass(nav, 'closed open');
  e.preventDefault();
  e.stopPropagation();
}

// if screen is smaller than 'hand' size
if(Modernizr.mq('only all and (max-width: 46em)')){

  // show toggle and collapse menu
  apollo.addClass(nav, 'active closed');

  // add touch/click event
  $('.nav-toggle').on('touchstart', function(e){
    navToggle(e);
  });

  $('.nav-toggle').on('click', function(e){
    navToggle(e);
  });

}
