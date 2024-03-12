<h1 align="center">Welcome to One Dionys - Notification System! 👋 </h1>

<p align="center">Package to display notifications to users such as success, warning, or error messages. 💖 </p>

<p align="center">
<img src="https://img.shields.io/github/contributors/onedionys/onedionys-notification-system?style=flat-square">
<img src="https://img.shields.io/github/issues/onedionys/onedionys-notification-system?style=flat-square">
<img src="https://img.shields.io/github/stars/onedionys/onedionys-notification-system?style=flat-square"> 
<img src="https://img.shields.io/github/forks/onedionys/onedionys-notification-system?style=flat-square">
<img src="https://img.shields.io/github/last-commit/onedionys/onedionys-notification-system.svg?style=flat-square">
<img src="https://img.shields.io/github/languages/code-size/onedionys/onedionys-notification-system?style=flat-square">
<img src="https://img.shields.io/github/license/onedionys/onedionys-notification-system?style=flat-square">
</p>

## 💾 Requirements

* `Web Browser` - Can be used as an emulator to build applications. Example [Chrome, Firefox, Safari & Opera].
* `Internet` - Because many use CDN and to make it easier to find solutions to all problems.

## 🎯 How To Use

#### Example Syntax

```javascript
const NotificationSystem = require('notification-system');

const notificationSystem = new NotificationSystem();

notificationSystem.addNotification('Hello world!');
console.log(notificationSystem.getNotifications()); // Output: [{ message: 'Hello world!', type: 'info' }]

notificationSystem.clearNotifications();
console.log(notificationSystem.getNotifications()); // Output: []
```

#### Explanation

* This package provides a NotificationSystem class with methods to add, clear, and retrieve notifications. Notifications are stored as objects with message and type properties.

#### Return Value

* `addNotification(message, type)`: Adds a notification to the system. The type parameter is optional and defaults to 'info'.
* `clearNotifications()`: Clears all notifications from the system.
* `getNotifications()`: Returns an array of all current notifications.

## 📆 Release Date

* v1.0.0 : 08 March 2024
* v1.0.1 : 11 March 2024
* v4.0.0 : 11 March 2024
* v4.0.1 : 13 March 2024

## 🧑 Author

* Facebook : <a href="https://www.facebook.com/theonedionys"> Oned Ionys</a>
* Instagram : <a href="https://www.instagram.com/onedionys/"> @onedionys</a>
* Twitter : <a href="https://twitter.com/onedionys"> @onedionys</a>
* LinkedIn :  <a href="https://www.linkedin.com/in/onedionys/"> @onedionys</a>

## 📝 License

* Copyright © 2024 One Dionys
* **One Dionys - Notification System is an open source project licensed under the MIT license**

## ☕️ Suppport & Donation

Love One Dionys - Notification System? Support this project by donating or sharing with others in need.

<a href="https://www.buymeacoffee.com/onedionys"><img src="https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black"/> </a>

**Made with ❤️ One Dionys**
