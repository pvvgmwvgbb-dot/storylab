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

## Layout rule

The clock pages use a fixed clock placeholder so the clock does not jump when moving between slides with different amounts of text or controls.

## Key animation

The lesson animates 9:00 to 9:30.

It shows two sweeps:

- minute hand sweep: from 12 to 6, half a circle
- hour hand sweep: from 9 to halfway between 9 and 10

The animation page keeps all hour numbers visible, so the learner can see the hour hand moving between 9 and 10.

## Practice

The last slide randomly generates a blank-face clock.

The learner first guesses the time from the hands alone.

Then the teacher can click "show answer" to reveal:

- the full clock face
- the digital reading, such as 12:05

## Run

Open `index.html` in a browser.

Controls:

- Right arrow / Space / Click: next page
- Left arrow: previous page
- F: fullscreen
