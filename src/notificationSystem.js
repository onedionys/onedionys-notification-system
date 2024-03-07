class NotificationSystem {
    constructor() {
      this.notifications = [];
    }
  
    addNotification(message, type = 'info') {
      this.notifications.push({ message, type });
    }
  
    clearNotifications() {
      this.notifications = [];
    }
  
    getNotifications() {
      return this.notifications;
    }
  }
  
  module.exports = NotificationSystem;
  