# Clock Reading Hands

A browser-based StoryLab lesson for learning how to read an analog clock.

## Core idea

The clock face is a reference system.

The hands are the thing that represents time.

The lesson first shows the current computer time with a complete clock face. Then it progressively removes the face references:

```text
full numbers -> only 12/3/6/9 -> blank face
```

The hands do not change while the reference system changes.

## Key animation

The lesson animates 9:00 to 9:30.

It shows two sweeps:

- minute hand sweep: from 12 to 6, half a circle
- hour hand sweep: from 9 to halfway between 9 and 10

This targets a common mistake: drawing the hour hand exactly at 9 for 9:30.

## Practice

The last slide randomly generates a blank-face clock. The learner must infer the time from the hands alone.

## Run

Open `index.html` in a browser.

Controls:

- Right arrow / Space / Click: next page
- Left arrow: previous page
- F: fullscreen
