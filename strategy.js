// passport는 Node.js에서 인증모듈을 구현할 때 쓰는 미들웨어 라이브러리.
// 여러가지 전략을 기반으로 인증 가능하도록 도움
// 서비스 내 로컬 인증, 네이버, 페이스북 등 다른 서비스 기반으로 인증 지원

var passport = require('passport')
    , LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
    function (username, password, done) {
        User.findOne({ username: username }, function (err, user) {
            if (err) { return done(err); }
            if (!user) {
                return done(null, false, { messag: 'Incorrect username.' });
            }
            if (!user.validPassword(password)) {
                return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
        });
    }
));