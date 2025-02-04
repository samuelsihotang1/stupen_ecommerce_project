!(function () {
	var d = function (e, i) {
		function h() {
			var i, t;
			(this.q = []),
				(this.add = function (i) {
					this.q.push(i);
				}),
				(this.call = function () {
					for (i = 0, t = this.q.length; i < t; i++) this.q[i].call();
				});
		}
		function t(i, t) {
			if (i.resizedAttached) {
				if (i.resizedAttached) return void i.resizedAttached.add(t);
			} else (i.resizedAttached = new h()), i.resizedAttached.add(t);
			(i.resizeSensor = document.createElement('div')),
				(i.resizeSensor.className = 'resize-sensor');
			var e =
					'position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;',
				o = 'position: absolute; left: 0; top: 0; transition: 0s;';
			(i.resizeSensor.style.cssText = e),
				(i.resizeSensor.innerHTML =
					'<div class="resize-sensor-expand" style="' +
					e +
					'"><div style="' +
					o +
					'"></div></div><div class="resize-sensor-shrink" style="' +
					e +
					'"><div style="' +
					o +
					' width: 200%; height: 200%"></div></div>'),
				i.appendChild(i.resizeSensor),
				{ fixed: 1, absolute: 1 }[
					(function (i, t) {
						return i.currentStyle
							? i.currentStyle[t]
							: window.getComputedStyle
							? window.getComputedStyle(i, null).getPropertyValue(t)
							: i.style[t];
					})(i, 'position')
				] || (i.style.position = 'relative');
			function s() {
				(r.style.width = d.offsetWidth + 10 + 'px'),
					(r.style.height = d.offsetHeight + 10 + 'px'),
					(d.scrollLeft = d.scrollWidth),
					(d.scrollTop = d.scrollHeight),
					(c.scrollLeft = c.scrollWidth),
					(c.scrollTop = c.scrollHeight),
					(n = i.offsetWidth),
					(a = i.offsetHeight);
			}
			var n,
				a,
				d = i.resizeSensor.childNodes[0],
				r = d.childNodes[0],
				c = i.resizeSensor.childNodes[1];
			c.childNodes[0];
			s();
			function l(i, t, e) {
				i.attachEvent ? i.attachEvent('on' + t, e) : i.addEventListener(t, e);
			}
			function p() {
				(i.offsetWidth == n && i.offsetHeight == a) ||
					(i.resizedAttached && i.resizedAttached.call()),
					s();
			}
			l(d, 'scroll', p), l(c, 'scroll', p);
		}
		var o = Object.prototype.toString.call(e),
			s =
				'[object Array]' === o ||
				'[object NodeList]' === o ||
				'[object HTMLCollection]' === o ||
				('undefined' != typeof jQuery && e instanceof jQuery) ||
				('undefined' != typeof Elements && e instanceof Elements);
		if (s) for (var n = 0, a = e.length; n < a; n++) t(e[n], i);
		else t(e, i);
		this.detach = function () {
			if (s) for (var i = 0, t = e.length; i < t; i++) d.detach(e[i]);
			else d.detach(e);
		};
	};
	(d.detach = function (i) {
		i.resizeSensor &&
			(i.removeChild(i.resizeSensor),
			delete i.resizeSensor,
			delete i.resizedAttached);
	}),
		'undefined' != typeof module && void 0 !== module.exports
			? (module.exports = d)
			: (window.ResizeSensor = d);
})(),
	(function (m) {
		m.fn.theiaStickySidebar = function (i) {
			var t, e;
			function o(i, t) {
				return (
					!0 === i.initialized ||
					(!(m('body').width() < i.minWidth) &&
						((function (y, i) {
							(y.initialized = !0),
								0 ===
									m('#theia-sticky-sidebar-stylesheet-' + y.namespace)
										.length &&
									m('head').append(
										m(
											'<style id="theia-sticky-sidebar-stylesheet-' +
												y.namespace +
												'">.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>'
										)
									);
							i.each(function () {
								var i = {};
								if (
									((i.sidebar = m(this)),
									(i.options = y || {}),
									(i.container = m(i.options.containerSelector)),
									0 == i.container.length &&
										(i.container = i.sidebar.parent()),
									i.sidebar
										.parents(':not(.theia-exception)')
										.css('-webkit-transform', 'none'),
									i.sidebar.css({
										position: i.options.defaultPosition,
										overflow: 'visible',
										'-webkit-box-sizing': 'border-box',
										'-moz-box-sizing': 'border-box',
										'box-sizing': 'border-box',
									}),
									(i.stickySidebar =
										i.sidebar.find('.theiaStickySidebar')),
									0 == i.stickySidebar.length)
								) {
									var e =
										/(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i;
									i.sidebar
										.find('script')
										.filter(function (i, t) {
											return 0 === t.type.length || t.type.match(e);
										})
										.remove(),
										(i.stickySidebar = m('<div>')
											.addClass('theiaStickySidebar')
											.append(i.sidebar.children())),
										i.sidebar.append(i.stickySidebar);
								}
								(i.marginBottom = parseInt(
									i.sidebar.css('margin-bottom')
								)),
									(i.paddingTop = parseInt(
										i.sidebar.css('padding-top')
									)),
									(i.paddingBottom = parseInt(
										i.sidebar.css('padding-bottom')
									));
								var t,
									o,
									s,
									n = i.stickySidebar.offset().top,
									a = i.stickySidebar.outerHeight();
								function g() {
									(i.fixedScrollTop = 0),
										i.sidebar.css({ 'min-height': '1px' }),
										i.stickySidebar.css({
											position: 'static',
											width: '',
											transform: 'none',
										});
								}
								i.stickySidebar.css('padding-top', 1),
									i.stickySidebar.css('padding-bottom', 1),
									(n -= i.stickySidebar.offset().top),
									(a = i.stickySidebar.outerHeight() - a - n),
									0 == n
										? (i.stickySidebar.css('padding-top', 0),
										  (i.stickySidebarPaddingTop = 0))
										: (i.stickySidebarPaddingTop = 1),
									0 == a
										? (i.stickySidebar.css('padding-bottom', 0),
										  (i.stickySidebarPaddingBottom = 0))
										: (i.stickySidebarPaddingBottom = 1),
									(i.previousScrollTop = null),
									(i.fixedScrollTop = 0),
									g(),
									(i.onScroll = function (i) {
										if (i.stickySidebar.is(':visible'))
											if (m('body').width() < i.options.minWidth)
												g();
											else {
												if (i.options.disableOnResponsiveLayouts)
													if (
														i.sidebar.outerWidth(
															'none' ==
																i.sidebar.css('float')
														) +
															50 >
														i.container.width()
													)
														return void g();
												var t = m(document).scrollTop(),
													e = 'static';
												if (
													t >=
													i.sidebar.offset().top +
														(i.paddingTop -
															i.options.additionalMarginTop)
												) {
													var o,
														s =
															i.paddingTop +
															y.additionalMarginTop,
														n =
															i.paddingBottom +
															i.marginBottom +
															y.additionalMarginBottom,
														a = i.sidebar.offset().top,
														d =
															i.sidebar.offset().top +
															(function (i) {
																var t = i.height();
																return (
																	i
																		.children()
																		.each(
																			function () {
																				t =
																					Math.max(
																						t,
																						m(
																							this
																						).height()
																					);
																			}
																		),
																	t
																);
															})(i.container),
														r = 0 + y.additionalMarginTop;
													o =
														i.stickySidebar.outerHeight() +
															s +
															n <
														m(window).height()
															? r +
															  i.stickySidebar.outerHeight()
															: m(window).height() -
															  i.marginBottom -
															  i.paddingBottom -
															  y.additionalMarginBottom;
													var c = a - t + i.paddingTop,
														l =
															d -
															t -
															i.paddingBottom -
															i.marginBottom,
														p =
															i.stickySidebar.offset().top -
															t,
														h = i.previousScrollTop - t;
													'fixed' ==
														i.stickySidebar.css('position') &&
														'modern' ==
															i.options.sidebarBehavior &&
														(p += h),
														'stick-to-top' ==
															i.options.sidebarBehavior &&
															(p = y.additionalMarginTop),
														'stick-to-bottom' ==
															i.options.sidebarBehavior &&
															(p =
																o -
																i.stickySidebar.outerHeight()),
														(p =
															0 < h
																? Math.min(p, r)
																: Math.max(
																		p,
																		o -
																			i.stickySidebar.outerHeight()
																  )),
														(p = Math.max(p, c)),
														(p = Math.min(
															p,
															l -
																i.stickySidebar.outerHeight()
														));
													var f =
														i.container.height() ==
														i.stickySidebar.outerHeight();
													e =
														(f || p != r) &&
														(f ||
															p !=
																o -
																	i.stickySidebar.outerHeight())
															? t +
																	p -
																	i.sidebar.offset()
																		.top -
																	i.paddingTop <=
															  y.additionalMarginTop
																? 'static'
																: 'absolute'
															: 'fixed';
												}
												if ('fixed' == e) {
													var b = m(document).scrollLeft();
													i.stickySidebar.css({
														position: 'fixed',
														width: S(i.stickySidebar) + 'px',
														transform:
															'translateY(' + p + 'px)',
														left:
															i.sidebar.offset().left +
															parseInt(
																i.sidebar.css(
																	'padding-left'
																)
															) -
															b +
															'px',
														top: '0px',
													});
												} else if ('absolute' == e) {
													var u = {};
													'absolute' !=
														i.stickySidebar.css('position') &&
														((u.position = 'absolute'),
														(u.transform =
															'translateY(' +
															(t +
																p -
																i.sidebar.offset().top -
																i.stickySidebarPaddingTop -
																i.stickySidebarPaddingBottom) +
															'px)'),
														(u.top = '0px')),
														(u.width =
															S(i.stickySidebar) + 'px'),
														(u.left = ''),
														i.stickySidebar.css(u);
												} else 'static' == e && g();
												'static' != e &&
													1 == i.options.updateSidebarHeight &&
													i.sidebar.css({
														'min-height':
															i.stickySidebar.outerHeight() +
															i.stickySidebar.offset().top -
															i.sidebar.offset().top +
															i.paddingBottom,
													}),
													(i.previousScrollTop = t);
											}
									}),
									i.onScroll(i),
									m(document).on(
										'scroll.' + i.options.namespace,
										((t = i),
										function () {
											t.onScroll(t);
										})
									),
									m(window).on(
										'resize.' + i.options.namespace,
										((o = i),
										function () {
											o.stickySidebar.css({ position: 'static' }),
												o.onScroll(o);
										})
									),
									'undefined' != typeof ResizeSensor &&
										new ResizeSensor(
											i.stickySidebar[0],
											((s = i),
											function () {
												s.onScroll(s);
											})
										);
							});
						})(i, t),
						!0))
				);
			}
			function S(i) {
				var t;
				try {
					t = i[0].getBoundingClientRect().width;
				} catch (i) {}
				return void 0 === t && (t = i.width()), t;
			}
			return (
				((i = m.extend(
					{
						containerSelector: '',
						additionalMarginTop: 0,
						additionalMarginBottom: 0,
						updateSidebarHeight: !0,
						minWidth: 0,
						disableOnResponsiveLayouts: !0,
						sidebarBehavior: 'modern',
						defaultPosition: 'relative',
						namespace: 'TSS',
					},
					i
				)).additionalMarginTop = parseInt(i.additionalMarginTop) || 0),
				(i.additionalMarginBottom = parseInt(i.additionalMarginBottom) || 0),
				o((t = i), (e = this)) ||
					(console.log(
						'TSS: Body width smaller than options.minWidth. Init is delayed.'
					),
					m(document).on(
						'scroll.' + t.namespace,
						(function (t, e) {
							return function (i) {
								o(t, e) && m(this).unbind(i);
							};
						})(t, e)
					),
					m(window).on(
						'resize.' + t.namespace,
						(function (t, e) {
							return function (i) {
								o(t, e) && m(this).unbind(i);
							};
						})(t, e)
					)),
				this
			);
		};
		$('#sidebar_fixed').theiaStickySidebar({
			minWidth: 991,
			updateSidebarHeight: false,
			additionalMarginTop: 90,
		});
	})(jQuery);
