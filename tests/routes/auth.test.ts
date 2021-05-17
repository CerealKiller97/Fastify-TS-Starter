import { test } from 'tap';
import { build } from '../helper';

test('It returns 400 status code, when validation fails.', async (t) => {
  // Arrange
  const app = await build(t);

  // Act
  const res = await app.inject({
    url: '/api/login',
    method: 'POST',
    payload: {
      email: '',
      password: ''
    }
  });

  // Assert
  t.contains(res.json().message, 'email');
  t.is(res.statusCode, 400);
});

test('It returns 200 status code, when everything is ok.', async (t) => {
  // Arrange
  const app = await build(t);

  // Act
  const res = await app.inject({
    url: '/api/login',
    method: 'POST',
    payload: {
      email: 'test@test.com',
      password: 'test1234'
    }
  });

  // Assert
  t.is(res.statusCode, 200);
  t.is(JSON.parse(res.body).message, '/api/login');
  t.isA(JSON.parse(res.body).message, 'string');
});
