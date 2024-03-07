const assert = require('assert');
const NotificationSystem = require('../src/notificationSystem');

describe('NotificationSystem', () => {
  let notificationSystem;

  beforeEach(() => {
    notificationSystem = new NotificationSystem();
  });

  it('should add notification correctly', () => {
    notificationSystem.addNotification('Test notification');
    assert.strictEqual(notificationSystem.getNotifications().length, 1);
  });

  it('should clear notifications correctly', () => {
    notificationSystem.addNotification('Test notification');
    notificationSystem.clearNotifications();
    assert.strictEqual(notificationSystem.getNotifications().length, 0);
  });
});
