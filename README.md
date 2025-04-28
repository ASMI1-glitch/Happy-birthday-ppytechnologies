# Next.js + Capacitor Birthday Cake Wish (Web, Android, iOS)

This project demonstrates the implementation of a **Birthday Cake Wish** feature for first-time user logins across **Web**, **Android**, and **iOS** using **Next.js** and **Capacitor**. The project is intended as a part of the Weframetech interview assignment and showcases a responsive and cross-platform web application that greets users with a birthday cake animation upon their first login.

## Features

- **Birthday Cake Wish**: A birthday cake animation is displayed for first-time user logins on the web, Android, and iOS platforms.
- **Cross-platform Compatibility**: The app is fully functional on all three platforms—Web, Android, and iOS.
- **Capacitor Integration**: The Next.js app is converted to both Android and iOS apps using Capacitor.
- **Responsive UI**: The web version is fully responsive, ensuring the birthday cake animation looks great on all screen sizes.

## Technologies Used

- **Next.js**: For building the React-based web application.
- **Capacitor**: To convert the Next.js app to Android and iOS apps.
- **Tailwind CSS**: For styling the UI components with a mobile-first, responsive approach.
- **JavaScript (React)**: For frontend logic and user interface interactions.
- **Loom**: For video recording and showcasing the implementation on all three platforms.

## Setup and Installation

To run this project locally, follow the steps below:

1. Clone the repository:
    ```bash
    git clone <repository_url>
    cd <project_folder>
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up Capacitor for Android and iOS:
    - For Android:
        ```bash
        npx cap add android
        npx cap open android
        ```
    - For iOS:
        ```bash
        npx cap add ios
        npx cap open ios
        ```

4. Run the app locally for web:
    ```bash
    npm run dev
    ```

5. Build and run the Android/iOS app in their respective emulators or physical devices:
    ```bash
    npx cap sync
    ```

## Video Demonstration

A video showcasing the implementation of the birthday cake wish on web, Android, and iOS is available here: [Loom Video Link](https://www.loom.com/share/1ce7f553804045b3835708c8eb3b251c?sid=30b53c4f-98e1-47ac-9240-fbe9598f9961).

## Difficulties Faced

Throughout the project, several challenges were encountered and overcome, including:

1. **Platform Compatibility**: Ensuring the birthday cake wish worked seamlessly across the web, Android, and iOS required adjusting certain UI elements for responsiveness. The animation needed to work smoothly across all environments, which required tweaking and testing across different screen sizes.
   
2. **Capacitor Setup**: Converting a Next.js web app into native Android and iOS apps using Capacitor presented several difficulties. Initially, there were issues related to asset management and ensuring that the same styling worked across both platforms. I resolved these issues by tweaking the Capacitor configuration and ensuring that the app was built correctly for both platforms.

3. **First-Time User Detection**: Implementing the logic to detect first-time logins and triggering the birthday cake animation was tricky. This required integrating local storage to track user sessions and ensuring that the animation only appeared for new users, without affecting subsequent logins.

4. **Cross-Platform Animation Consistency**: The birthday cake animation needed to be consistent across all platforms. While animations work well on the web, achieving the same effect on Android and iOS required adjustments to ensure that performance and visual fidelity were maintained across devices.

5. **Debugging Mobile Versions**: Testing on physical devices for both Android and iOS presented challenges with debugging. Occasionally, some features did not behave as expected, which required testing, debugging, and adjustments to the Capacitor configuration for smooth operation.

## Conclusion

This project successfully integrates **Next.js**, **Capacitor**, and custom animations to create a fun and engaging birthday cake wish for first-time users across multiple platforms. The challenges faced throughout the process helped me improve my skills in cross-platform development, responsive design, and handling platform-specific issues.

---

Feel free to explore the project, and let me know if you have any questions or suggestions for improvement!
