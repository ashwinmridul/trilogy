# Description

Most people today have come to consume the Internet on their mobile devices. Due to this, there has been an explosion of “apps” that run natively on popular platforms (iOS, Android) that make the experience smoother and richer than just a simple HTML+JS single-page app (SPA). This new reality brings a huge cost to companies, which now have to maintain 3 separate codebases for their apps (one for iOS, one for Android, and one for the web). To address this issue cross-platform app development frameworks have been created that automatically translate code written in a common popular programming language (e.g., JavaScript/TypeScript) into a native version for each platform.

This assessment simulates implementing a typical screen of a mobile app. Your task is to implement the “Home” screen of a TikTok clone for education based on [this Figma design](https://www.figma.com/proto/WHPLMEmPriM31ksZ8zrGkE/Quizlr?page-id=2475%253A24127&node-id=2505-24717&viewport=-63%252C-9207%252C0.94&scaling=contain&starting-point-node-id=2505%3A24717&show-proto-sidebar=1).

## In scope:
* Showing content for the “Following” and “For you” sections of the “Home” screen
* Displaying two types of content: Flashcards and Multiple Choice Questions (MCQs)
* Showing the content’s user name,  user icon, and content description
* Browsing through content in an infinite scroll fashion (like TikTok)
* Making the countdown timer at the top left measure the time the user spent in the app
## Not in scope:
* Persisting state changes (e.g., self-rating for flashcards or selected option for MCQs) to an API
* Clicking Like, Comment, Share, and Bookmark buttons (just show them as static icons)
* Clicking into User Profile, Search, or into the Playlist (just show as static icons/text)
* Any of the other sections of the app except Home (Discover, Activity, Bookmarks, Profile)
## API Endpoints

To implement this sample app, use the following API endpoints:
* "Following" section - GET [https://cross-platform.rp.devfactory.com/following](https://cross-platform.rp.devfactory.com/following) - Returns the next content item for the user’s Following section
* "For you" section - GET [https://cross-platform.rp.devfactory.com/for_you](https://cross-platform.rp.devfactory.com/for_you) - Returns the next content item for the user’s For You section
* Reveal answer - GET [https://cross-platform.rp.devfactory.com/reveal?id=X](https://cross-platform.rp.devfactory.com/reveal?id=X) - Reveal the correct answer for an MCQ question with id = X
## Requirements:
* You must implement in one of the following popular cross-platform app development frameworks: Flutter, React Native, Kotlin, Ionic, Xamarin/.NET MAUI, or NativeScript.
* Implement the Rewards screen following industry best practices and the following [Quality Bar](https://docs.google.com/spreadsheets/d/1OBq57fv-ToU2B1A_ttSp6cMMMrh0QZdL2n_G5VH52cw/edit#gid=33758700).

## Demo
[Demo Link](https://drive.google.com/file/d/1GrzRsTnv9VmvK0kICQKMnirUYwicbE3U/view?usp=share_link)
## What will be evaluated?

* We will be looking at the following things (listed in their order of importance):
* Implementing functionality aligned with the app specification,
* Alignment to the provided high-fidelity design (colors, layout, margins, paddings, fonts…),
* Following the [Quality Bar](https://docs.google.com/spreadsheets/d/1OBq57fv-ToU2B1A_ttSp6cMMMrh0QZdL2n_G5VH52cw/edit#gid=33758700),
* Creating parameterized reusable components, and
* Code clarity and maintainability

If you want to earn the highest proficiency, we advise you to do the following:
* Pay attention to the details in both the specification and the design
* Follow the provided [Quality Bar](https://docs.google.com/spreadsheets/d/1OBq57fv-ToU2B1A_ttSp6cMMMrh0QZdL2n_G5VH52cw/edit#gid=33758700),
* Leverage reusability - you are encouraged to refactor code and componentize if you believe it is necessary,
* Be clean and remove any stale, unused code you find, and
* Make the application adhere to user-system preferences (color scheme, font size, and weight)

