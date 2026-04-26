import { setCookie, getCookie, H3Event } from 'h3';

export function setSession(event: H3Event, userId: string) {
  setCookie(event, 'session', userId, {
    httpOnly: true,
    sameSite: 'strict',
    secure: false,
    path: '/'
  });
}

export function getSession(event: H3Event) {
  return getCookie(event, 'session');
}