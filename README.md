# Workout Generator & Tracker

## Overview:
Create a workout generator that randomly suggests exercises for users to perform based on selected categories (e.g., strength, cardio, flexibility). The app will also allow users to log their workouts and track their progress over time.

## Features:

### Component Structure:
- **Exercise Generator:** Generates a random workout.
- **Workout Log:** Stores previous workouts and logs.
- **Progress Tracker:** Displays progress over time, like total workouts completed.

### Event Binding:
- Handle events like generating a random workout based on selected categories.
- Use `EventEmitter` to pass workout data between components (e.g., log completed workouts).

### Dynamic Data Binding:
- Bind user inputs (e.g., workout type or duration) with `ngModel`.
- Display dynamically rendered workout logs using `ngFor`.

### Dynamic CSS Styling:
- Use **class binding** to highlight certain workouts (e.g., different styles for strength, cardio, or flexibility exercises).

## Fun Twist:
Include a “Challenge Mode” where users can set a timer and race to complete as many exercises as possible in a set time limit, with a fun animation when the timer ends.
