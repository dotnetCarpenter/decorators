"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
function guard(f, guard) {
	return (...args) => guard(...args) && f(...args);
}

const guards = {
	zero: (argumentIndex, error = new TypeError()) => (...args) => {
		// if(argumentIndex === "all")
		if (args[argumentIndex] === 0) throw error;
		return true;
	}
};

exports.guard = guard;
exports.guards = guards;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImd1YXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUVBLFNBQVMsS0FBVCxDQUFlLENBQWYsRUFBa0IsS0FBbEIsRUFBeUI7QUFDeEIsUUFBTyxDQUFDLEdBQUcsSUFBSixLQUFhLE1BQU0sR0FBRyxJQUFULEtBQWtCLEVBQUUsR0FBRyxJQUFMLENBQXRDO0FBQ0E7O0FBRUQsTUFBTSxTQUFTO0FBQ2QsT0FBTSxDQUFDLGFBQUQsRUFBZ0IsUUFBUSxJQUFJLFNBQUosRUFBeEIsS0FDTCxDQUFDLEdBQUcsSUFBSixLQUFhO0FBQ1o7QUFDQSxNQUFHLEtBQUssYUFBTCxNQUF3QixDQUEzQixFQUE4QixNQUFNLEtBQU47QUFDOUIsU0FBTyxJQUFQO0FBQ0E7QUFOWSxDQUFmOztRQVVDLEssR0FBQSxLO1FBQ0EsTSxHQUFBLE0iLCJmaWxlIjoiZ3VhcmQuZXM1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCJcblxuZnVuY3Rpb24gZ3VhcmQoZiwgZ3VhcmQpIHtcblx0cmV0dXJuICguLi5hcmdzKSA9PiBndWFyZCguLi5hcmdzKSAmJiBmKC4uLmFyZ3MpXG59XG5cbmNvbnN0IGd1YXJkcyA9IHtcblx0emVybzogKGFyZ3VtZW50SW5kZXgsIGVycm9yID0gbmV3IFR5cGVFcnJvcikgPT5cblx0XHQoLi4uYXJncykgPT4ge1xuXHRcdFx0Ly8gaWYoYXJndW1lbnRJbmRleCA9PT0gXCJhbGxcIilcblx0XHRcdGlmKGFyZ3NbYXJndW1lbnRJbmRleF0gPT09IDApIHRocm93IGVycm9yXG5cdFx0XHRyZXR1cm4gdHJ1ZVxuXHRcdH1cbn1cblxuZXhwb3J0IHtcblx0Z3VhcmQsXG5cdGd1YXJkc1xufSJdfQ==