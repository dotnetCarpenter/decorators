"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.guard = guard;
exports.guards = void 0;

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
exports.guards = guards;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImd1YXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLFNBQVMsS0FBVCxDQUFlLENBQWYsRUFBa0IsS0FBbEIsRUFBeUI7QUFDeEIsU0FBTyxDQUFDLEdBQUcsSUFBSixLQUFhLEtBQUssQ0FBQyxHQUFHLElBQUosQ0FBTCxJQUFrQixDQUFDLENBQUMsR0FBRyxJQUFKLENBQXZDO0FBQ0E7O0FBRUQsTUFBTSxNQUFNLEdBQUc7QUFDZCxFQUFBLElBQUksRUFBRSxDQUFDLGFBQUQsRUFBZ0IsS0FBSyxHQUFHLElBQUksU0FBSixFQUF4QixLQUNMLENBQUMsR0FBRyxJQUFKLEtBQWE7QUFDWjtBQUNBLFFBQUcsSUFBSSxDQUFDLGFBQUQsQ0FBSixLQUF3QixDQUEzQixFQUE4QixNQUFNLEtBQU47QUFDOUIsV0FBTyxJQUFQO0FBQ0E7QUFOWSxDQUFmIiwiZmlsZSI6Imd1YXJkLmVzNS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiXG5cbmZ1bmN0aW9uIGd1YXJkKGYsIGd1YXJkKSB7XG5cdHJldHVybiAoLi4uYXJncykgPT4gZ3VhcmQoLi4uYXJncykgJiYgZiguLi5hcmdzKVxufVxuXG5jb25zdCBndWFyZHMgPSB7XG5cdHplcm86IChhcmd1bWVudEluZGV4LCBlcnJvciA9IG5ldyBUeXBlRXJyb3IpID0+XG5cdFx0KC4uLmFyZ3MpID0+IHtcblx0XHRcdC8vIGlmKGFyZ3VtZW50SW5kZXggPT09IFwiYWxsXCIpXG5cdFx0XHRpZihhcmdzW2FyZ3VtZW50SW5kZXhdID09PSAwKSB0aHJvdyBlcnJvclxuXHRcdFx0cmV0dXJuIHRydWVcblx0XHR9XG59XG5cbmV4cG9ydCB7XG5cdGd1YXJkLFxuXHRndWFyZHNcbn0iXX0=